function slider() {
    if (document.body.scrollTop > 530) 
        $('#navigationBar').stop().animate({"margin-top": '0'});
    else
        $('#navigationBar').stop().animate({"margin-top": '-200'});
}


$(window).scroll(function () {
    slider();
});

$(document).ready(function () {
    slider();
});