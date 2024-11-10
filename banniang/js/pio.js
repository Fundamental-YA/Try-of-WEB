/* ----
# Pio Plugin
# By: Dreamer-Paul
# Modified by Fundamental_YA
# Last Update: 2024. 9 . 7

一个支持更换 Live2D 模型的 Typecho 插件。
---- */

var Paul_Pio = function (prop) {
    var that = this;

    var current = {
        idol: 0,
        menu: document.querySelector(".pio-container .pio-action"),
        canvas: document.getElementById("pio"),
        body: document.querySelector(".pio-container"),
        root: document.location.protocol +'//' + document.location.hostname +'/'
    };

    /* - 方法 */
    var modules = {
        // 更换模型

        idol: function () {
            current.idol < (prop.model.length - 1) ? current.idol++ : current.idol = 0;
            return current.idol;
        },
        // 创建内容
        create: function (tag, prop) {
            var e = document.createElement(tag);
            if(prop.class) e.className = prop.class;
            return e;
        },
        // 随机内容
        rand: function (arr) {
            return arr[Math.floor(Math.random() * (arr.length - 1))];
        },
        // 创建对话框方法
        render: function (text) {
            if(text.constructor === Array){
                dialog.innerText = modules.rand(text);
            }
            else if(text.constructor === String){
                dialog.innerText = text;
            }
            dialog.classList.add("active");
            clearTimeout(this.t);
            this.t = setTimeout(function () {
                dialog.classList.remove("active");
            }, 3000);
        },
        // 移除方法
        destroy: function () {
            that.initHidden();
            localStorage.setItem("posterGirl", 0);
        },
        // 是否为移动设备
        isMobile: function () {
            var ua = window.navigator.userAgent.toLowerCase();
            ua = ua.indexOf("mobile") || ua.indexOf("android") || ua.indexOf("ios");

            return window.innerWidth < 500 || ua !== -1;
        }
    };
    this.destroy = modules.destroy;

    var elements = {
        home: modules.create("span", {class: "pio-home"}),
        skin: modules.create("span", {class: "pio-skin"}),
        info: modules.create("span", {class: "pio-info"}),
        sentence: modules.create("span", {class: "pio-sentence"}),
        //close: modules.create("span", {class: "pio-close"}),

        show: modules.create("div", {class: "pio-show"})
    };

    var dialog = modules.create("div", {class: "pio-dialog"});
    current.body.appendChild(dialog);
    current.body.appendChild(elements.show);

    /* - 提示操作 */
        var action = {
        // 欢迎
         welcome: function () {
            if(document.referrer !== "" && document.referrer.indexOf(current.root) === -1){
                var referrer = document.createElement('a');
                referrer.href = document.referrer;
                prop.content.referer ? modules.render(prop.content.referer.replace(/%t/, "“" + referrer.hostname + "”")) : modules.render("欢迎来自 “" + referrer.hostname + "” 的朋友！");
            }

            else if(prop.tips){
                var text, hour = new Date().getHours();

                if (hour > 22 || hour <= 5) {
                    text = '疲倦的月亮躲进了云层休息，只留下几颗星星像是在放哨';
                }
                else if (hour > 5 && hour <= 8) {
                    text = '日出唤醒清晨，大地光彩重生。';
                }
                else if (hour > 8 && hour <= 11) {
                    text = '阳光在窗户上击碎成千万缕，而后被微风吹散。';
                }
                else if (hour > 11 && hour <= 14) {
                    text = '骄阳是生命的水晶球。';
                }
                else if (hour > 14 && hour <= 17) {
                    text = '太阳这么大，适合躲在窗帘的阴影里睡觉。';
                }
                else if (hour > 17 && hour <= 19) {
                    text = '日落尤其温柔，人间皆是浪漫！';
                }
                else if (hour > 19 && hour <= 21) {
                    text = '一缕清幽的月光透过窗子撒在了窗台上，窗台宛若镀了银。';
                }
                else if (hour > 21 && hour <= 23) {
                    text = '夜深了，只有那天上的星星在窃窃私语';
                }
                else{
                    text = "钟坏了？？？";
                }
                modules.render(text);
            }
            else{
                modules.render(prop.content.welcome || "欢迎来到饭打馒头的网站！");
            }
        },
        // 触摸
        touch: function () {
            current.canvas.onclick = function () {
                modules.render(prop.content.touch || ["功能键在这里"]);
            };
        },

        // 右侧按钮
         buttons: function () {
             // 返回首页
             elements.home.onclick = function () {
                 location.href = current.root;
             };
             elements.home.onmouseover = function () {
                 modules.render(prop.content.home || "点击这里回到首页！");
             };
             current.menu.appendChild(elements.home);

             // 更换模型
             elements.skin.onclick = function () {
                 loadlive2d("pio", prop.model[modules.idol()]);
                 prop.content.skin && prop.content.skin[1] ? modules.render(prop.content.skin[1]) : modules.render("换装");
             };
             elements.skin.onmouseover = function () {
                 prop.content.skin && prop.content.skin[0] ? modules.render(prop.content.skin[0]) : modules.render("换装");
             };
             if(prop.model.length > 1) current.menu.appendChild(elements.skin);

             // 关于我
             elements.info.onclick = function () {
                 window.open("../../profile/index.html");
             };
             elements.info.onmouseover = function () {
                 modules.render("个人简介");
             };
             current.menu.appendChild(elements.info);

             // 一言
             elements.sentence.onclick = function () {
                 modules.render(fetch('https://v1.hitokoto.cn')
                                     .then(response => response.json())
                                     .then(data => {
                                             const hitokoto = document.querySelector('.pio-dialog')
                                             hitokoto.href = 'https://hitokoto.cn/?uuid=' + data.uuid
                                             hitokoto.innerText = data.hitokoto })
                                     .catch(console.error) )
                  };
                 elements.sentence.onmouseover = function () {
                     modules.render("每日一言。");
                 };
                 current.menu.appendChild(elements.sentence);


             // 关闭看板娘
//             elements.close.onclick = function () {
//                 modules.destroy();
//             };
//             elements.close.onmouseover = function () {
//                 modules.render(prop.content.close || "QWQ 下次再见吧~");
//             };
//             current.menu.appendChild(elements.close);
         },
        custom: function () {
            prop.content.custom.forEach(function (t) {
                if(!t.type) t.type = "default";
                var e = document.querySelectorAll(t.selector);

                if(e.length){
                    for(var j = 0; j < e.length; j++){
                        if(t.type === "read"){
                            e[j].onmouseover = function () {
                                modules.render("想阅读 %t 吗？".replace(/%t/, "“" + this.innerText + "”"));
                            }
                        }
                        else if(t.type === "link"){
                            e[j].onmouseover = function () {
                                modules.render("想了解一下 %t 吗？".replace(/%t/, "“" + this.innerText + "”"));
                            }
                        }
                        else if(t.text){
                            e[j].onmouseover = function () {
                                modules.render(t.text);
                            }
                        }
                    }
                }
            });
        }
    };

    /* - 运行 */
    var begin = {
        static: function () {
            current.body.classList.add("static");
        },
        fixed: function () {
            action.touch(); action.buttons();
        },
        draggable: function () {
            action.touch(); action.buttons();

            var body = current.body;
            body.onmousedown = function (downEvent) {
                var location = {
                    x: downEvent.clientX - this.offsetLeft,
                    y: downEvent.clientY - this.offsetTop
                };

                function move(moveEvent) {
                    body.classList.add("active");
                    body.classList.remove("right");
                    body.style.left = (moveEvent.clientX - location.x) + 'px';
                    body.style.top  = (moveEvent.clientY - location.y) + 'px';
                    body.style.bottom = "auto";
                }

                document.addEventListener("mousemove", move);
                document.addEventListener("mouseup", function () {
                    body.classList.remove("active");
                    document.removeEventListener("mousemove", move);
                });
            };
        }
    };

    // 运行
    this.init = function (onlyText) {
        if(!(prop.hidden&& modules.isMobile())){
            if(!onlyText){
                action.welcome();
                loadlive2d("pio", prop.model[Math.floor(Math.random()*(prop.model.length))]);
            }

            switch (prop.mode){
                case "static": begin.static(); break;
                case "fixed":  begin.fixed(); break;
                case "draggable": begin.draggable(); break;
            }

            if(prop.content.custom) action.custom();
        }
    };

    // 隐藏状态
    this.initHidden = function () {
        current.body.classList.add("hidden");
        dialog.classList.remove("active");

        elements.show.onclick = function () {
            current.body.classList.remove("hidden");
            localStorage.setItem("posterGirl", 1);
            that.init();
        }
    }

    localStorage.getItem("posterGirl") == 0 ? this.initHidden() : this.init();
};
