import "chromedriver"
import {Utils} from "../utils/Utils";
import * as assert from "assert"
import {HomePage} from '../pages/HomePage';
import {AuthenticationPage} from '../pages/AuthenticationPage';
import {MyAccPage} from '../pages/MyAccPage';

let utils: Utils = new Utils();
let homePage: HomePage = new HomePage();
let authenticationPage: AuthenticationPage = new AuthenticationPage();
let myAccPage: MyAccPage = new MyAccPage();

// *******************************************************
// Global variables.
// *******************************************************

//Common
const gTestName: string = "Login test.";
let gTestStatus: string = "Failed";

//Specified only to this test
const user: string = "Przemek@automation.com";
const password: string = "Password123";

describe("Test execution: " + gTestName, async function () {
    this.timeout(100000);

    before("Before step", async () => {
        console.info("Running the 'Before' step.");

        try {
            await utils.loadBrowserAndNavigateToThePage();
        } catch (e) {
            throw new Error("'Before' step failed." + e);
        }
    });

    it(gTestName, async () => {
        console.info("Running the 'It' step.");

        try {
            console.log("[STEP 1] - Navigate to 'Sign In' page.");
            await utils.clickWebElement(homePage.LOCATOR_BUTTON_SIGN_IN, authenticationPage.LOCATOR_TITLE_AUTHENTICATION_PAGE);

            console.log("[STEP 2] - Login to the user account.");
            await authenticationPage.logIn(user, password);

            console.log("[Expected results] 'My Account' page is displayed.");
            assert.equal(true, await utils.checkIfWebElementIsVisible(myAccPage.LOCATOR_TITLE_MY_ACCOUNT));
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