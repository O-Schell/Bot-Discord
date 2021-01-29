var request = require("request");
var cheerio = require("cheerio");
const { JSDOM } = require("jsdom");
const puppeteer = require("puppeteer");
const { username, password } = require(`./creds.json`);


(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 929, height: 928 });

  // Where page manipuation start
  console.log("beggining of code");

  // Instructs the blank page to navigate a URL
  await page.goto("https://www.airlines-manager.com/login");

  await page.waitForSelector("#username");
  await page.waitForSelector("#password");
  await page.waitForSelector("#loginSubmit");

  // Login & going home
  await page.type("#username", username);
  await page.type("#password", password);
  await page.click("#loginSubmit");
  await page.waitForSelector(".directAccess");
  await page.goto("https://www.airlines-manager.com/home");
  await page.click("#popupContainer > .popup-workshop-special > .closeMe");

  // Example |Structural solde @ D-1|
  title = await page.evaluate(() => {
    return document.querySelector('div[title="Trésorerie structurelle à J-1"]').querySelector("span").textContent.trim();
  });
  console.log("Trésorerie structurelle à J-1: ",title);

  // Where page manipuation end
  console.log("end of code");

  // Closing the browser
  await browser.close();
})();

/*
  - Number of shared hub
      - Nb of line
      - KM of line
    
  - Member value
  - Member star
  - Member revenue

  - AG number plane
  - AG type plane
  - AG reduction
  
  - Alliance rank
  - Alliance taxes
  - Alliance solde
  - Alliance R&D spend 
  */