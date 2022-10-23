// nav滾動變色
window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})

// nav
$(function () {

    $(".toggle").on("click", function () {

        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
        } else {
            $(".item").addClass("active");
        }
    })

});


// 回頂部按鈕滾動JS
//Get the button:
myButton = document.getElementById("BackToTopBtn");
function topFunction() {
    window.scrollTo({
        // 滾到最上面
        top: 0,
        // 慢慢滾
        behavior: 'smooth',
    });
};
// 回頂部按鈕隱藏，到scrollTop>300才顯示
window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 300) {
        document.getElementById("backToTop").classList.remove("backToTopNone");
    } else {
        document.getElementById("backToTop").classList.add("backToTopNone");
    }
});


function showLarge(e) {
    // 換大圖
    let small = e.target;
    document.getElementById("large").src = small.src;

}

function init() {
    // 小圖可以點按
    let imgs = document.querySelectorAll("#smallPanel img");
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].onclick = showLarge;
    }

}
window.addEventListener("load", init, false);


window.addEventListener("load", function () {
    //-------------------
    let btnPluses = document.getElementsByClassName("btnPlus");
    let btnMinuses = document.getElementsByClassName("btnMinus");
    let qtys = document.getElementsByClassName("qty");
    for (let i = 0; i < btnPluses.length; i++) {
        // 註冊 + 按鈕

        btnPluses[i].onclick = function () {
            qtys[i].value = parseInt(qtys[i].value) + 1;
        }


        // 註冊 - 按鈕

        btnMinuses[i].onclick = function () {
            if (qtys[i].value > 0) {
                qtys[i].value = qtys[i].value - 1;
            }

        }
    }
})


// loading

$(document).ready(function(){
    setTimeout(function(){
        $(".loading").fade0ut(500);
    },1500);
})