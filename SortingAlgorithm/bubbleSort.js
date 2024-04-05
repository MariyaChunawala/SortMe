var sorted_color = 'linear-gradient(216deg, #0E2A4D, #39648D, #83B0DE, #4C75BA)'; // dark blue
var cmpr_color = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,54,1) 35%, rgba(0,212,255,1) 100%)'; //green blue
var initial_color = 'linear-gradient(216deg, #5DACD4, #A7DBF3, #83B0DE, #4C75BA)'; // light blue

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
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                await sleep();

                var bar1 = document.getElementById(j);
                var bar2 = document.getElementById(j + 1);

                var height1 = bar1.style.height;
                var height2 = bar2.style.height;

                bar1.style.height = height2;
                bar2.style.height = height1;

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
