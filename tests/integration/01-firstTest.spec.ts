import { test, expect } from "@playwright/test";


test.describe('First TestSuit', () => {

    test('Refresh, navigate back and forward', async({ page }) => {
        
        // Navigate to a page
        await page.goto('https://techglobal-training.com/')

        // Refresh the page
        await page.reload()

        // Navigate to another page
        await page.goto('https://techglobal-training.com/frontend')

        // Navigate back
        await page.goBack()

        // Navigate forward
        await page.goForward()

    });

    test('Validate Page Title', async({ page }) => {

        // await page.goto('https://techglobal-training.com/')

        // // To get the title of the page
        // const title = await page.title()
        // console.log(title, 'My page title')

        // // To assert title:
        // expect(title).toBe('TechGlobal Training | Home')

        // A more direct, and easier way to assert what I just did above:

        await expect(page).toHaveTitle('TechGlobal Training | Home')

    });

    test('Validate Page URL', async({ page }) => {

        await page.goto('https://techglobal-training.com/');

        // const url = page.url()

        // expect(url).toBe('https://techglobal-training.com/')

        await expect(page).toHaveURL('https://techglobal-training.com/')

    });

    test('My First Test', async({ page }) => {

        await page.goto('https://techglobal-training.com/');

        // Click method
        // await page.click('#logo') -> This is not the preferred method because it is not reusable
        // await expect(logo).toBeVisible()

        const myLogo = page.locator('#logo') // Storing it as a variable makes it reusable

        await myLogo.click()

        await expect(myLogo).toBeVisible()
        
    })
});
