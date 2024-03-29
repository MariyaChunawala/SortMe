async function insertionSort() {
    isDisable(true);

    await InsertionSort();

    isDisable(false);
}

async function InsertionSort() {
    var bar0 = document.getElementById(0);
    bar0.style.background = sorted_color;
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
            bar1.style.background = sorted_color;
            bar2.style.background = sorted_color;
            bar2.innerText = bar1.innerText;
            bar1.innerText = key;
            j--;

            await sleep();

            bar1.style.height = '60px';
            bar1.style.width = '60px';
            bar2.style.height = '60px';
            bar2.style.width = '60px';
        }
        arr[j + 1] = key;
        var bar = document.getElementById(j + 1);
        bar.style.background = sorted_color;
        bar.innerText = key;
    }
    showToast("Insertion Sort is completed.")

}