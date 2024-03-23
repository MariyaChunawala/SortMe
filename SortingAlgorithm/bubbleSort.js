var speedElement = document.getElementById('speedInput');
var speed = speedElement.value;

speedElement.addEventListener('input', updateSpeed);

async function bubbleSort() {
    var i, j, temp;
    for (i = 0; i < arr.length - 1; i++) {
        swapped = false;
        for (j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {

                // Swap arr[j] and arr[j+1]
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;

                var bar1 = document.getElementById(j);
                var bar2 = document.getElementById(j + 1);
                var height1 = bar1.style.height;
                var height2 = bar2.style.height;
                bar1.style.height = height2;
                bar2.style.height = height1;

                await sleep(speed);
            }
        }
        var bar = document.getElementById(arr.length - 1 - i);
        bar.style.backgroundColor = " Green";
    }
    var bar = document.getElementById(0);
    bar.style.backgroundColor = " Green";
}
function sleep(ms) {
    console.log(ms);
    return new Promise(resolve => setTimeout(resolve, ms));
}
function updateSpeed() {
    speed = speedElement.value;
}
