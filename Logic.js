// window.addEventListener("resize", adaptiveFunc);

// block`s classes

// let headerTopLang = $("#headerTopLang");
// let headerMenu = $("#header-menu");
// let headerTop = $("#header-top");
// let headerBottomMenu = $("header-bottom-menu");

// function adaptiveHeader(w) {

//     if (w < 780) {
//         // $("#headerTopLang").appendTo($("#header-menu"));
//         // $(".header-bottom-menu").appendTo($("#header-menu"));
//     }
//     else {
//         // $("#headerTopLang").prependTo($("#header-top"));
//         // $(".header-bottom-menu").prependTo($("#header-top"));
//     }

// };

// function adaptiveFunc() {
//     let width = window.innerWidth;
//     adaptiveHeader(width);
// }


// adaptiveFunc();

//  <PREDEFIED FUNCTIONS>

function addClass(target, className) {
    target.classList.add(className);
}

function removeClass(target, className) {
    target.classList.remove(className);
}

function replaceClass(target, oldOne, newOne) {
    target.classList.replaceClass(oldOne, newOne);
}

function toggleClass(target, className) {
    let contain = target.classList.toggle(className);
}
//  </PREDEFIED FUNCTIONS>



function menuIconOnClickHandler() {
    let headerMenu = document.getElementById("header-menu");
    let headerMenu_Icon = document.getElementById("header-menu__icon");
    headerMenu.style.display == "none" ? headerMenu.style.display = "block" : headerMenu.style.display = "none";
    toggleClass(headerMenu_Icon, "active");

}




