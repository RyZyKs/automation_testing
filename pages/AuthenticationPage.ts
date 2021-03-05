import {Utils} from '../utils/Utils';

let utils: Utils = new Utils();

//--------------------------------------------------------
// Global variables.
//--------------------------------------------------------

//--------------------------------------------------------
// Enums.
//--------------------------------------------------------

export class AuthenticationPage {

    //--------------------------------------------------------
    // Locators.
    //--------------------------------------------------------
    LOCATOR_TITLE_AUTHENTICATION_PAGE = "//h1[contains(text(),'Authentication')]";

    //Create an Account section
    LOCATOR_INPUT_EMAIL_ADDRESS = "//input[@id='email_create']";
    LOCATOR_BUTTON_CREATE_AN_ACC = "//button[@id='SubmitCreate']";

    //Already registered section
    LOCATOR_INPUT_EMAIL_ADDRESS_LOGIN = "//input[@id='email']";
    LOCATOR_INPUT_PASSWORD = "//input[@id='passwd']";
    LOCATOR_BUTTON_SIGN_IN = "//button[@id='SubmitLogin']";

    //--------------------------------------------------------
    // Functions.
    //--------------------------------------------------------
    /**
     * This function logs in to the app using credentials passed by parameters.
     *
     * @param {string} user - The user name.
     * @param {string} password - The password of the user.
     */
    public async logIn(user: string, password: string) {
        console.log("Loading the browser and navigating to the Automation Practice page.");

        try {
            await utils.setTextByXpath(this.LOCATOR_INPUT_EMAIL_ADDRESS_LOGIN, user, "Email address input");
            await utils.setTextByXpath(this.LOCATOR_INPUT_PASSWORD, password, "Password input");
            await utils.clickWebElement(this.LOCATOR_BUTTON_SIGN_IN);
        } catch {
            throw new Error("logIn - function was not successful.");
        }
    } //logIn()
}