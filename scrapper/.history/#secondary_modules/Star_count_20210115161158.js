async function ite(path) {
  try {
    const starclass = await page.$eval(path, (el) => el.className);
    sc = starclass.trim().split(/ +/g)[0];
    //console.log("class of star: "+sc)
    return sc;
  } catch (err) {
    console.log("Error:\n" + err);
    return "err";
  }
}

async function star_count(page) {
  i = 1;
  stars = [];
  level = "";
  while (i <= 5) {
    path = "#star" + i.toString();
    //console.log("path: "+path);
    //console.log("typeof(path): "+typeof(path));
    await ite(path).then((numb) => {
      stars.push(numb);
    });
    //console.log("stars: "+stars);
    i += 1;
  }
  for (i in stars) {
    if (i > 0) {
      if (stars[i] != stars[i - 1]) {
        order = 5 - i;
        if (stars[i] == 1) {
          rank = "bronze";
        }
        if (stars[i] == 2) {
          rank = "silver";
        }
        if (stars[i] == 3) {
          rank = "gold";
        }
        level = order.toString() + " " + rank;
      }
    }
  }
  console.log("level: " + level);
}

async function star_count_selector(selector) {
  i = 1;
  stars = [];
  level = "";
    try {
      const starclass = await page.$eval(selector, (el) => el.className);
      sc = starclass.trim().split(/ +/g)[0];
      //console.log("class of star: "+sc)
      return sc;
    } catch (err) {
      console.log("Error:\n" + err);
      return "err";
    }
  while (i <= 5) {
    //console.log("selector: "+selector);
    //console.log("typeof(selector): "+typeof(selector));
    await ite(selector).then((numb) => {
      stars.push(numb);
    });
    //console.log("stars: "+stars);
    i += 1;
  }
  for (i in stars) {
    if (i > 0) {
      if (stars[i] != stars[i - 1]) {
        order = 5 - i;
        if (stars[i] == 1) {
          rank = "bronze";
        }
        if (stars[i] == 2) {
          rank = "silver";
        }
        if (stars[i] == 3) {
          rank = "gold";
        }
        level = order.toString() + " " + rank;
      }
    }
  }
  console.log("level: " + level);

}
module.exports = { star_count, star_count_selector };
