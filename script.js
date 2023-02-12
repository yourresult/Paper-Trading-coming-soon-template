var t = 0;
var b = 0;
var txtT = 'Hello';
var txtB = 'Friends';
var speed = 130;

async function typeWriter() {
    if (t < txtT.length) {
        document.getElementById("t").innerHTML += txtT.charAt(t);
        t++;
        await setTimeout(typeWriter, speed);
    }
}
async function typeWriter2() {
    if (b < txtB.length) {
        document.getElementById("b").innerHTML += txtB.charAt(b);
        b++;
        await setTimeout(typeWriter2, speed);
    }
}
$(document).ready(function () {
    var w = $(window).height();
    var h = $(window).width();
    var pageNo = 1;

    //? Page 1
    typeWriter().then(() => {
        setTimeout(function () {
            typeWriter2().then(() => {
                setTimeout(function () {
                    $("section.one .msg").removeClass("hide").addClass("animate__animated animate__zoomIn")
                }, txtB.length * 200);
                setTimeout(function () {
                    $(".bottomleft #next").removeClass("hide").addClass("animate__animated animate__zoomIn")
                }, txtB.length * 500);
            })
        }, txtT.length * 200);
    })

    //? Page 2
    $(".two #slider img").addClass("animate__zoomIn")
    var slider = $('#slider').swipeSlider({
        animationDuration: 300,
        autoReverse: false,
        autoTransitionDuration: false,
        bounce: true,
        drag: true,
        infinite: true,
        onSlideStartCallback: (params) => {
        },
        onSlideCompleteCallback: () => {
            $("#slider img").removeClass("hide")
        },
        onMoveCallback: () => {
            $("#slider img").addClass("hide")
        },
        onStartCallback: () => {
            alert("move")

        },
        startIndex: 0
    });

    $("#next").click(() => {
        if (pageNo === 1) {
            let time = 200;
            $(".oneSec").addClass("hide");
            $(".three").removeClass("hide");
            setTimeout(function () {
                $(".three h1").removeClass("hide").addClass("animate__animated animate__fadeInUp")
            }, time);
            $("section.three li").each(function () {
                let li = $(this);
                $(this).css("color", "#fff")
                setTimeout(function () {
                    li.css("color", "#4e4e4e")
                    li.addClass('animate__animated animate__fadeInUp');
                }, time);
                time = time + 200;
            })
        } else if (pageNo === 2) {
            let time = 200;
            $(".three").addClass("hide");
            $(".four").removeClass("hide");
            setTimeout(function () {
                $(".four h2").removeClass("hide").addClass("animate__animated animate__fadeInUp")
            }, time);
            $("section.four li").each(function () {
                let li = $(this);
                $(this).css("color", "#fff")
                setTimeout(function () {
                    li.css("color", "#4e4e4e")
                    li.addClass('animate__animated animate__fadeInUp');
                }, time);
                time = time + 200;
            })
        } else if (pageNo === 3) {
            $(".four").addClass("hide");
            $(".two").removeClass("hide");
            setTimeout(function () {
                $("section.two #indi").removeClass("hide")
            }, 1000);
            setTimeout(function () {
                $("section.two #indi").addClass("hide")
                setTimeout(function () {
                    $("section.two #indi").removeClass("hide")
                }, 1000);
                setTimeout(function () {
                    $("section.two #indi").addClass("hide")
                }, 2500);
            }, 2500);
        }

        pageNo < 4 ? pageNo++ : "";
    })
    $("#prev").click(() => {
        pageNo > 1 ? pageNo-- : "";
        if (pageNo === 1) {
            $(".oneSec").removeClass("hide");
            $(".three").addClass("hide");
        } else if (pageNo === 2) {
            $(".three").removeClass("hide");
            $(".four").addClass("hide");
        } else if (pageNo === 3) {
            $(".four").removeClass("hide");
            $(".two").addClass("hide");

        }

    })
    $(".submit").click(() => {
        var n = $("#name").val(),
            e = $("#email").val(),
            a = $("#appName").val();

        if (n && e) {
            $.ajax({
                url: "https://public-test-ashen.vercel.app/api/test",
                type: 'POST',
                CORS: true,
                headers: {
                    "Access-Control-Allow-Origin": "*"
                },
                data: { "name": "vivek", "email": "funlife409@gmail.com", "other": "timtim" },
                success: function (data) {
                    console.log(data);
                }
            })
        } else {
            alert("Please Enter Name & Email")
        }

    })
})