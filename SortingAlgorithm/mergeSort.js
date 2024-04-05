async function mergeSort() {
    isDisable(true);

    await MergeSort();

    isDisable(false);
}

async function MergeSort() {
    await sort(arr, 0, arr.length);
    await setColor();
    showToast('Merge Sort is completed');
}

async function sort(arr, l, r) {
    if (l >= r) {
        return;
    }
    var m = l + parseInt((r - l) / 2);

    await sort(arr, l, m);
    await sort(arr, m + 1, r);

    await merge(arr, l, m, r);

}

async function merge(arr, l, m, r) {
    var size_l = m - l + 1;
    var size_r = r - m;

    var L = new Array(size_l);
    var R = new Array(size_r);

    for (var i = 0; i < size_l; i++) {
        L[i] = arr[l + i];
    }
    for (var i = 0; i < size_r; i++) {
        R[i] = arr[m + 1 + i];
    }

    var i = 0, j = 0, k = l;

    while (i < size_l && j < size_r) {

        var bar = document.getElementById(k);
        if (L[i] !== undefined && (R[j] === undefined || L[i] <= R[j])) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        bar.style.height = (arr[k] * 0.5) + 'px';
        await sleep();
        k++;
    }

    while (i < size_l) {
        var bar = document.getElementById(k);
        bar.style.height = (L[i] * 0.5) + 'px';
        arr[k] = L[i];
        k++;
        i++;
        await sleep();
    }
    while (j < size_r && (R[j] !== undefined)) {
        var bar = document.getElementById(k);
        bar.style.height = (R[j] * 0.5) + 'px';
        arr[k] = R[j];
        k++;
        j++;
        await sleep();
    }

}

async function setColor() {
    for (let idx = 0; idx < arr.length; idx++) {
        await new Promise(resolve => {
            setTimeout(() => {
                document.getElementById(idx).style.background = sorted_color;
                resolve();
            })
        }, 100);
    }
}