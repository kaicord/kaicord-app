
window.onerror = function (msg, url, linenumber, colnumber) {
  alert('Error message: ' + msg + '\nURL: ' + url + '\nLine Number: ' + linenumber + '\nCol Number: ' + colnumber);
  return true;
}

let count = 0;
let focusIndex = -1;

window.addEventListener("load", function() {
  console.log("Hello World!");
  alert(1)
  try {
    fetch("https://jipfr.nl").then(alert)
  } catch(er) {
    alert(er)
  }
});

function addCount() {
  count++
  updateCount()
}

function decCount() {
  count--
  updateCount()
}

function updateCount() {
  document.querySelector('.counter').innerText = count;
}

document.addEventListener("keydown", (evt) => {
  // evt.preventDefault()
  addText('Down', evt.key)
})

document.addEventListener("keyup", (evt) => {
  // evt.preventDefault()
  addText('Up', evt.key)
  const nodes = document.querySelectorAll("[tabindex]");
  if(evt.key === "ArrowDown") {
    focusIndex++
  } else if(evt.key === "ArrowUp") {
    focusIndex--
    // if(focusIndex > document.querySelectorAll("[tabindex]").length) focusIndex = 0;
  } else if(evt.key === "Enter") {
    if(focusIndex < 0) focusIndex = 0;
    // nodes[focusIndex % nodes.length].click()
  }
  if(focusIndex < 0) focusIndex = nodes.length - 1;
  setFocus()
})

function addText(title, str) {
  document.querySelector(".text").innerHTML += `<b style="width: 100px; display: inline-block;">${title}</b> ${str}<br />`
  window.scrollTo(0, document.body.scrollHeight + 100)
}

function setFocus() {
  let nodes = [...document.querySelectorAll("[tabindex]")]

  // alert(nodes)
  // alert(focusIndex, focusIndex % nodes.length);
  nodes[focusIndex % nodes.length].focus()
}