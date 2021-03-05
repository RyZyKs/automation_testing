# Automation Practice
This repository was created to present a few automation practice tests.

## Tech 
Tests use:
* [node.js](https://nodejs.org/)
* [npm](https://www.npmjs.com/)
* [Typescript](https://www.typescriptlang.org/)
* [Mocha](https://mochajs.org/)
* [Selenium](https://www.selenium.dev/)

### How to execute the tests with CI tool - Github Actions

- Login to github with your personal account
- Fork this repository using "Fork" button on top right corner of the repository UI
- Open "Actions" tab in Github repository UI, confirm "I understand my workflows, go ahead and enable them"
- Select "Automation practice testing" from workflows and click 'Run workflow'.

### How to execute the tests manually
*Make sure that you have installed the following setup for typescript automation needs.*\
Install chrome browser and download chrome webdriver [Chrome](https://chromedriver.storage.googleapis.com/index.html?path=88.0.4324.96/) and set path to the driver in enviroment variables.\
Install [Node.js](https://nodejs.org/) v4+ and git [Git](https://git-scm.com/) on your workstation:\
Open CMD on windows, type command 'npm -v', if node is successfuly installed you should see version information.\
Install typescript using command: 'npm install -g typescript', verify by 'tsc -v'.\
Choose and install the IDE (Personally I was using [WebStrom](https://www.jetbrains.com/webstorm/download/#section=windows) - free 30 days trial is available).\
In Webstorm IDE you can quick and easy clone the repository, from main bar click 'Git'* -> clone -> put link: https://github.com/RyZyKs/automation_testing.git and choose your directory.\
*Remember to add Github to version control: File -> Settings -> Version Control -> Github -> Click '+'.\
You can also do it by terminal command:
- clone the repository:
```sh
$ git clone https://github.com/RyZyKs/automation_testing.git
$ cd automation_testing
```
When repository is ready, webstorm automatically ask you to install dependencies, click install.
You can also do it manually:
- install the dependencies:
```sh
$ npm install
```
Initialation of the test run is very easy, go to Projet root, find folder test -> expand -> choose test -> right click -> Run.
You can also do it from the terminal using command:
- example how to run the tests:
```sh
$ cd tests
$ mocha --require ./node_modules/ts-node/register ./tests/test_Login.ts
```
