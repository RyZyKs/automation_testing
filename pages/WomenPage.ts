import {Utils} from '../utils/Utils';
import * as assert from "assert"

let utils: Utils = new Utils();

//--------------------------------------------------------
// Global variables.
//--------------------------------------------------------

//--------------------------------------------------------
// Enum.
//--------------------------------------------------------

export class WomenPage {

    //--------------------------------------------------------
    // Locators.
    //--------------------------------------------------------
    LOCATOR_TITLE_WOMEN = "//h2[contains(text(),'Women')]";
    LOCATOR_PRODUCT_NAMES = "//a[@class='product-name']";

    //Filters section.
    //---Categories---
    LOCATOR_CHECKBOX_CATEGORIES_TOPS = "//input[@id='layered_category_4']";

    //---Size---
    LOCATOR_CHECKBOX_SIZE_M = "//input[@id='layered_id_attribute_group_2']";

    //---Properties---
    LOCATOR_CHECKBOX_STYLES_CASUAL = "//input[@id='layered_id_feature_11']";

    //--------------------------------------------------------
    // Functions.
    //--------------------------------------------------------
    /**
     * This function logs in to the app using credentials passed by parameters.
     *
     * @param {string[]} products - The table of the products to validate with listed actually.
     */
    public async validateListedProducts(products: string []) {
        console.log("Validating if desired products are listed on the page.");
        let listedProducts: string[] = [];

        try {
            let webElements = await utils.getWebElements(this.LOCATOR_PRODUCT_NAMES);
            for (let webElement of webElements) {
                listedProducts.push(await webElement.getText());
            }

            if (listedProducts.length !== products.length) {
                assert.fail("Invalid number of products than the desired one is displayed.");
            }

            for (let product of products) {
                if (!listedProducts.includes(product)) {
                    assert.fail("Displayed products are not as the products passed by parameter.");
                }
            }
        } catch (e) {
            throw new Error("validateListedProducts - function: " + e);
        }
    } //validateListedProducts()
}