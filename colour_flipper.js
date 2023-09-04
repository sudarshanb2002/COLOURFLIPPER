const newcolourbtnelement = document.getElementById("new-button");
const currentcolourElement = document.getElementById("current_colour");
const red = document.getElementById("redcolour");
const green = document.getElementById("greencolour");
const blue = document.getElementById("bluecolour");
// 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F
const hexvalue = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
function getrandomhexvalue() {
  const randomposition = Math.floor(Math.random() * hexvalue.length);
  const randomhexvalue = hexvalue[randomposition];
  return randomhexvalue;
}
function getrandomhexstring(stringlength) {
  let hexstring = "";
  for (let i = 0; i < stringlength; i++) {
    hexstring += getrandomhexvalue();
  }
  return hexstring;
}
newcolourbtnelement.addEventListener("click", function () {
  const randomstring = "#" + getrandomhexstring(6);
  document.body.style.setProperty("background-color", randomstring);
  //   alert(randomstring);
  currentcolourElement.textContent = randomstring;
  str = randomstring;
  const r = parseInt(randomstring.slice(1, 3), 16);
  const g = parseInt(randomstring.slice(3, 5), 16);
  const b = parseInt(randomstring.slice(5, 7), 16);
  red.textContent = r;
  green.textContent = g;
  blue.textContent = b;
  // console.log(r);
  // console.log(g);
  // console.log(b);
});

//  const r = parseInt(hex.slice(1, 3), 16);
//  const g = parseInt(hex.slice(3, 5), 16);
//  const b = parseInt(hex.slice(5, 7), 16);
