const digiClock = document.getElementById('clock');
//const display01 = document.querySelector('#clock');
// Another method to select


setInterval(function () {
    let date = new Date();
    digiClock.innerHTML = date.toLocaleTimeString();
    digiClock.style.fontWeight = 'bolder'
    digiClock.style.fontSize = '30px';
    digiClock.style.borderRadius = '15px';
}, 1000);