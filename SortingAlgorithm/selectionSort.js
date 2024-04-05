var min_color = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(71,9,121,1) 35%, rgba(0,212,255,1) 100%)'
async function selectionSort() {
    isDisable(true);

    await SelectionSort();

    isDisable(false);
}

async function SelectionSort() {
    var i, j;
    for (i = 0; i < arr.length; i++) {
        var min_index = i;
        for (j = i + 1; j < arr.length; j++) {
            var bar = document.getElementById(min_index);
            bar.style.background = cmpr_color;
            var bar_j = document.getElementById(j);
            bar_j.style.background = cmpr_color;
            if (arr[min_index] > arr[j]) {
                await sleep();
                var bar1 = document.getElementById(min_index);
                bar1.style.background = initial_color;
                min_index = j;
                var bar2 = document.getElementById(min_index);
                bar2.style.background = cmpr_color;
            }
            await sleep();
            bar_j.style.background = initial_color;
        }
        await sleep();
        var temp = arr[i];
        arr[i] = arr[min_index]
        arr[min_index] = temp;
        var bar1 = document.getElementById(min_index);
        var bar2 = document.getElementById(i);
        bar2.style.height = (arr[i] * 0.5) + 'px';
        bar1.style.height = (arr[min_index] * 0.5) + 'px';
        bar1.style.background = initial_color;
        bar2.style.background = sorted_color;
    }
    showToast("Selection Sort is completed.");
}