async function star_count(page) {
  async function ite(path) {
    try {
      const starclass = await page.$eval(path, el => el.className)
      console.log("class of star: "+starclass.trim().split(/ +/g)[0])
    } catch (err) {
      console.log("Error:\n"+ err);
      return "err";
    }
  }

  i = 1;
  stars=[]
  while (i <= 5) {
    path="#star"+i.toString()
    var ite  = await ite(path);
    console.log("");
    console.log("path: "+path);
    console.log("typeof(path): "+typeof(path));
    ite
    stars.append(ite)
    console.log("stars: "+stars);
    if (i > 1 ) {

    }
    console.log("--");
    i += 1;
  }
}
module.exports = { star_count };
