var request = require("request");
var cheerio = require("cheerio");
const { JSDOM } = require("jsdom");
const puppeteer = require("puppeteer");
const { username, password } = require(`./creds.json`);

function url(pg) {
  console.log("Page URL : " + pg.url());
}

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 929, height: 928 });


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
  await page.click("#popupContainer > .popup-workshop-special > .closeMe")

  //await page.$('#largeContainer > #mainContainer > #mainContent > #mainContentLeft > #pageContent > #content > #newAirlinesManagerHomePage > #dashboardContent > .moduleArea > .indexModule.companyStats.fr > .content > .line')
  var a = console.log(await page.$('div[title="Trésorerie structurelle à J-1"]')["_frames"])
  for(var key in dict) {
    var value = dict[key];
    console.log("key: ",key + "value: ",value)
  }
  //console.log(typeof(a))
  /*console.log( await a.isVisible() );
  console.log( await a.getAttr( "class" ) );
  console.log( await a.getProp( "innerHTML" ) );
  */

  // Set the background color of the first element with class="example" (index 0) in div
  
  console.log("end")



  //divts = document.querySelector('#largeContainer') // > .moduleArea > .indexModule companyStats fr > .content > a[title="Trésorerie structurelle à J-1"] > span
  //console.log("inner worked:", divts)
  //await browser.close();
})();

/* 
request("https://www.airlines-manager.com/home", function(error, response, body) {
  if(error) {
    console.log("Error: " + error);

  }
  if( response.statusCode ==! 200 ) {
      console.log("Status code: " + response.statusCode);
  }

  var $ = cheerio.load(body);
  let title = $('title');

  let ts =   $('div .moduleArea').attr('class');


  console.log(title.text());
  console.log(ts)

});
*/
