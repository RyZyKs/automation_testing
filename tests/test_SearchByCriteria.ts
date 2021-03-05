import "chromedriver"
import {Utils} from "../utils/Utils";
import * as assert from "assert"
import {HomePage} from '../pages/HomePage';
import {WomenPage} from '../pages/WomenPage';

let utils: Utils = new Utils();
let homePage: HomePage = new HomePage();
let womenPage: WomenPage = new WomenPage();

// *******************************************************
// Global variables.
// *******************************************************

//Common
const gTestName: string = "Search test.";
let gTestStatus: string = "Failed";

//Specified only to this test
let products: string[] = ["Faded Short Sleeve T-shirts"];

describe("Test execution: " + gTestName, async function () {
    this.timeout(100000);

    before("Before step", async () => {
        console.info("Running the 'Before' step.");

        try {
            console.log("[PRECONDITIONS] Log in as user.");
            await utils.loadBrowserAndNavigateToThePage();
        } catch (e) {
            throw new Error("'Before' step failed." + e);
        }
    });

    it(gTestName, async () => {
        console.info("Running the 'It' step.");

        try {
            console.log("[STEP 1] - Navigate to 'Women' subpage.");
            await utils.clickWebElement(homePage.LOCATOR_BUTTON_WOMEN);
            assert.equal(true, await utils.checkIfWebElementIsVisible(womenPage.LOCATOR_TITLE_WOMEN));

            console.log("[STEP 2] - Select search criteria.");
            console.log("-- Step 2 -- Selecting 'Tops' category.");
            await utils.clickWebElement(womenPage.LOCATOR_CHECKBOX_CATEGORIES_TOPS);

            console.log("-- Step 2 -- Selecting 'M' size.");
            await utils.clickWebElement(womenPage.LOCATOR_CHECKBOX_SIZE_M);

            console.log("-- Step 2 -- Selecting 'Casual' style.");
            await utils.clickWebElement(womenPage.LOCATOR_CHECKBOX_STYLES_CASUAL);

            console.log("[Expected results] 1 product with name: '" + products[0] + "' is displayed.");
            await womenPage.validateListedProducts(products);
        } catch (e) {
            gTestStatus = "Failed";
            throw new Error("Test failed. " + e);
        }
        gTestStatus = "Passed";
    });

    after("After step", async () => {
        console.info("Running the 'After' step.");

        try {
            console.log("--- Status of the test: " + gTestStatus + ". ---");
        } catch (e) {
            console.warn("'After' step failed." + e);
        } finally {
            await utils.quitBrowser();
        }
    });
});