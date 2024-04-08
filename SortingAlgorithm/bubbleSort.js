async function bubbleSort() {
    isDisable(true);

    await BubbleSort();

    isDisable(false);
}

async function BubbleSort() {
    var i, j, temp;
    for (i = 0; i < arr.length - 1; i++) {
        for (j = 0; j < arr.length - i - 1; j++) {
            var bar1 = document.getElementById(j);
            var bar2 = document.getElementById(j + 1);
            bar1.style.background = cmpr_color;
            bar2.style.background = cmpr_color;
            if (arr[j] > arr[j + 1]) {

                // Swap arr[j] and arr[j+1]
                swap(arr, j, j + 1);

                await sleep();

                swapHeight(j, j + 1);

            }
            await sleep();
            bar1.style.background = initial_color;
            bar2.style.background = initial_color;
        }
        var bar = document.getElementById(arr.length - 1 - i);
        bar.style.background = sorted_color;
    }
    var bar = document.getElementById(0);
    bar.style.background = sorted_color;

    showToast("Bubble Sort is completed.")

    return;
}
