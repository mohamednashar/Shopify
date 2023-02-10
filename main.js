
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


// Progress Bar

let text_1 = document.getElementById("text-1");


text_1.addEventListener("click", (eo) => {
  const progressBar = document.getElementsByClassName('progress-bar')[0]
  setInterval(() => {
    const computedStyle = getComputedStyle(progressBar)
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
    progressBar.style.setProperty('--width', width + .1)
  }, 5)


}
)


'use strict';

// Incrementing Numbers
function Inc(obj) {
  var elem = obj.elem;
  var input = (elem.nodeName.toLowerCase() === 'input') ? true : false;
  var value = parseFloat(elem.getAttribute('data-inc-value')) || 0;
  var duration = parseInt(elem.getAttribute('data-inc-duration')) || 0;
  var delay = parseInt(elem.getAttribute('data-inc-delay')) || 0;
  var decimal = ((obj.decimal > 2) ? 2 : obj.decimal) || 0;
  var currency = obj.currency || '';
  var speed = ((obj.speed < 30) ? 30 : obj.speed) || 30;
  var count = 0;
  var increment = value / (duration / speed);
  var interval = null;
  var regex = /\B(?=(\d{3})+(?!\d))/g;
  var run = function () {
    count += increment;
    if (count < value) {
      (input) ? elem.value = currency + (count).toFixed(decimal).toString().replace(regex, ',') : elem.innerHTML = currency + (count).toFixed(decimal).toString().replace(regex, ',');
    } else {
      clearInterval(interval);
      (input) ? elem.value = currency + (value).toFixed(decimal).toString().replace(regex, ',') : elem.innerHTML = currency + (value).toFixed(decimal).toString().replace(regex, ',');
    }
  };
  setTimeout(function () {
    interval = setInterval(run.bind(this), speed);
  }.bind(this), delay);
  this.reset = function () {
    clearInterval(interval);
    value = parseFloat(elem.getAttribute('data-inc-value')) || 0;
    duration = parseInt(elem.getAttribute('data-inc-duration')) || 0;
    increment = value / (duration / speed);
    delay = parseInt(elem.getAttribute('data-inc-delay')) || 0;
    count = 0;
    interval = setInterval(run, speed);
  }.bind(this);
}


var elems = [
  document.querySelector('li:nth-of-type(1) span'),
  document.querySelector("#xx"),
  document.querySelector('li:nth-of-type(3) input')
];
var objs = [];

for (var i = 0, l = elems.length; i < l; i++) {
  objs.push(
    new Inc({
      elem: elems[i],
      speed: 50,
      decimal: 2,

    })
  );
}
elems[0].addEventListener('click', function () {
  objs[0].reset();
});
elems[1].addEventListener('click', function () {
  objs[1].reset();
});
elems[2].addEventListener('click', function () {
  objs[2].reset();
});
