async function star_count(page) {

while (true){
    try {
        startsystem = await page.evaluate(() => {
          return document
            .querySelector(`div[id="star1"]`)
            .getAttribute("class")
            //.textContent.trim();
        });
        console.log("star: ", startsystem);
        //console.log("startsystem is good");
        star_it();
      } catch (err) {
        console.log("Error:\n",err);
      }
    } 
    i=i+1

 
}

module.exports = { star_count };
