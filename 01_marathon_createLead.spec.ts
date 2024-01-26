import {chromium,expect,test, firefox} from "@playwright/test"
import { channel } from "diagnostics_channel";
import { exists } from "fs";
//test is the function in playwright we are using it
test('To launch different browsers',async()=>{

    //Create a new browser instance
    const browser = await chromium.launch({headless : false,channel:"msedge"});

    //Get the browser Context
   const browserContext=await browser.newContext();

   //Create a new Page (new page returns a promise so using await)
   const page= await browserContext.newPage();

   await page.goto("https://login.salesforce.com/")
   console.log(page.url());
   await page.waitForTimeout(5000)


   await page.fill('#username',"ranjini.r@testleaf.com")
   await page.fill('#password',"Testleaf$1234")
   await page.click('#Login')
   await page.waitForLoadState("load")
   await page.waitForTimeout(5000)
   await expect(page).toHaveTitle("Home | Salesforce")
   await page.click('.slds-icon-waffle')
   await page.waitForTimeout(5000)
   await page.click('[aria-label="View All Applications"]')
   await page.waitForTimeout(5000)
   await page.locator("//input[@class='slds-input']").fill("Leads")

   await page.click("//a[@class='al-tab-item']")


   await page.click("//a[@title='New']")
   await page.waitForLoadState("load")
   await page.waitForTimeout(10000)
    await page.locator("[name='MobilePhone']").fill("9003423929")
   await page.getByLabel("Salutation, --None--").click();
   await page.waitForTimeout(10000)
   await page.getByTitle("Ms.").click();
   await page.waitForTimeout(5000)
   await page.locator("[name='firstName']").fill("Valliammai12")
   await page.locator("[name='lastName']").fill("PlaywrightLearner")
   await page.locator("[name='Company']").fill("LearnGroup")
   await page.locator("[name='SaveEdit']").click();

   /*await page.getByLabel("Search Recently Viewed list view.").fill("Valliammai12")
   await page.keyboard.press("Enter")
   await page.getByRole('link', { name: 'Valliammai PlaywrightLearner' }).click()
   await page.waitForTimeout(5000)*/
    await page.locator('(//span[text()="Show more actions"])[2]').click()
   //await page.getByRole('button', { name: 'Show more actions' }).click()
   await page.waitForTimeout(5000)
   await page.locator("//span[text()='Convert']").click() 

   await page.waitForTimeout(5000)
   await page.getByTitle("Opportunity").click()
   await page.getByLabel("Opportunity Name").clear()
   const oppName= "LearnGrp6"
   await page.getByLabel("Opportunity Name").fill(oppName)
   await page.waitForTimeout(5000)
    await page.getByRole('button', { name: 'Convert', exact: true }).click()
    await page.waitForTimeout(5000)
    let txtMsg="Your lead has been converted"
    let getMsg=await page.locator('.title').nth(4).innerText();
    expect(txtMsg).toContain(getMsg);
    await page.waitForTimeout(5000)
    await page.locator("//button[text()='Go to Leads']").click()
     await page.getByLabel("Search Recently Viewed list view.").fill("Valliammai12")
   await page.keyboard.press("Enter")
   await page.waitForTimeout(5000)
   let noLeads="No items to display."
   let getLeadsMsg= await page.locator("(//span[@part='formatted-rich-text'])[1]").innerText();
   expect(noLeads).toContain(getLeadsMsg);
   await page.locator("//span[text()='Opportunities']").click()
   await page.getByPlaceholder('Search this list...').fill(oppName)
   await page.keyboard.press("Enter")
   await page.getByTitle(oppName).isVisible



})