var waterCount = 0;
var wateremoji = "&#128167";
var staremoji = "&#127775";
function resetWater() {
	waterCount = 0;

  document.getElementById('water').innerHTML = waterCount+" glasses";
  document.getElementById('emoji').innerHTML = wateremoji;
}
function incrementWater() {
  waterCount = waterCount+1;
  document.getElementById('water').innerHTML = waterCount+" glasses";
  if(waterCount >= 8) {
  	// window.alert("Congrats");
  	document.getElementById('emoji').innerHTML = wateremoji+staremoji;
  }
}