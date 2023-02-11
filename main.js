
// DropDown

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// Progress Bar (You must click 2 clicks to move)

let text_1 = document.getElementById("text-1");
let text_2 = document.getElementById("text-2");
let text_3 = document.getElementById("text-3");


text_1.addEventListener("click", (eo) => {
  const progressBar = document.getElementsByClassName('progress-bar')[0]
  setInterval(() => {
    const computedStyle = getComputedStyle(progressBar)
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
    progressBar.style.setProperty('--width', width + .1)
  }, 5)

}
)
text_2.addEventListener("click", (eo) => {
  const progressBar = document.getElementsByClassName('progress-bar')[1]
  setInterval(() => {
    const computedStyle = getComputedStyle(progressBar)
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
    progressBar.style.setProperty('--width', width + .1)
  }, 5)
}
)

text_3.addEventListener("click", (eo) => {
  const progressBar = document.getElementsByClassName('progress-bar')[2]
  setInterval(() => {
    const computedStyle = getComputedStyle(progressBar)
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
    progressBar.style.setProperty('--width', width + .1)
  }, 5)
}
)




//email validation


let email=document.getElementById("email");
let full=document.getElementById("search-wrapper")
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
var btn = document.getElementById('button-submit');
var flg=0;

email.addEventListener("input",(eo)=>{
  
  if(email.value.match(pattern))
  {
    full.style.border="1px solid green";
    btn.disabled=false;
    btn.style.background="black";
    flg=1
    
  }
  else{
    full.style.border="1px solid red";
    btn.disabled=true;
    btn.style.background="#666";
  }
  if(email.value=='')
  {
    full.style.border="none";
    btn.disabled=true;
  }
 
})

btn.addEventListener("click",(eo)=>{
  

  if(btn.disabled=true){
    alert("Email Submitted Successfully");
  }
 
})

// increasing numbers

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const increment = target / 200000;
    console.log(increment);

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
