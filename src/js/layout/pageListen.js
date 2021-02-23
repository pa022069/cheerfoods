var sec0;
var sec1;
var sec2;
var sec3;
var sec4;
var nowpage = 1;

function getOffsetTop(element) {
    var offsetTop = 0;
    while (element) {
        offsetTop += element.offsetTop;
        element = element.offsetParent;
    }
    return offsetTop;
}

function setPos() {
    sec0 = getOffsetTop(document.getElementById("section__0"));
    sec1 = getOffsetTop(document.getElementById("section__4"));
    sec2 = getOffsetTop(document.getElementById("section__1"));
    sec3 = getOffsetTop(document.getElementById("section__2"));
    sec4 = getOffsetTop(document.getElementById("section__3"));
}

$(function() {
    setPos();
})

var timer = null;
$(window).on('scroll', function () {
    var nowPos = $(window).scrollTop() + ($(window).height() / 2);
    if (timer !== null) {
        clearTimeout(timer);
    }
    timer = setTimeout(function () {
        if (nowPos > sec0 && nowPos < sec1 && stepNext) {
            if (nowpage != 1) {
                setGA.pageView("index");
            }
            nowpage = 1;
        } else if (nowPos > sec1 && nowPos < sec2 && stepNext) {
            if (nowpage != 2) {
                setGA.pageView("sea");
            }
            nowpage = 2;
        } else if (nowPos > sec2 && nowPos < sec3 && stepNext) {
            if (nowpage != 3) {
                setGA.pageView("fill");
            }
            nowpage = 3;
        } else if (nowPos > sec3 && nowPos < sec4 && stepNext) {
            if (nowpage != 4) {
                setGA.pageView("bounce");
            }
            nowpage = 4;
        } else if (nowPos > sec4 && stepNext) {
            if (nowpage != 5) {
                setGA.pageView("roulette");
            }
            nowpage = 5;
        }
    }, 150);
});