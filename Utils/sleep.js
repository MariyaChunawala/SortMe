var speedElement = document.getElementById('speedInput');
var speed = 1010 - speedElement.value;
var speed_show = document.getElementById('speed');

speed_show.innerText = speed + 'ms';

speedElement.addEventListener('input', updateSpeed);

function sleep() {
    return new Promise(resolve => setTimeout(resolve, speed));
}
function updateSpeed() {
    speed = 1010 - speedElement.value;
    speed_show.innerText = speed + 'ms';
}