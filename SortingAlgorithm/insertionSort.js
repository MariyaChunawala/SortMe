async function insertionSort() {
    isDisable(true);

    await InsertionSort();

    isDisable(false);
}

async function InsertionSort() {
    for (var i = 1; i < arr.length; i++) {
        var key = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            var bar1 = document.getElementById(j);
            var bar2 = document.getElementById(j + 1);
            bar1.style.transition = "height 0.5s, width 0.5s, background-color 0.5s";
            bar2.style.transition = "height 0.5s, width 0.5s, background-color 0.5s";
            bar1.style.height = '65px';
            bar1.style.width = '65px';
            bar2.style.height = '65px';
            bar2.style.width = '65px';
            bar1.style.background = 'linear-gradient(216deg, #0E2A4D, #39648D, #83B0DE, #4C75BA)';
            bar2.style.background = 'linear-gradient(216deg, #0E2A4D, #39648D, #83B0DE, #4C75BA)';
            bar2.innerText = bar1.innerText;
            j--;

            await sleep();
        }
        arr[j + 1] = key;
        var bar = document.getElementById(j + 1);
        bar.innerText = key;


    }
}