import "chromedriver";
import {Builder, By, until} from "selenium-webdriver";
import * as webdriver from 'selenium-webdriver';

//--------------------------------------------------------
//Global variables.
//--------------------------------------------------------
const gPageUrl: string = "http://automationpractice.com/index.php";
let driver: webdriver.ThenableWebDriver;

export class Utils {

//--------------------------------------------------------
// Functions.
//--------------------------------------------------------
    /**
     * This function loads the chrome browser and navigates to http://automationpractice.com/ page.
     *
     */
    public async loadBrowserAndNavigateToThePage() {
        console.log("Loading the browser and navigating to the Automation Practice page.");

        try {
            driver = new Builder().forBrowser("chrome")
                .build();
            await driver.get(gPageUrl);
            await driver.manage().window().maximize();
        } catch (e) {
            throw new Error("loadBrowserAndNavigateToThePage - function error: " + e);
        }
    } //loadBrowserAndNavigateToThePage()

    /**
     * This function closes the chrome browser.
     *
     */
    public async quitBrowser() {
        console.log("Closing the browser.");

        try {
            await driver.quit()
        } catch (e) {
            throw new Error("quitBrowser - function error: " + e);
        }
    } //quitBrowser()

    /**
     * This function sets a specified by parameter timeout.
     *
     * @param {number} ms - number of milliseconds.
     */
    public async delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    } //delay()

    /**
     * This function return web elements specified by Xpath parameter.
     *
     * @param {string} xPath - The xpath of the web element.
     *
     * @returns (Promise<any>) - The web element or null value.
     */
    public async getWebElement(xPath: string): Promise<any> {
        console.debug("Getting the web element.");
        let webElement: any = null;

        try {
            await driver.wait(webdriver.until.elementLocated(webdriver.By.xpath(xPath)), 3000)
                .then(async () => {
                    webElement = await driver.findElement(webdriver.By.xpath(xPath));
                });
        } catch (e) {
            throw new Error("getWebElement - function error: " + e);
        }
        return webElement;
    } //getWebElement()

    /**
     * This function returns web elements specified by Xpath parameter.
     *
     * @param {string} xPath - The xpath of the web element.
     *
     * @returns (Promise<any>) - The web elements or null value.
     */
    public async getWebElements(xPath: string): Promise<any> {
        console.debug("Getting the web elements.");
        let webElements: any = null;

        try {
            await driver.wait(webdriver.until.elementLocated(webdriver.By.xpath(xPath)), 5000)
                .then(async () => {
                    webElements = await driver.findElements(webdriver.By.xpath(xPath));
                });
        } catch (e) {
            throw new Error("getWebElements function error: " + e);
        }
        return webElements;
    } //getWebElements()

    /**
     * This function clicks web element specified by Xpath parameter and waits for another element if desired.
     *
     * @param {string} xpath - The xpath of the web element.
     * @param {string} waitForXpath - The xpath to wait for.
     *
     * @returns (Promise<any>) - The web element or null value.
     */
    public async clickWebElement(xpath: string, waitForXpath: string = "") {
        console.debug("Clicking the web element.");

        let element: any = null;

        try {
            element = await this.getWebElement(xpath);

            if (element !== null) {
                await driver.wait(element.click())
                    .then(async () => {
                        if (waitForXpath !== "") {
                            console.log("Waiting for another web element.");
                            await this.delay(2000);
                            await this.checkIfWebElementIsVisible(waitForXpath);
                        }
                    });
            } else {
                console.warn("Web element was not found.")
            }
        } catch (e) {
            throw new Error("clickWebElement - function error: " + e);
        }
    } //clickWebElement()

    /**
     * This function checks if an web element is visible.
     *
     * @param {string} xPath - The xpath of the web element.
     *
     * @returns (Promise<any>) - True value if element was visible.
     */
    public async checkIfWebElementIsVisible(xPath: string): Promise<boolean> {
        console.debug("Checking if web element is visible.");
        let elementVisible: boolean = false;

        await driver.wait(until.elementLocated(By.xpath(xPath)), 3000)
            .then(async (element) => {
                await driver.wait(until.elementIsVisible(element))
                    .then(async () => {
                        elementVisible = true;
                        console.log("Desired web element is visible.");
                    });
            }).catch(function (err) {
                console.error("Element is not visible.")
            });
        return elementVisible;
    } //checkIfWebElementIsVisible()

    /**
     * This function sets a text for input element specified by xpath.
     *
     * @param {string} xPath - The xpath of the input element.
     * @param {string} text - The string to be set into input.
     * @param {string} inputName - The input name for setting text.
     *
     * @returns (Promise<any>) - The web element or null value.
     */
    public async setTextByXpath(xPath: string, text: string, inputName: string) {
        console.log("Setting text '" + text + "' into '" + inputName + "'.");
        let element: any = null;

        try {
            element = await this.getWebElement(xPath);

            if (element !== null) {
                await driver.wait(element.sendKeys(text));
            } else {
                console.warn("Web element was not found.")
            }
        } catch (e) {
            throw new Error("setTextByXpath function error: " + e);
        }
    } //setTextByXpath()
}