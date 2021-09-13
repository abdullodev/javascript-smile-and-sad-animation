function happy() {
  document.getElementById("happy").style.display = "block";
  document.getElementById("smile").style.display = "none";
  document.getElementById("sad").style.display = "none";
  document.getElementById("happy").style.color = "white";
}
function sad() {
  document.getElementById("happy").style.display = "none";
  document.getElementById("smile").style.display = "none";
  document.getElementById("sad").style.display = "block";
  document.getElementById("sad").style.color = "red";
}
function smile() {
  document.getElementById("happy").style.display = "none";
  document.getElementById("smile").style.display = "block";
  document.getElementById("sad").style.display = "none";
}
