function showToast(message) {
    var toast = document.createElement('div');

    toast.textContent = message;

    toast.style.textAlign = 'center';

    document.body.appendChild(toast);


    setTimeout(function () {
        toast.remove();
    }, 3000);

}