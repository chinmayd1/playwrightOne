async function createToken(page, urls, azureLoginPage) {
  const tokenResponsePromise = page.waitForResponse(
    (response) =>
      response.url().includes('/oauth2/v2.0/token') &&
      response.request().method() === 'POST' &&
      response.status() === 200
  );

  await page.goto(urls.pacmanUrl);

  await azureLoginPage.login(
    process.env.AUTOMATION_USER_USERNAME,
    process.env.AUTOMATION_USER_PASSWORD
  );

  const tokenResponse = await tokenResponsePromise;
  const tokenJson = await tokenResponse.json();

  const accessToken = tokenJson.access_token;

  console.log('Scope:', tokenJson.scope);
  console.log('Token captured:', !!accessToken);

  if (!accessToken) {
    throw new Error(
      `access_token not found in response: ${JSON.stringify(tokenJson, null, 2)}`
    );
  }

  return accessToken;
}

module.exports = { createToken };

//////////////////////////////////////////////////////////////
class APILogger {
  constructor() {
    this.recentLogs = [];
  }

  logRequest(method, url, headers, body) {
    const logEntry = { method, url, headers, body };
    this.recentLogs.push({ type: 'Request Details', data: logEntry });
  }

  logResponse(statusCode, body) {
    const logEntry = { statusCode, body };
    this.recentLogs.push({ type: 'Response Details', data: logEntry });
  }

  getRecentLogs() {
    const logs = this.recentLogs
      .map((log) => {
        return `===${log.type}===\n${JSON.stringify(log.data, null, 4)}`;
      })
      .join('\n\n');

    return logs;
  }

  clearLogs() {
    this.recentLogs = [];
  }
}

module.exports = { APILogger };
////////////////////////////////////

const { test } = require('@playwright/test');

class RequestHandler {
  constructor(request, apiBaseUrl, logger, authToken = '') {
    this.request = request;
    this.defaultBaseUrl = apiBaseUrl;
    this.logger = logger;
    this.defaultAuthToken = authToken;

    this.baseUrl = undefined;
    this.apiPath = '';
    this.queryParams = {};
    this.apiHeaders = {};
    this.apiBody = {};
    this.clearAuthFlag = false;
  }

  url(url) {
    this.baseUrl = url;
    return this;
  }

  path(path) {
    this.apiPath = path;
    return this;
  }

  params(params) {
    this.queryParams = params;
    return this;
  }

  headers(headers) {
    this.apiHeaders = headers;
    return this;
  }

  body(body) {
    this.apiBody = body;
    return this;
  }

  clearAuth() {
    this.clearAuthFlag = true;
    return this;
  }

  async getRequest(statusCode) {
    let responseJSON;

    const url = this.getUrl();
    await test.step(`GET request to: ${url}`, async () => {
      this.logger.logRequest('GET', url, this.getHeaders());

      const response = await this.request.get(url, {
        headers: this.getHeaders()
      });

      const actualStatus = response.status();

      try {
        responseJSON = await response.json();
      } catch (error) {
        responseJSON = await response.text();
      }

      this.logger.logResponse(actualStatus, responseJSON);
      this.statusCodeValidator(actualStatus, statusCode, this.getRequest);
      this.cleanupFields();
    });

    return responseJSON;
  }

  async postRequest(statusCode) {
    let responseJSON;
    const url = this.getUrl();

    await test.step(`POST request to: ${url}`, async () => {
      this.logger.logRequest('POST', url, this.getHeaders(), this.apiBody);

      const response = await this.request.post(url, {
        headers: this.getHeaders(),
        data: this.apiBody
      });

      const actualStatus = response.status();

      try {
        responseJSON = await response.json();
      } catch (error) {
        responseJSON = {};
      }

      this.logger.logResponse(actualStatus, responseJSON);
      this.statusCodeValidator(actualStatus, statusCode, this.postRequest);
      this.cleanupFields();
    });

    return responseJSON;
  }

  async putRequest(statusCode) {
    let responseJSON;

    const url = this.getUrl();
    await test.step(`PUT request to: ${url}`, async () => {
      this.logger.logRequest('PUT', url, this.getHeaders(), this.apiBody);

      const response = await this.request.put(url, {
        headers: this.getHeaders(),
        data: this.apiBody
      });

      const actualStatus = response.status();

      try {
        responseJSON = await response.json();
      } catch (error) {
        responseJSON = {};
      }

      this.logger.logResponse(actualStatus, responseJSON);
      this.statusCodeValidator(actualStatus, statusCode, this.putRequest);
      this.cleanupFields();
    });

    return responseJSON;
  }

  async deleteRequest(statusCode) {
    const url = this.getUrl();

    await test.step(`DELETE request to: ${url}`, async () => {
      this.logger.logRequest('DELETE', url, this.getHeaders());

      const response = await this.request.delete(url, {
        headers: this.getHeaders()
      });

      const actualStatus = response.status();

      this.logger.logResponse(actualStatus);
      this.statusCodeValidator(actualStatus, statusCode, this.deleteRequest);
      this.cleanupFields();
    });
  }

  getUrl() {
    const url = new URL(`${this.baseUrl || this.defaultBaseUrl}${this.apiPath}`);

    for (const [key, value] of Object.entries(this.queryParams)) {
      url.searchParams.append(key, String(value));
    }

    return url.toString();
  }

  statusCodeValidator(actualStatus, expectStatus, callingMethod) {
    if (actualStatus !== expectStatus) {
      const logs = this.logger.getRecentLogs();
      const error = new Error(
        `Expected status ${expectStatus} but got ${actualStatus}\n\nRecent API Activity:\n${logs}`
      );
      Error.captureStackTrace(error, callingMethod);
      throw error;
    }
  }

  getHeaders() {
    if (!this.clearAuthFlag && this.defaultAuthToken) {
      this.apiHeaders['Authorization'] =
        this.apiHeaders['Authorization'] ||
        (this.defaultAuthToken.startsWith('Bearer ')
          ? this.defaultAuthToken
          : `Bearer ${this.defaultAuthToken}`);
    }

    return this.apiHeaders;
  }

  cleanupFields() {
    this.apiBody = {};
    this.apiHeaders = {};
    this.baseUrl = undefined;
    this.apiPath = '';
    this.queryParams = {};
    this.clearAuthFlag = false;
  }
}

module.exports = { RequestHandler };

const { createToken } = require('../tests/test_cases/RPA/helpers/createToken');
const { RequestHandler } = require('../tests/utils/request-handlers');
const { APILogger } = require('../tests/utils/logger');


logger: async ({}, use) => {
  const logger = new APILogger();
  await use(logger);
},

accessToken: async ({ page, azureLoginPage, urls }, use) => {
  const token = await createToken(page, urls, azureLoginPage);
  await use(token);
},

requestHandler: async ({ request, urls, logger, accessToken }, use) => {
  const handler = new RequestHandler(
    request,
    urls.pacmanUrl,
    logger,
    accessToken
  );
  await use(handler);
},

//////////////////////////
import { expect } from "@playwright/test";
import test from "../../../../fixtures/fixtures.js";
require("dotenv").config({ path: ".env.api" });

test.only(
  "Creation and Processing of Claim for Meal entertainment",
  { tag: "@BusinessScenarios" },
  async ({
    step,
    MyReporter,
    TestDataLoader,
    accessToken,
    requestHandler,
    logger
  }) => {
    MyReporter.suite("Azure Pacman Business Scenarios");
    MyReporter.description("Creation and Processing of Claim for Meal entertainment");
    MyReporter.epic("RCH-VIC");
    MyReporter.feature("Claims");

    let TestData = TestDataLoader.loadTestData([
      ["BusinessScenarios", "CreateNewClaim_Meal"],
    ]);

    await step("Check access token from fixture", async () => {
      console.log("Token available:", !!accessToken);
    });

    await step("Call GET API using request handler", async () => {
      const response = await requestHandler
        .url("https://salpac-uat01.test.smart.com.au/packagemanagement/Claims/GetClaimPage")
        .params({ PackageId: "1105725" })
        .headers({
          "Content-Type": "application/json",
          Accept: "*/*",
        })
        .getRequest(200);

      console.log("GET API Response:", response);
      console.log("API Logs:", logger.getRecentLogs());
      expect(response).toBeTruthy();
    });
  }
);