var menu = document.querySelector("#menu")
var mask = document.querySelector("#mask")
function menuView() {
    if (menu.classList = "none") {
        menu.classList.remove("none");
        mask.classList.remove("none");
    }
}

mask.onclick = () => {
    if (menu.classList == "") {
        menu.classList.add("none");
        mask.classList.add("none");
    }
}
function loveadd() {
    var loved = document.querySelectorAll(".love-add .iconfont")
    for (let i = 0; i < loved.length; i++) {
        loved[i].onclick = () => {
            if (loved[i].classList == "iconfont icon-xihuan") {
                loved[i].classList.remove("icon-xihuan")
                loved[i].classList.add("icon-xihuan1");
                loved[i].style.color = ""
            } else {
                loved[i].classList.remove("icon-xihuan1")
                loved[i].classList.add("icon-xihuan");
                loved[i].style.color = "#c00"
            }
        }
    }
}