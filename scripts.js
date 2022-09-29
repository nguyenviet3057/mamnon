$("body").ready(function(){
    $(".alt-nav > button").click(function() {
        if ($(".alt-nav > button i").attr("class").indexOf("fa-bars")>-1) {
            $(".header .fade-screen").fadeIn(500);
            $(".alt-nav > button i").removeClass("fa-bars");
            $(".alt-nav > button i").addClass("fa-times");
            $(".header .alt-nav-bar").css({"animation-name":"slideIn"});
            setTimeout(() => {
                if ($(".header .alt-nav-bar").css("animation-name") == "slideIn") $(".header .alt-nav-bar").css({"transform":"translateX(0px)"});
            }, 550);
        } 
        else if ($(".alt-nav > button i").attr("class").indexOf("fa-times")>-1) {
            $(".header .fade-screen").fadeOut(500);
            $(".alt-nav > button i").removeClass("fa-times");
            $(".alt-nav > button i").addClass("fa-bars");
            $(".header .alt-nav-bar").css({"animation-name":"slideOut"});
            setTimeout(() => {
                if ($(".header .alt-nav-bar").css("animation-name") == "slideOut") $(".header .alt-nav-bar").css({"transform":"translateX(-250px)"});
            }, 550);
        }
    })
    if($(location).attr("pathname").indexOf("index.html")) {
        $(".alt-nav-bar a:nth-child(1) button").css({"background-color":"black","color":"white","font-weight":"bold"});
    }
    $(this).scroll(function () {
        if ($(this).scrollTop() < 800) {
            $(".intro-img").css({"transform":"translateY(" + $(this).scrollTop()*0.3 + "px)"});
        }
    });
});