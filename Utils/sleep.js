var speedElement = document.getElementById('speedInput');
var speed = 3500 - speedElement.value;

speedElement.addEventListener('input', updateSpeed);

function sleep() {
    return new Promise(resolve => setTimeout(resolve, speed));
}
function updateSpeed() {
    speed = 3500 - speedElement.value;
}