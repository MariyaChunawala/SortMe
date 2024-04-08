async function quickSort() {
    isDisable(true);

    await QuickSort();

    isDisable(false);
}

async function QuickSort() {

    await Q_Sort(arr, 0, arr.length - 1)

    showToast("Quick Sort is completed.")
}

async function Q_Sort(arr, low, high) {
    if (low < high) {

        let pi = await partition(arr, low, high);

        var pi_bar = document.getElementById(pi);
        pi_bar.style.background = sorted_color;

        await sleep();

        await Q_Sort(arr, low, pi - 1);
        await sortColor(low, pi - 1);

        await Q_Sort(arr, pi + 1, high);
        await sortColor(pi + 1, high);
    }
}

async function partition(arr, low, high) {
    let pivot = arr[high];
    var pivot_bar = document.getElementById(high);
    pivot_bar.style.background = min_color;

    let i = low - 1;
    if (i !== -1) {
        var i_bar = document.getElementById(i);
        i_bar.style.background = cmpr_color;
    }
    for (let j = low; j <= high - 1; j++) {

        var j_bar = document.getElementById(j);
        j_bar.style.background = cmpr_color;

        await sleep();

        if (arr[j] < pivot) {
            if (i !== -1) {
                var i_bar = document.getElementById(i);
                i_bar.style.background = initial_color;
            }

            i++;

            var i_bar = document.getElementById(i);
            i_bar.style.background = cmpr_color;

            swap(arr, i, j);

            await sleep();

            swapHeight(i, j);
        }

        j_bar.style.background = initial_color;

    }
    pivot_bar.style.background = initial_color;
    swap(arr, i + 1, high);
    await sleep();
    swapHeight(i + 1, high);
    return i + 1;
}

async function sortColor(low, high) {
    for (let idx = low; idx < high; idx++) {
        await new Promise(resolve => {
            setTimeout(() => {
                document.getElementById(idx).style.background = sorted_color;
                resolve();
            })
        }, 10);
    }
}