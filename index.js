const { Key, By } = require("selenium-webdriver");



const GoogleAndideone=async(code,driver)=>{

/*   

goto "https://google.com" ---> in the search bar type "ideone" and press enter ---> at the search result page of "ideone" search 
save that result stats  in a varible named title it will be something like "About 10,30,000 results (0.44 seconds)" , you need to return it later.

--> now click on the 1st link of the results that will lead you to "https://ideone.com/" , store this url in variable
named link1. 
--> in the code editor change language to C and type the code in the editor which you get as an parameter
in the function .
--> hit run button and wait for submitting the code 
--> hitting run will lead you to a new webpage which will have url like "https://ideone.com/{some_random_id}"
--> store this new url in the varaibale named "urlide".



return an object 

return {
  title,
  link1,
  urlide
}


NOTE: all the variables  will be tested not just by the values returned by you but also by visiting the page itself . 
So hack wont work here.

NOTE: Make sure code is being compiled and running successfully.







*/


  await driver.get("https://google.com");
  await driver.findElement(By.name("q")).click();
  await driver.findElement(By.name("q")).sendKeys("ideone", Key.RETURN);
  let title = await driver.findElement(By.id("result-stats")).getText();
  console.log(title);

  let linkLocator = await driver.findElements(By.tagName("cite"));

  let link1 = await linkLocator[0].getText();

  await driver.get(link1);
  console.log(link1);
  await driver.findElement(By.xpath("//div[@class='dropdown dropup']")).click();
  await driver.sleep(2*1000);
 
  await driver.findElement(By.xpath(" //li/a[@id='menu-lang-11']")).click();
 await  driver.sleep(3*1000);
 await driver
 .switchTo()
 .activeElement()
 .sendKeys(Key.CONTROL + "a");
await driver.switchTo().activeElement().sendKeys(code);


await driver.findElement(By.xpath("//button[@id='Submit']")).click();

await  driver.sleep(5*1000);
const urlide=await  driver.getCurrentUrl();
console.log(urlide);
await driver.get(urlide);
return {
  title,
  link1,
  urlide
}
}







module.exports = {
  GoogleAndideone
};



