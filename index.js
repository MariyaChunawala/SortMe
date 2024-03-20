var container = document.getElementsByClassName('container')[0];
var arr = randomArray(30, 1, 1000);

for (var i = 0; i < arr.length; i++) {
    var bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = (arr[i] * 0.25) + 'px';
    bar.style.width = '20px';
    bar.style.backgroundColor = 'Black'
    bar.style.margin = '1px';
    bar.setAttribute('id', i);
    container.appendChild(bar);
}

function randomArray(length, max, min) {
    var arr = [];
    for (var i = 0; i < length; i++) {
        var num = Math.floor(Math.random() * (max + min - 1)) + min;
        arr.push(num);
    }
    return arr;
}

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

                await sleep(100);
            }
        }
        var bar = document.getElementById(arr.length - 1 - i);
        bar.style.backgroundColor = " Green";
    }
    var bar1 = document.getElementById(0);
    bar1.style.backgroundColor = " Green";
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}