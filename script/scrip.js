window.addEventListener('scroll', function () {
    var header = document.querySelector('.my-header');
    var headerLink = document.querySelectorAll('.hrd-link')
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.classList.add('is-sticky');
        headerLink.forEach(function (link) {
            link.classList.add('clr');
            link.style.setProperty('--before-color', '#404f6c');
        });
    } else {
        header.classList.remove('is-sticky');
        headerLink.forEach(function (link) {
            link.classList.remove('clr');
            link.style.setProperty('--before-color', '#fff');
        });
    }
});
