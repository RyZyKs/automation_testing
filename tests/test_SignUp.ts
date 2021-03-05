import "chromedriver"
import {Utils} from "../utils/Utils";
import * as assert from "assert"
import {randomInt} from 'crypto';
import {HomePage} from '../pages/HomePage';
import {AuthenticationPage} from '../pages/AuthenticationPage';
import {CreateAnAccountPage} from '../pages/CreateAnAccountPage';
import {MyAccPage} from '../pages/MyAccPage';

let utils: Utils = new Utils();
let homePage: HomePage = new HomePage();
let authenticationPage: AuthenticationPage = new AuthenticationPage();
let createAnAcc: CreateAnAccountPage = new CreateAnAccountPage();
let myAccPage: MyAccPage = new MyAccPage();

// *******************************************************
// Global variables.
// *******************************************************

//Common
const gTestName: string = "Sign Up test.";
let gTestStatus: string = "Failed";

//Specified only to this test
const newUser: string = "Przemek" + randomInt(100000) + "@automation.com";

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

            console.log("[STEP 2] - Create an account");
            await utils.setTextByXpath(authenticationPage.LOCATOR_INPUT_EMAIL_ADDRESS, newUser, "Email address input");
            await utils.clickWebElement(authenticationPage.LOCATOR_BUTTON_CREATE_AN_ACC, createAnAcc.LOCATOR_TITLE_CREATE_AN_ACC);

            console.log("-- Fill up registration form. --");
            await utils.clickWebElement(createAnAcc.LOCATOR_RADIO_BUTTON_MR);
            await utils.setTextByXpath(createAnAcc.LOCATOR_INPUT_FIRST_NAME, "Przemek", "First Name input");
            await utils.setTextByXpath(createAnAcc.LOCATOR_INPUT_LAST_NAME, "XYZ", "Last Name input");
            await utils.setTextByXpath(createAnAcc.LOCATOR_INPUT_PASSWORD, "Password123", "Password input");
            await utils.setTextByXpath(createAnAcc.LOCATOR_INPUT_FIRST_NAME_ADD, "Przemek", "First Name address input");
            await utils.setTextByXpath(createAnAcc.LOCATOR_INPUT_LAST_NAME_ADD, "XYZ", "Last Name address input");
            await utils.setTextByXpath(createAnAcc.LOCATOR_INPUT_ADDRESS, "ul. Krakowska 10", "Address input");
            await utils.setTextByXpath(createAnAcc.LOCATOR_INPUT_CITY, "Krakow", "City input");
            await utils.clickWebElement(createAnAcc.getLocatorDropdownForState("Alabama"));
            await utils.setTextByXpath(createAnAcc.LOCATOR_INPUT_ZIP_CODE, "30500", "Zip code input");
            await utils.setTextByXpath(createAnAcc.LOCATOR_INPUT_MOBILE_PHONE, "500-500-500", "Mobile phone input");
            await utils.clickWebElement(createAnAcc.LOCATOR_BUTTON_REGISTER);

            console.log("[Expected result] 'My Account' page is displayed");
            assert.equal(true, await utils.checkIfWebElementIsVisible(myAccPage.LOCATOR_TITLE_MY_ACCOUNT));
        } catch (e) {
            gTestStatus = "Failed";
            throw new Error("Test has failed. " + e);
        }
        gTestStatus = "Passed";
    });

    after("After step", async () => {
        console.info("Running the 'After' step.");

        try {
            console.log("--- Status of the test: " + gTestStatus + ". ---");
        } catch (e) {
            console.warn("'After' step step has failed." + e);
        } finally {
            await utils.quitBrowser();
        }
    });
});