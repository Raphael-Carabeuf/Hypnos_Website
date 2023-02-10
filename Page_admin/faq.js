const btns = document.querySelectorAll(".acc-btn");

// fn
function accordion() {
  // this = the btn | icon & bg changed
  this.classList.toggle("is-open");

  // the acc-content
  const content = this.nextElementSibling;

  // IF open, close | else open
  if (content.style.maxHeight) content.style.maxHeight = null;
  else content.style.maxHeight = content.scrollHeight + "px";
}

// event
btns.forEach((el) => el.addEventListener("click", accordion));

/*
   
       Jokes are from > 
        https://chartcons.com/100-funny-trick-questions-answers/
        Background image from > 
        https://www.magicpattern.design/tools/css-backgrounds
   
*/