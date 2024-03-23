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
                bar1.style.transition = "height 0.5s, width 0.5s, background-color 0.5s";
                bar2.style.transition = "height 0.5s, width 0.5s, background-color 0.5s";
                bar1.style.height = '65px';
                bar1.style.width = '65px';
                bar2.style.height = '65px';
                bar2.style.width = '65px';
                bar1.style.background = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,54,1) 35%, rgba(0,212,255,1) 100%)';
                bar2.style.background = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,54,1) 35%, rgba(0,212,255,1) 100%)';
                var text1 = bar1.innerText;
                var text2 = bar2.innerText;
                bar1.innerText = text2;
                bar2.innerText = text1;

                await sleep(speed);

                bar1.style.height = '60px';
                bar1.style.width = '60px';
                bar2.style.height = '60px';
                bar2.style.width = '60px';
                bar1.style.background = `linear-gradient(216deg, #5DACD4, #A7DBF3, #83B0DE, #4C75BA)`;
                bar2.style.background = `linear-gradient(216deg, #5DACD4, #A7DBF3, #83B0DE, #4C75BA)`;
            }
        }
        var bar = document.getElementById(arr.length - 1 - i);
        bar.style.background = `linear-gradient(216deg, #0E2A4D, #39648D, #83B0DE, #4C75BA)`;
    }
    var bar = document.getElementById(0);
    bar.style.background = `linear-gradient(216deg, #0E2A4D, #39648D, #83B0DE, #4C75BA)`;
}
function sleep(ms) {
    console.log(ms);
    return new Promise(resolve => setTimeout(resolve, ms));
}
function updateSpeed() {
    speed = speedElement.value;
}
