
var captcha = [];
var code;
function validate(name, msg, captchaval, code) {
var name = document.getElementById("nameinput").value;
var msg = document.getElementById("messageinput").value;
var captchaval = document.getElementById("captchainput").value;
document.getElementById("nameresponse").innerHTML = ""
document.getElementById("msgresponse").innerHTML = ""
document.getElementById("captcharesponse").innerHTML = ""
//get captcha value for comparison
code = Number(captcha.join(''));
  //console.log("code " + code);
if ((name == "") || (name=undefined)) {
    document.getElementById("nameresponse").innerHTML = " Missing name.";
}
  else if ((msg == "") || (msg = undefined)) {
    document.getElementById("msgresponse").innerHTML = " Missing message.";
 }
 else if ((captchaval == "") || (captchaval = undefined)) {
    document.getElementById("captcharesponse").innerHTML = " Missing digits.";
 }
 else if (document.getElementById("captchainput").value != code) {
  document.getElementById("captcharesponse").innerHTML = " Invalid Captcha, try again.";
  }
 else {
  window.location = "thankyou.html";
   console.log("It's working");
} 
}
function createCaptcha(){
  //clear the contents of captcha div first 
  document.getElementById('captcha').innerHTML = "";
for (let i = 0; i < 6; i++) {
  num = Math.ceil(Math.random() * 9);
  captcha.push(num);
}
//console.log("captcha arr " + captcha);
  //find filename
  for (let i = 0; i < captcha.length; i++) {
    var fileName = captcha[i] + ".png";
    document.getElementById("captcha").innerHTML += 
    "<img src='" + fileName + "' id='pic' >"
    
  }
}

