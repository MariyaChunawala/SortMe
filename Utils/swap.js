function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}

function swapHeight(i, j) {
    var bar1 = document.getElementById(i);
    var bar2 = document.getElementById(j);

    var height1 = bar1.style.height;
    var height2 = bar2.style.height;

    bar1.style.height = height2;
    bar2.style.height = height1;
}