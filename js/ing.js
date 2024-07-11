var tabs = document.querySelectorAll("body");
for (let i = 0; i < tabs.length; i++) {
    tab(tabs[i]);
}

function tab(main) {
    var navli = main.querySelectorAll(".navigation li");
    var mainbox = main.querySelectorAll(".ing-content");
    var keyword = main.querySelector(".keyword");
    var keyp = main.querySelector("#header p");
    var keywordarr = ["轻音助眠酣睡云端", "沉浸场景提升专注", "全程陪伴安全出行"];
    var keyparr = ["7.0w人正在助眠", "6.8w人正在学习工作", "4.6w人正在开车"];
    var bcimg = main.querySelector(".background-image");
    var footercolor = main.querySelector("footer");
    var pbox = main.querySelectorAll(".player-box");
    var tabsbox = main.querySelectorAll(".box");
    var tabli = main.querySelectorAll(".tabs li");
    var index = 1;

    for (let i = 0; i < navli.length; i++) {
        for (let k = 0; k < tabli.length; k++) {
            tabli[k].onclick = () => {
                for (let l = 0; l < tabli.length; l++) {
                    tabli[l].classList.remove("active", "bc-color" + (index + 1));
                    tabsbox[l].classList.add("none")
                }
                tabli[k].classList.add("active", "bc-color" + (index + 1));
                tabsbox[k].classList.remove("none")
            };
        }

        navli[i].onclick = () => {
            for (let l = 0; l < tabli.length; l++) {
                tabli[l].classList.remove("active", "bc-color" + (index + 1));
                tabsbox[l].classList.add("none")
            }
            for (let j = 0; j < navli.length; j++) {
                navli[j].classList.remove("active");
                mainbox[j].classList.add("none");
                keyword.innerHTML = "";
                keyp.innerHTML = "";
                bcimg.classList.remove("cover-img" + (j + 1));
                footercolor.classList.remove("bc-color" + (j + 1));
                pbox[j].classList.remove("bc-color" + (j + 1));
                index = 1;
            }
            navli[i].classList.add("active");
            mainbox[i].classList.remove("none");
            keyword.innerHTML = keywordarr[i];
            keyp.innerHTML = keyparr[i];
            bcimg.classList.add("cover-img" + (i + 1));
            footercolor.classList.add("bc-color" + (i + 1));
            pbox[i].classList.add("bc-color" + (i + 1));
            index = i;
            tabli[i * 4].classList = "active bc-color" + (i + 1);
            tabsbox[i * 4].classList.remove("none")
        };
    }
}
var url = `http://rap2api.taobao.org/app/mock/315413/ingstudy`;

fetch(url).then(res => {
    return res.json();
}).then(data => {
    parse(data);
    // 自定义的函数，写在外面，参数为json数组
}).catch(error => {
    console.log(error);
});

function parse(res) {
    var boxes = document.querySelectorAll('.box');
    res.forEach(item => {
        let li = document.createElement('li');
        li.innerHTML = `<img class="player-cover" src="${item.cover}">
            <span class="player-name">${item.name}</span>`;
        for (let i = 0; i < boxes.length; i++) {
            if (item.type == i) {
                boxes[i].querySelector('ul').appendChild(li);
            }
        }
    });
}