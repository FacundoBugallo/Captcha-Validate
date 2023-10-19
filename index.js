(function(){
  const fonts = ["cursive","sans-serif","serif","sans-serif","monospace"];
  let captchValue = ""; 
  
  function generateCaptcha(){
    let value = btoa(Math.random()*1000000000)
    value = value.substring(0,5+Math.random()*5)
    captchValue = value
  }
  function setCaptcha(){
    let html = captchValue.split("").map((char)=>{
      const rotate = -20 + Math.trunc(Math.random()*30);
      const font = Math.trunc(Math.random()*fonts.length)
      return `<span
        style="
          transform:rotate(${rotate});
          font-family:${fonts[font]}
        "
      >${char}</span>`;
    }).join("");
    document.querySelector(".login-form .captcha .preview").innerHTML = html;
  }

  function initiCapcha() {
    document.querySelector(".captcha-refresh").addEventListener(
     "click", function(){
      generateCaptcha()
      setCaptcha() 
     });
     generateCaptcha()
     setCaptcha() 
  }

  initiCapcha()

  document.querySelector(".login-form #login-btn").addEventListener(
    "click", function(){
      let inputCaptchaValue = document.querySelector(".captcha input").value;
      if(inputCaptchaValue === captchValue){
        swal('','Loggin In!','Success')
      }else{
        swal('invalid captcha')
      }
    });
})();
