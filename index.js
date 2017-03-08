const rootDiv = document.getElementById('root');

setInterval(function(){
  var timeNow = new Date();
  var currentYear = timeNow.getFullYear();
  var time = timeNow.toLocaleTimeString();
  var display = 'Seriously? Get with the program, it\'s ' + time + ' in ' + currentYear + '.';
  rootDiv.innerHTML = display;
}, 1000)
