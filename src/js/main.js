function displayDate(element){
  document.getElementById(element).innerHTML = getDate();
}

function getDate() {
  return new Date();
}
