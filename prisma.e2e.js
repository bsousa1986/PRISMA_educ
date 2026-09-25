const { test, expect } = require('@playwright/test');

test('PRISMA navigation works', async ({ page }) => {
  const errors = [];
  page.on('pageerror', e => errors.push(String(e)));

  await page.goto('https://bsousa1986.github.io/PRISMA_educ/', {
    waitUntil: 'networkidle',
    timeout: 60000
  });

  await page.getByRole('button', { name: /Área do professor/i }).click();

  await page.locator('[data-hot-tab="curriculo"]').click();
  await expect(page.getByRole('heading', { name: 'Módulos curriculares' })).toBeVisible();

  await page.locator('[data-hot-unit]').first().click();
  const main = page.locator('#workspaceContent main.prisma-main');
  await expect(main.getByText('Aprendizagens Essenciais', { exact: false }).first()).toBeVisible();
  await expect(main.getByText('Problema filosófico', { exact: true })).toBeVisible();

  const moduleId = await page.locator('[data-hot-create]').getAttribute('data-hot-create');
  expect(moduleId).toBeTruthy();
  await page.locator('[data-hot-create]').click();
  await expect(main.getByText('Plano de aula', { exact: false }).first()).toBeVisible();
  await expect(main.getByText('Evidência de aprendizagem', { exact: false })).toBeVisible();

  await page.locator('[data-hot-tab="recursos"]').click();
  await expect(main.getByText('Biblioteca pedagógica', { exact: true })).toBeVisible();
  await expect(page.locator('[data-hot-res], [data-hot-extra]').first()).toBeVisible();

  await page.locator('[data-hot-res], [data-hot-extra]').first().click();
  await expect(main.getByText(/Imprimir \/ guardar PDF/)).toBeVisible();

  await page.locator('[data-hot-tab="curriculo"]').click();
  await page.getByRole('button', { name: /Aluno/i }).click();
  await page.locator('[data-hot-tab="curriculo"]').click();
  await expect(page.getByRole('heading', { name: 'Módulos curriculares' })).toBeVisible();
  await page.locator('[data-hot-unit]').first().click();
  await expect(page.locator('#workspaceContent main.prisma-main').getByText('Problema filosófico', { exact: true })).toBeVisible();

  expect(errors, errors.join('\n')).toEqual([]);
});