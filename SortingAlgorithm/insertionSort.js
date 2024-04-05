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
            var bar1 = document.getElementById(j);
            var bar2 = document.getElementById(j + 1);
            arr[j + 1] = arr[j];
            var height1 = bar1.style.height, height2 = bar2.style.height;
            bar1.style.background = cmpr_color;
            bar2.style.background = cmpr_color;
            j--;

            await sleep();

            bar2.style.height = height1;
            bar1.style.height = height2;

            bar1.style.background = sorted_color;
            bar2.style.background = sorted_color;
        }
        arr[j + 1] = key;
        var bar = document.getElementById(j + 1);
        bar.style.background = sorted_color;
        bar.style.height = key;
    }
    showToast("Insertion Sort is completed.")

}