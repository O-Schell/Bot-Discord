async function star_count(page) {
function ite(fi) {
    const path = `#star`+fi.toString();
    console.log(path)

    try {
      startsystem = await page.evaluate((path) => {
        console.log("path: ",path)
        console.log("typeof(path): ",typeof(path))
        //return document
          //.querySelector(`${path}`)
          //.getAttribute("class");
        //.textContent.trim();
      });
      console.log("star: ", startsystem);
      //console.log("startsystem is good");
      fi = fi + 1;

    } catch (err) {
      console.log("Error:\n", err);
      return "err"
    }
  }

  var liste = [];

  var i = 1;
  console.log("i: ",i);

  while (true){
    ite = ite(i)
    if (ite != "err"){
      
      console.log("i: ",i);
      //liste.append(ite)
    } else {
      break
    }
    i+=1
  }
  //console.log(liste)

}

module.exports = { star_count };
