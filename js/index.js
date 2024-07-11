var url = `http://rap2api.taobao.org/app/mock/315413/du`;
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
var url1 = `http://rap2api.taobao.org/app/mock/315413/edit`;
fetch(url1).then(res => {
    return res.json();
}).then(data => {
    parse1(data);
    // 自定义的函数，写在外面，参数为json数组
}).catch(error => {
    console.log(error);
});
function parse1(res) {
    var ul = document.querySelector(".edit-content .edit-list");
    for (let v of res) {
        let li = document.createElement("li");
        li.innerHTML = `<img src="${v.pic}">
                <div class="button">
                <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-bofang"></use>
</svg>

                <span class="play-number">${v.views}</span>
            </div>
            <p>${v.name}</p>`;
        ul.appendChild(li);
    }
}

var swiper1 = new Swiper(".s1", {
    direction: "vertical",//horizontal
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    }
});
var swiper2 = new Swiper(".s2", {
    direction: "vertical",//horizontal
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    }
});
var swiper3 = new Swiper(".s-search", {
    direction: "vertical",//horizontal
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    }
});
var swiper = new Swiper(".banner", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});
var tabs1 = document.querySelectorAll(".music-container")
for (let i = 0; i < tabs1.length; i++) {
    tab1(tabs1[i]);
}
var urlitem = ["http://rap2api.taobao.org/app/mock/315413/newmusic","http://rap2api.taobao.org/app/mock/315413/newcd","http://rap2api.taobao.org/app/mock/315413/album"];
for(let i=0;i<urlitem.length;i++){
fetch(urlitem[i]).then(res => {
    return res.json();
}).then(data => {
    parseul(data,i);
    // 自定义的函数，写在外面，参数为json数组
    loveadd();
}).catch(error => {
    console.log(error);
});
}
function parseul(res,item) {
    var con = document.querySelectorAll(".new-content");
    var ul = con[item].querySelector("ul");
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
var bannerUrl = `http://rap2api.taobao.org/app/mock/315413/banner`;
fetch(bannerUrl).then(res => {
    return res.json();
}).then(data => {
    parseBanner(data);
    // 自定义的函数，写在外面，参数为json数组
}).catch(error => {
    console.log(error);
});
function parseBanner(res) {
    var banner = document.querySelector(".banner .swiper-wrapper");
    for (let v of res) {
        let div = document.createElement("div");
        div.className="swiper-slide";
        div.innerHTML = `<img src="${v.image}"
        alt="">`;
        banner.appendChild(div);
    }
}
var classificationurl = `http://rap2api.taobao.org/app/mock/315413/classification`;
fetch(classificationurl).then(res => {
    return res.json();
}).then(data => {
    parseclass(data);
}).catch(error => {
    console.log(error);
});
function parseclass(res) {
    var ul = document.querySelector(".type-list");
    for (let v of res) {
        let li = document.createElement("li");
        li.innerHTML = `<img src="${v.cover}" alt="">
        <span class="f-title">${v.title}</span>
        <span class="s-title">${v.txt}</span>`;
        ul.appendChild(li);
    }
}
var speedurl = `http://rap2api.taobao.org/app/mock/315413/speed`;
fetch(speedurl).then(res => {
    return res.json();
}).then(data => {
    parsespeed(data);
    loveadd();
}).catch(error => {
    console.log(error);
});
function parsespeed(res) {
    var ul = document.querySelectorAll(".charts-list")[0];
    var i = 0;
    for (let v of res) {
        i++;
        let li = document.createElement("li");
        li.innerHTML = `<img class="albumcover" src="${v.pic}">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-top${i}"></use>
        </svg>
        <div class="name">
            <span>${v.name}</span>
            <p><span>会员</span>${v.author}</p>
        </div>
        <div class="love-add">
            <span class="iconfont icon-xihuan1"></span>
        </div>`;
        ul.appendChild(li);
    }
}
var hoturl = `http://rap2api.taobao.org/app/mock/315413/hot-music`;
fetch(hoturl).then(res => {
    return res.json();
}).then(data => {
    parsehot(data);
    loveadd();
}).catch(error => {
    console.log(error);
});
function parsehot(res) {
    var ul = document.querySelectorAll(".charts-list")[1];
    var i = 0;
    for (let v of res) {
        i++;
        let li = document.createElement("li");
        li.innerHTML = `<img class="albumcover" src="${v.pic}">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-top${i}"></use>
        </svg>
        <div class="name">
            <span>${v.name}</span>
            <p><span>会员</span>${v.author}</p>
        </div>
        <div class="love-add">
            <span class="iconfont icon-xihuan1"></span>
        </div>`;
        ul.appendChild(li);
    }
}

function tab1(main) {
    var li = main.querySelectorAll(".new-nav li");
    var box = main.querySelectorAll(".new-content");
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
// header and main tab start
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
// header and main tab end
// footer tab start
var footerTab = document.querySelector("footer ul")
var li = footerTab.querySelectorAll("li");
var bc = footerTab.querySelectorAll("a div");
var use = footerTab.querySelectorAll("use")
var icons = ["shouyeweixuanzhong", "a-zhibokecheng", "erji", "zuanshi", "wode"]
var newicons = ["shouyexuanzhong", "icon_zhibo-mian", "erji-active", "zuanshi", "dkw_wode-"]

for (let i = 0; i < li.length; i++) {
    li[i].onclick = () => {
        for (let j = 0; j < li.length; j++) {
            bc[j].classList.remove("selected");
            use[j].setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', "#icon-" + icons[j]);
        }
        bc[i].classList.toggle("selected");
        use[i].setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', "#icon-" + newicons[i]);
    }
}
// footer tab end