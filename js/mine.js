var tabs = document.querySelectorAll(".sheet")
for (let i = 0; i < tabs.length; i++) {
    tab(tabs[i]);
}
function tab(main) {
    var li = main.querySelectorAll(".nav-list li");
    var box = main.querySelectorAll(".sheet-content");
    for (let i = 0; i < li.length; i++) {
        li[i].onclick = () => {
            for (let j = 0; j < li.length; j++) {
                li[j].classList.remove("active")
                box[j].classList.add("none");;
            }
            li[i].classList.add("active");
            box[i].classList.remove("none");;
        }
    }
}
window.onscroll = () => {
    var st = document.documentElement.scrollTop;
    var nav = document.querySelector(".nav")
    if (st > 1) {
        nav.style.backgroundImage = "radial-gradient(circle,#fff 20%,rgb(251, 237, 128) 80%)";
    } else {
        nav.style.backgroundImage = ""
    }
}
var url = `http://rap2api.taobao.org/app/mock/315413/vip`;
fetch(url).then(res => {
    return res.json();
}).then(data => {
    parse(data);
    // 自定义的函数，写在外面，参数为json数组
    loveadd();
}).catch(error => {
    console.log(error);
});
function parse(res) {
    var ul = document.querySelector(".recommend-music ul");
    for (let v of res) {
        let li = document.createElement("li");
        li.innerHTML = `<img class="albumcover" src="${v.pic}">
                        <div class="name">
                           <span>${v.name}</span>
                           <p>${v.author}</p>
                        </div>
                        <div class="love-add">
                          <span class="iconfont icon-xihuan1"></span>
                        </div>`;
        ul.appendChild(li);
    }
}