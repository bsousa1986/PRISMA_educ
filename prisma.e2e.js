const { test, expect } = require('@playwright/test');

test('PRISMA navigation works button by button', async ({ page }) => {
  const errors = [];
  page.on('pageerror', e => errors.push(String(e)));

  await page.goto('https://bsousa1986.github.io/PRISMA_educ/', { waitUntil: 'networkidle', timeout: 60000 });
  await page.getByRole('button', { name: /Área do professor/i }).click();

  await page.locator('[data-clean-tab="curriculo"]').click();
  await expect(page.getByRole('heading', { name: 'Módulos curriculares' })).toBeVisible();

  await page.locator('[data-final-unit]').first().click();
  const main = page.locator('#workspaceContent main.prisma-main');
  await expect(main.getByText('Problema filosófico', { exact: true })).toBeVisible();

  const create = page.locator('[data-hot-create], [data-final-create]').first();
  if (await create.count()) {
    await create.click();
    await expect(main.getByText(/Plano de aula/i).first()).toBeVisible();
  }

  await page.locator('[data-clean-tab="recursos"]').click();
  await expect(main.getByRole('heading', { name: 'Recursos' })).toBeVisible();
  await expect(page.locator('[data-final-resource]').first()).toBeVisible();
  await page.locator('[data-final-resource]').first().click();
  await expect(main.getByText(/Imprimir|guardar PDF/i).first()).toBeVisible();

  await page.locator('[data-clean-tab="curriculo"]').click();
  await page.getByRole('button', { name: /Aluno/i }).click();
  await page.locator('[data-clean-tab="curriculo"]').click();
  await expect(page.getByRole('heading', { name: 'Módulos curriculares' })).toBeVisible();
  await page.locator('[data-final-unit]').first().click();
  await expect(main.getByText('Problema filosófico', { exact: true })).toBeVisible();

  expect(errors, errors.join('\n')).toEqual([]);
});