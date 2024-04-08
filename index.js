var sorted_color = 'linear-gradient(216deg, #0E2A4D, #39648D, #83B0DE, #4C75BA)'; // dark blue
var cmpr_color = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,54,1) 35%, rgba(0,212,255,1) 100%)'; //green blue
var initial_color = 'linear-gradient(216deg, #5DACD4, #A7DBF3, #83B0DE, #4C75BA)'; // light blue

var container = document.getElementsByClassName('container')[0];
var size = document.getElementById("sizeInput");
var arr = [];

// Initial creation of array and rendering
createArrayAndSort();

// Event listener for input changes
size.addEventListener('input', createArrayAndSort);

function createArrayAndSort() {
    // Clear the container
    container.innerHTML = '';

    // Create a new array
    arr = createArray();

    // Add Size of array at textarea
    var arr_size = document.getElementById('size');
    arr_size.innerText = size.value;

    // Render the array
    renderArray(arr);
}

function createArray() {
    // Create a random array based on the input size
    var newArr = randomArray(size.value, 10, 1000);
    return newArr;
}

function renderArray(arr) {
    // Render the array as bars in the container
    for (var i = 0; i < arr.length; i++) {
        var bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = (arr[i] * 0.5) + 'px';
        bar.setAttribute('id', i);
        container.appendChild(bar);
    }
}

function randomArray(length, min, max) {
    // Generate a random array
    var newArr = [];
    for (var i = 0; i < length; i++) {
        var num = Math.floor(Math.random() * (max + min - 1)) + min;
        newArr.push(num);
    }
    return newArr;
}
