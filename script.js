// globals
let picNum = 1;
let picMin = 1;
let picMax = document.querySelectorAll("img").length;

function shift(n) {
  let sel;
  let oldPic;
  let newPic;
  let picName;

  // Remove pic-on class for picNum
  // 1) get the old pic
  sel = "#pic-" + picNum;
  oldPic = document.querySelector(sel);

  // 2) remove the class 'pic-on'
  oldPic.classList.remove("pic-on");

  // Calc new picnum
  picNum = picNum + n;

  if (picNum > picMax) {
    picNum = picMin;
  }
  if (picNum < picMin) {
    picNum = picMax;
  }

  // Add pic-on class for new picNum
  // 1) get the new pic
  sel = "#pic-" + picNum;
  newPic = document.querySelector(sel);

  // 2) add the class 'pic-on'
  newPic.classList.add("pic-on");

  // 3) update new pic name
  // 3a) get picName element
  // 3b) update innerText
  picName = document.getElementById("pic-name");
  picName.innerText = newPic.alt;

  console.log("After click picture will be " + picNum);
}

document.getElementById("pic-name").innerText = document.getElementById("pic-1").alt;
