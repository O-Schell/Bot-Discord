async function value(page, html){
    values=[]
    html=html.replace('<a href="/company/profile/airline/','')
    html=html.replace('"><img src="/images/icons20/profil.png?v1.6.11" title="Profil de la compagnie"></a>','')
    html=html.trim()
    await page.goto(
        `https://www.airlines-manager.com/company/profile/airline/` + html
    );
    await page.waitForSelector(".dashMachine > .bold");
    bold=await page.$$eval(".dashMachine>.bold", e=>e.map((a)=>a.innerText))
    //await page.$$eval('h1 > a', e=>e.map((a)=>a.href))
    console.log("Valorisation: "+bold[1])
    console.log("Solde: "+bold[3])
    console.log("Dernière connection: "+bold[2])
    console.log('ID: '+html)
    //console.log('value: '+value)
}

module.exports = {value}