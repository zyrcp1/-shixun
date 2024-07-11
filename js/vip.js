var date = new Date();
var dayRecommend = document.querySelector("#date")
var dateString = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
dayRecommend.innerHTML = dateString;
var tabs = document.querySelectorAll("body")
for (let i = 0; i < tabs.length; i++) {
    tab(tabs[i]);
}
function tab(main) {
    var li = main.querySelectorAll(".navigation li");
    var box = main.querySelectorAll(".box");
    for (let i = 0; i < li.length; i++) {
        li[i].onclick = () => {
            for (let j = 0; j < li.length; j++) {
                li[j].classList.remove("active")
                box[j].classList.add("none");
            }
            li[i].classList.add("active");
            box[i].classList.remove("none");
        }
    }
}
var url = `http://rap2api.taobao.org/app/mock/315413/vip`;
fetch(url).then(res => {
    return res.json();
}).then(data => {
    parse(data);
    // 自定义的函数，写在外面，参数为json数组
}).catch(error => {
    console.log(error);
});
function parse(res) {
    var ul = document.querySelector(".day-recommend ul");
    for (let v of res) {
        let li = document.createElement("li");
        li.innerHTML = `<img class="albumcover" src="${v.pic}">
            <div class="name">
                <span class="music-name">${v.name}</span>
                <p><span>会员</span>${v.author}</p>
            </div>
            <span class="iconfont icon-bofangqi-bofang"></span>`;
        ul.appendChild(li);
    }
}