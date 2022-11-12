require("chromedriver");
const assert = require("assert");
const chai = require("chai");
const { test } = require("mocha");
const expect = chai.expect;

const { Builder, Key, By, until, WebDriver } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const service = new chrome.ServiceBuilder("./chromedriver1eebc8c");
const firefox = require("selenium-webdriver/firefox");

const size = {
  width: 1180,
  height: 720,
};

let driver;

before(async function () {
  driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(
      new chrome.Options()
        .addArguments("--headless")
        .addArguments("--no-sandbox")
        .addArguments("--disable-dev-shm-usage")
        .addArguments("--disable-notifications")
        .windowSize(size)
    )
    //  .setChromeService(service)
    .setFirefoxOptions(new firefox.Options().headless().windowSize(size))
    .build();
});

var indexFunctions = require("./index");

describe("Tests", function () {
  let email = (Math.random() + 1).toString(36).substring(2);
  console.log("email", email + "@gmail.com");
   const a=Math.floor(Math.random() * 100001);
   const b=Math.floor(Math.random() * 100001);
  let code =
    `#include <stdio.h> \n int main(){  \n long long int a=${a},b=${b};  \n printf("%lld",a+b); \n }`;

  test("testing GoogleAndideone ", async () => {
    const result = await indexFunctions.GoogleAndideone(code, driver);
   console.log(result);
   expect(result.title).contain("seconds");
   expect(result.link1).to.equal("https://ideone.com");
   await driver.get("https://google.com");
   await driver.sleep(3*1000);
   await driver.get(result.urlide);
   let output=await driver.findElement(By.id("output-text")).getText();
   console.log(output);
  
    expect(output).to.equal((a+b).toString());
  

   
  });
});


after(() => driver && driver.quit());
