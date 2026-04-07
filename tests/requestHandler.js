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

      this.cleanupFields();
      const actualStatus = response.status();
      responseJSON = await response.json();

      this.logger.logResponse(actualStatus, responseJSON);
      this.statusCodeValidator(actualStatus, statusCode, this.getRequest);
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

      this.cleanupFields();
      const actualStatus = response.status();

      try {
        responseJSON = await response.json();
      } catch (error) {
        responseJSON = {};
      }

      this.logger.logResponse(actualStatus, responseJSON);
      this.statusCodeValidator(actualStatus, statusCode, this.postRequest);
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

      this.cleanupFields();
      const actualStatus = response.status();

      try {
        responseJSON = await response.json();
      } catch (error) {
        responseJSON = {};
      }

      this.logger.logResponse(actualStatus, responseJSON);
      this.statusCodeValidator(actualStatus, statusCode, this.putRequest);
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

      this.cleanupFields();
      const actualStatus = response.status();

      this.logger.logResponse(actualStatus);
      this.statusCodeValidator(actualStatus, statusCode, this.deleteRequest);
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
        `Expected status ${expectStatus} but got ${actualStatus}\n\nRecent API Activity: \n${logs}`
      );
      Error.captureStackTrace(error, callingMethod);
      throw error;
    }
  }

  getHeaders() {
    if (!this.clearAuthFlag) {
      this.apiHeaders['Authorization'] =
        this.apiHeaders['Authorization'] || this.defaultAuthToken;
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