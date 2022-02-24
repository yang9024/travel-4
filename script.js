// globals
let picNum = 1;
let picMin = 1;
let picMax = 3;

function shift(n) {
  let sel;
  let oldPic;
  let newPic;
  let friendName;

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

  // 3) update new friend name
  // 3a) get h2
  // 3b) update innerText
  friendName = document.getElementById("friend-name");
  friendName.innerText = newPic.alt;

  console.log("After click picture will be " + picNum);
}
