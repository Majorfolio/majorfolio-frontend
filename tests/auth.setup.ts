import { expect, test as setup } from './test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  await page.goto('/signin');
  await page.getByRole('button', { name: /카카오/ }).click();
  await page.waitForURL(/https:\/\/accounts.kakao.com\/login/);
  await expect(
    page.getByRole('textbox', { name: /account information|메일/i }),
  ).toBeVisible();
  await page
    .getByRole('textbox', { name: /account information|메일/i })
    .fill(`${process.env.SIGNIN_VIA_KAKAO_USERNAME}`);
  await page
    .getByRole('textbox', { name: /password|비밀번호/i })
    .fill(`${process.env.SIGNIN_VIA_KAKAO_PASSWORD}`);
  await page.getByRole('button', { name: /^(log in|로그인)$/i }).click();

  await page.waitForURL(/https:\/\/accounts.kakao.com/);
  await page.waitForURL(/https:\/\/logins.daum.net/);
  await page.reload();
  await page.waitForURL('http://localhost:3000/home');

  await page.context().storageState({ path: authFile });
});
