export class CreateAnAccountPage {

    //--------------------------------------------------------
    // Locators.
    //--------------------------------------------------------
    LOCATOR_BUTTON_REGISTER = "//button[@id='submitAccount']";

    //Your personal information section
    LOCATOR_TITLE_CREATE_AN_ACC = "//h1[contains(text(),'Create an account')]";
    LOCATOR_RADIO_BUTTON_MR = "//input[@id='id_gender1']";
    LOCATOR_INPUT_FIRST_NAME = "//input[@id='customer_firstname']";
    LOCATOR_INPUT_LAST_NAME = "//input[@id='customer_lastname']";
    LOCATOR_INPUT_PASSWORD = "//input[@id='passwd']";

    //Your address section
    LOCATOR_INPUT_FIRST_NAME_ADD = "//input[@id='firstname']";
    LOCATOR_INPUT_LAST_NAME_ADD = "//input[@id='lastname']";
    LOCATOR_INPUT_ADDRESS = "//input[@id='address1']";
    LOCATOR_INPUT_CITY = "//input[@id='city']";
    LOCATOR_INPUT_ZIP_CODE = "//input[@id='postcode']";
    LOCATOR_INPUT_MOBILE_PHONE = "//input[@id='phone_mobile']";

    //--------------------------------------------------------
    // Web element getters.
    //--------------------------------------------------------
    /**
     * @param {string} state - The name of the state.
     */
    public getLocatorDropdownForState(state: string) {
        return "//select[@id='id_state']//option[contains(text(),'" + state + "')]";
    }
}