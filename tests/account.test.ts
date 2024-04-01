import { expect, test } from './test';

test.beforeAll(() => {});

test.describe('delete-account feature', () => {
  test('should delete account successfully', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByText(/my/i)).toBeVisible();
    await page.getByRole('radio', { name: /my/i }).click();
    await expect(page.getByRole('button', { name: 'view-more' })).toBeVisible();
    await page.getByRole('button', { name: 'view-more' }).click();

    await page
      .getByRole('button', {
        name: '회원탈퇴',
      })
      .click();

    await page.getByText(/탈퇴하기/).click();
    await expect(page.getByText(/메이저폴리오를 탈퇴했어요/)).toBeVisible();
  });

  test('should sign out successfully', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByText(/my/i)).toBeVisible();
    await page.getByRole('radio', { name: /my/i }).click();
    await expect(page.getByRole('button', { name: 'view-more' })).toBeVisible();
    await page.getByRole('button', { name: 'view-more' }).click();

    await page
      .getByRole('button', {
        name: '로그아웃',
      })
      .click();

    await page.getByText(/로그아웃하기/).click();
    await expect(page.getByText(/메이저폴리오를 로그아웃했어요/)).toBeVisible();
  });
});
