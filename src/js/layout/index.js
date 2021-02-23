$(function () {
    $(".header__menu").click(function () {
        $(this).toggleClass("header__menu--active");
        $(".menu").fadeToggle();
        if($(this).hasClass("header__menu--active")) {
            setGA.pageView("menu");
            stepNext = false;
        } else {
            stepNext = true;
            if(pageSet) {
                setGA.pageView("product");
            }
        }
    });
})
var set;
var tt;
var stepNext = false;
var sources = [
    "images/step/jump00.png",
    "images/step/jump01.png",
    "images/step/jump02.png",
    "images/step/jump03.png",
    "images/step/jump04.png",
    "images/step/jump05.png",
    "images/step/jump06.png",
    "images/step/jump07.png",
    "images/step/jump08.png",
    "images/step/jump09.png",
    "images/step/jump10.png",
    "images/step/jump11.png",
    "images/step/jump12.png",
    "images/step/jump13.png",
    "images/step/jump14.png",
    "images/step/jump15.png",
    "images/step/jump16.png",
    "images/step/jump17.png",
    "images/step/jump18.png",
    "images/step/jump19.png",
    "images/step/jump20.png",
    "images/step/jump21.png",
    "images/step/jump22.png",
    "images/step/jump23.png",
    "images/step/jump24.png",
    "images/step/jump25.png",
    "images/step/jump26.png",
    "images/step/jump27.png",
    "images/step/jump28.png"
];

function getRandomInt(minNum, maxNum) {
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

function setAnimate(_index) {

    var cutIndex = 1;
    var animSet = setInterval(function () {
        if (cutIndex < 29) {
            $(".column").eq(_index).find(".loop img").eq(cutIndex - 1).css({
                "visibility": "hidden"
            });
            $(".column").eq(_index).find(".loop img").eq(cutIndex).css({
                "visibility": "visible"
            });
            cutIndex++;
        } else {
            $(".column").eq(_index).find(".loop img").css({
                "visibility": "hidden"
            });
            $(".column").eq(_index).find(".loop img").eq(0).css({
                "visibility": "visible"
            });
            clearInterval(animSet);
            cutIndex = 1;
        }
    }, 20);
    // $(".column").eq(_index).addClass("column--active");
    // t = setTimeout(function () {
    //     $(".column").eq(_index).removeClass("column--active");
    //     clearTimeout(t);
    // }, 100);
}
var set;
var tt;

function startAnimate() {
    set = setInterval(function () {
        setAnimate(getRandomInt(0, $(".column").length));
    }, 1000);
}
var clearSet;

$(".column").mousedown(function () {
    clearInterval(set);
    clearTimeout(tt);
    tt = setTimeout(function () {
        startAnimate();
    }, 5000);
    if (!$(this).hasClass("temp")) {
        setAnimate($(this).data("index"));
        $(".column").eq($(this).data("index")).addClass("temp");
        clearSet = setTimeout(() => {
            $(".column").eq($(this).data("index")).removeClass("temp");
        }, 600);
    }
});

function createAnim() {
    for (i = 0; i < $(".column").length; i++) {
        for (ii = 0; ii < sources.length; ii++) {
            $(".column").eq(i).find(".loop").append('<img src="' + sources[ii] + '" alt="">');
        }
        $(".column").eq(i).find(".loop").find("img").eq(0).css({
            "visibility": "visible"
        })
    }
}

$(function () {
    createAnim()
    startAnimate();
})

var posX = 80;
var setSpeed = 100;
var setBreak = 0;
var getIndexNum;


function setBg() {
    setSpeed = setSpeed - setBreak
    posX = posX - setSpeed;
    if (setSpeed > 1) {
        $(".random").css({
            "background-position": posX + "px center"
        });
    } else {
        $(".discount").css({
            "opacity": "1"
        });
        $(".random").css({
            "transition": "all 0.3s"
        });
        $(".random").css({
            "width": "640px",
            "background-position": (Math.round((posX) / 640) * 640) + "px center"
        });
        swiper.slideTo(Math.abs(Math.round((posX) / 640) % 4) + 1, 0);
        getIndexNum = Math.abs(Math.round((posX) / 640) % 4) + 1;
        setTimeout(function () {
            $(".slider__content").css({
                "visibility": "visible"
            });
            $(".random").css({
                "visibility": "hidden"
            });
            $("#section__3 .title h2").html("被療癒美味圈粉的你，快留下資料<br>還有機會讓川見鱈蟹柳直送到府");
            $("#setStop").html("<span>我要抽獎</span>").addClass("share").attr("id", "");
            setGA.ButtonClick("roulette", "roulette_choosedish")
        }, 300);
        clearInterval(setA);
    }
}

var setA = setInterval(function () {
    setBg();
}, 40);

$(function () {
    $("#setStop, .random").click(function () {
        setBreak = 2;
    });
    for (e = 0; e < area.counties.length; e++) {
        $("#city").append('<option data-num="' + e + '" value="' + area.counties[e] + '">' + area.counties[e] + '</option>')
    }
    $("#city").change(function () {
        $("#area").html('<option value="">地區</option>');
        for (f = 0; f < area.districts[parseInt($("#city").find('option:selected').attr("data-num"))][0].length; f++) {
            $("#area").append('<option data-num="' + f + '" value="' + area.districts[parseInt($("#city").find('option:selected').attr("data-num"))][0][f] + '">' + area.districts[parseInt($("#city").find('option:selected').attr("data-num"))][0][f] + '</option>')
        }
    });
    $(document).on("click", ".share", function () {
        alert("活動已結束，感謝您的參與！")
        // $(".popup").fadeIn();
        // setGA.ButtonClick("roulette", "roulette_luckydraw")
        // stepNext = false;
        // setGA.pageView("personalinfo");
    });
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('body, html').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
    $(window).scrollTop(0);
    $(".rule__close").click(function () {
        $(".rule").fadeOut();
    });
    $(".openRule").click(function () {
        $(".rule").fadeIn();
    });

    // setGA.pageView("start");
})

var swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    on: {
        slideChange: function () {
            getIndexNum = this.realIndex;
        },
    },
});
$(window).scroll(function () {
    $(".main__video").css({
        "top": -($(this).scrollTop() / 5)
    });
});

function loadImages(sources, callback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;
    // get num of sources
    for (var src in sources) {
        numImages++;
    }
    for (var src in sources) {
        images[src] = new Image();
        images[src].onload = function () {
            if (++loadedImages >= numImages) {
                callback(images);
            }
        };
        images[src].src = sources[src];
    }
}