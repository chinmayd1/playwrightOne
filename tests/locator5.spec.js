export async function createToken(page, urls, azureLoginPage) {
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

  if (!accessToken) {
    throw new Error(
      `access_token not found in response: ${JSON.stringify(tokenJson, null, 2)}`
    );
  }
  return accessToken;
}

//////////////////
import { createToken } from '../tests/test_cases/RPA/helpers/createToken';
//////////////////
accessToken: async ({ page, azureLoginPage }, use) => {
  const token = await createToken(page, urls, azureLoginPage);
  await use(token);
}
//////////////////////////////////////////////////////
test('My test', async ({ request, accessToken }) => {
  console.log(accessToken);
});

