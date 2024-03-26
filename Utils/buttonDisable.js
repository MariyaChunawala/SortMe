function isDisable(flag) {
    var buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.disabled = flag;
        if (flag) {
            button.style.background = '#d3d3d3';
        } else {
            button.style.background = '#ffffff';
        }
    });
}