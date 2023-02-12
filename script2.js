var i = 0;
var txt = 'Hello Friends';
var speed = 130;

async function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        await setTimeout(typeWriter, speed);
    }
}

$(document).ready(function () {
    // $(".heading").addClass("hide");
    //? Page 1
    // typeWriter().then(() => {
    //     setTimeout(function () {
    //             $("section.one .msg").removeClass("hide").addClass("animate__animated animate__zoomIn")
    //     }, txt.length * 160);
    // })


    //? Page 2 -------

    var w = $(window).height()-100;
    var h = $(window).width()-100;
    let wid = w < h ? w + "px" : h + "px";
    $(".two img").css("width", wid)
})