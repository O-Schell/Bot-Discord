const puppeteer = require("puppeteer");

const TEST = require(`./#main_modules/Test`);
const SHARED = require(`./#main_modules/Shared`);
const MEMBER = require(`./#main_modules/Member`);
const AG = require(`./#main_modules/AG`);
const ALLIANCE = require(`./#main_modules/Alliance`);
var fs = require("fs");
var path = require("path");

const { username, password } = require(`./data/creds.json`);


  date_ob = new Date();
  date = ("0" + date_ob.getDate()).slice(-2);
  month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  year = date_ob.getFullYear();
  file_name = `${date}-${month}-${year}.txt`;
  dir = "./output/";
  f = path.basename(file_name);
  dest = path.resolve(dir, f);

  console.log("");

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    console.log(` CREATED`);
  } else {
    console.log(`OUTPUT DIRECTORY ALREADY EXIST`);
  }

  fs.writeFile(file_name, "", function (err) {
    if (err) throw err;
    else {
      console.log("OUTPUT FILE CREATED");
      fs.rename(file_name, dest, (err) => {
        if (err) throw err;
        else console.log("OUTPUT MOVED TO OUTPUT DIRECTORY ");
      });
    }
  });


(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 928 });

  // Where page manipulation start
  console.log("");
  console.log("start of page manipluation");
  console.log("----");
  console.log("");

  // Instructs the blank page to navigate a URL
  await page.goto("https://www.airlines-manager.com/login");

  await page.waitForSelector("#username");
  await page.waitForSelector("#password");
  await page.waitForSelector("#loginSubmit");

  // Login
  await page.type("#username", username);
  await page.type("#password", password);
  await page.click("#loginSubmit");
  await page.waitForSelector(".directAccess");
  await page.goto("https://www.airlines-manager.com/home");

  // Close the pop-up if it exist
  try {
    await page.click("#popupContainer > .popup-workshop-special > .closeMe");
    console.log("pop up: closed");
  } catch (error) {
    console.log("pop up: null");
  } finally {
    console.log("");
  }

  //Execute the TEST module
  //await TEST.prelaunch_test(page);

  //console.log("")

  //Execute the MEMBER module
  await MEMBER.main_member(page);

  console.log("");

  //Execute the SHARED module
  //await SHARED.main_shared(page);

  //Execute the AG module
  //await AG.main_AG(page);

  //Execute the ALLIANCE module
  //await ALLIANCE.main_alliance(page);

  // Where page manipulation end
  console.log("----");
  console.log("end of page manipulation");

  // Closing the browser
  //await browser.close();
})();

/*
Member:
  - Member Alliance ✅
  - Member star ✅
  - Member value
  - Member revenue

  - List of hub ✅
  - Number of shared hub 
  - Number of shared line
  - KM of shared line

  - AG number plane
  - AG type plane
  - AG reduction


  CEO:
  - Alliance rank
  - Alliance taxes
  - Alliance solde
  - Alliance R&D spend 
  */