function init(){
//add your javascrip between these two lines of code
  var button = document.getElementById('entrybutton');
  var textbox = document.getElementById('entryinput');
  var output = document.getElementById('textoutput');

  function eventClick(){
    var value = textbox.value;
    alert("Ny Nguyen: " + value);
    output.textContent = value;
  }
  
  button.addEventListener('click', eventClick);
}

window.addEventListener('load', init);
