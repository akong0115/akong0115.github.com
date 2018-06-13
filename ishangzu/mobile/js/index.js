(function (doc, win) {
    // iPhone 6、7、8
    // 竖屏尺寸 750*1334,转换公式:px/20=rem;安全区域高度1130px
    // 横屏尺寸 1334*750,转换公式:px/20=rem;安全区域高度670px
    // iPhone X
    // 竖屏尺寸 750*1624,转换公式:px/20=rem;安全区域高度1420px
    // 横屏尺寸 1624*750,转换公式:px/20=rem;安全区域高度670px
    var pxBase = 20; // px转化为rem的基数,1rem=?px;
    var designWidth = 640; // 设计稿宽度;
    var ua = navigator.userAgent.toLowerCase();
    var isiOS = (/(iPhone|iPad|iPod):?/i).test(ua);
    var isAndroid = (/Android/i).test(ua);
    var docEl = doc.documentElement;
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) {
            return true;
        }

        // 获取横竖屏
        // iPhone下会卡在这一句
        // var orientation = window.screen.orientation.angle;
        var orientationText = window.screen.orientation;
        var isWeixin = (/MicroMessenger/i).test(ua);
        var wxOrientation = window.orientation;
        // 竖屏提示
        if (isWeixin) {
            if (wxOrientation === 0 || wxOrientation === 180) {
                // 竖屏
                docEl.style.fontSize = pxBase * (clientWidth / designWidth) + 'px';

            } else if (wxOrientation === 90 || wxOrientation === -90) {
                // 横屏
                docEl.style.fontSize = pxBase * 1.12 * (clientWidth / designWidth) / 2 + 'px';

            }
        } else if (isiOS) {
            if (orientationText !== undefined) {
                if (window.screen.orientation.angle === 0 || window.screen.orientation.angle === 180) {
                    // 竖屏
                    docEl.style.fontSize = pxBase * (clientWidth / designWidth) + 'px';

                } else if (window.screen.orientation.angle === 90 || window.screen.orientation.angle === -90) {
                    // 横屏
                    docEl.style.fontSize = pxBase * 1.12 * (clientWidth / designWidth) / 2 + 'px';

                }
            } else {
                if (wxOrientation === 0 || wxOrientation === 180) {
                    // 竖屏
                    docEl.style.fontSize = pxBase * (clientWidth / designWidth) + 'px';

                } else if (wxOrientation === 90 || wxOrientation === -90) {
                    // 横屏
                    docEl.style.fontSize = pxBase * 1.12 * (clientWidth / designWidth) / 2 + 'px';

                }
            }
        } else if (isAndroid) {
            if (window.orientation !== undefined) {
                if (window.orientation === 0 || window.orientation === 180) {
                    // 竖屏
                    docEl.style.fontSize = pxBase * (clientWidth / designWidth) + 'px';

                } else if (window.orientation === 90 || window.orientation === -90) {
                    // 横屏
                    docEl.style.fontSize = pxBase * 1.12 * (clientWidth / designWidth) / 2 + 'px';

                }
            } else if (window.screen.orientation.angle !== undefined) {
                if (window.screen.orientation.angle === 0 || window.screen.orientation.angle === 180) {
                    // 竖屏
                    docEl.style.fontSize = pxBase * (clientWidth / designWidth) + 'px';

                } else if (window.screen.orientation.angle === 90 || window.screen.orientation.angle === -90) {
                    // 横屏
                    docEl.style.fontSize = pxBase * 1.12 * (clientWidth / designWidth) / 2 + 'px';

                }
            } else if (orientationText !== undefined) {
                if (orientationText === 'portraitPrimary') {
                    // 竖屏
                    docEl.style.fontSize = pxBase * (clientWidth / designWidth) + 'px';

                } else if (orientationText === 'landscapePrimary' || orientationText === 'landscapeSecondary') {
                    // 横屏
                    docEl.style.fontSize = pxBase * 1.12 * (clientWidth / designWidth) / 2 + 'px';

                }
            }
        }
    };
    if (!doc.addEventListener) {
        return true;
    }

    // 测试像素比Pixel
    var dev = window.devicePixelRatio;
    docEl.setAttribute('dev-pix', dev.toFixed());

    // 对系统做识别
    if (isiOS) {
        var newDev = 1 / dev;
        document.getElementsByName("viewport")[0].content = "width=device-width,initial-scale=" + newDev.toFixed(1) + ",minimum-scale=" + newDev.toFixed(1) + ",maximum-scale=" + newDev.toFixed(1) + ",minimal-ui";
    } else if (isAndroid) {
        var newDev = 1 / dev;
        document.getElementsByName("viewport")[0].content = "width=device-width,initial-scale=" + newDev.toFixed(1) + ",minimum-scale=" + newDev.toFixed(1) + ",maximum-scale=" + newDev.toFixed(1) + ",minimal-ui";
    }

    win.addEventListener(resizeEvt, function () {
        recalc();
        aWidth = wrap.clientWidth;
    }, false);
    recalc();


    // 只传入两个实参则为获取，传入三个实参为设置参数值，当然为了简单点，所以只加入了translateX这一单一属性，用户可以自行对该函数进行改造，
    //可以适当的加入translateY,scaleX,scaleY等值。
    function cssTransform(ele, attr, val) {
        if (!ele.transform) {
            ele.transform = {};
        };
        //当传入值时对属性进行设置。
        if (arguments.length > 2) {
            ele.transform[attr] = val;
            var sval = "";
            for (var s in ele.transform) {
                if (s == "translateX") {
                    sval += s + "(" + ele.transform[s] + "px)";
                }
                ele.style.WebkitTransform = ele.style.transform = sval;
            }

        } else {
            val = ele.transform[attr];
            if (typeof val == "undefined") {
                if (attr == "translateX") {
                    val = 0;
                }
                console.log(val);
            };
            return val;
        }
    }


    var wrap = doc.querySelector(".wrap");
    var box = doc.querySelector(".slide");
    box.innerHTML += box.innerHTML;
    var aLi = doc.querySelectorAll(".slide li");
    var aNav = doc.querySelectorAll(".slide-dots li");
    var aHeight = aLi[0].offsetHeight;
    // console.log(wrap);
    var aWidth = wrap.clientWidth;
    console.log(aWidth);
    // wrap.style.height = aHeight + 'px';
    box.style.width = aLi.length * 100 + "%";
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].style.width = 1 / aLi.length * 100 + "%";
    }
    var startPoint = 0;
    var startEle = 0;
    var now = 0;
    var timer = 0;

    cssTransform(box, "translateX", 0);
    auto();
    wrap.addEventListener("touchstart", function (e) {
        clearTimeout(timer);
        box.style.transition = "none";
        var moveX = cssTransform(box, "translateX");
        now = Math.round(-moveX / aWidth);
        if (now == 0) {
            now = aNav.length;
        } else if (now == aLi.length - 1) {
            now = aNav.length - 1;
        }
        cssTransform(box, "translateX", -now * aWidth);
        startPoint = e.changedTouches[0].pageX;
        startEle = cssTransform(box, "translateX");
    }, false);
    wrap.addEventListener("touchmove", function (e) {
        var endPoint = e.changedTouches[0].pageX;
        var disX = endPoint - startPoint;
        cssTransform(box, "translateX", disX + startEle);
    }, false);
    wrap.addEventListener("touchend", function (e) {
        var moveX = cssTransform(box, "translateX");
        now = Math.round(-moveX / aWidth);
        tab();
        auto();

    }, false);

    function auto() {
        clearTimeout(timer);
        timer = setTimeout(function fn() {
            if (now == aLi.length - 1) {
                now = aNav.length - 1;
            }
            box.style.transition = "none";
            cssTransform(box, "translateX", -now * aWidth);
            setTimeout(function () {
                now++;
                tab();
            }, 30);
            timer = setTimeout(fn, 2000);
        }, 2000);
    };

    function tab() {
        box.style.transition = ".5s";
        cssTransform(box, "translateX", -now * aWidth);
        for (var i = 0; i < aNav.length; i++) {
            aNav[i].className = "dot";
        };
        aNav[now % aNav.length].className = "dot-active dot";
    }

    let menu = doc.getElementsByClassName('icon-menu')[0];
    let area = doc.getElementsByClassName('area-select')[0];
    let areaMore = doc.getElementsByClassName('area-more')[0];
    let bg = doc.getElementsByClassName('bg')[0];
    let menuMore = doc.getElementsByClassName('menu-more')[0];
    let menuBtn = doc.getElementsByClassName("icon-menu")[0];

    menu.addEventListener('click', function (e) {
        if (menuMore.style.display === 'none') {
            doc.body.style.overflow = 'hidden';
            bg.style.display = 'block';
            menuMore.style.display = '';
            menuBtn.style.color = '#ff3366';
            areaMore.style.display = 'none';
            doc.body.style.overflow = 'hidden';
            area.style.color = '#333';

        } else {
            menuMore.style.display = 'none';
            bg.style.display = 'none';
            doc.body.style.overflow = 'auto';
            menuBtn.style.color = '#333';
        }
    }, false);

    area.addEventListener('click', function (e) {
        if (areaMore.style.display === 'none') {
            doc.body.style.overflow = 'hidden';
            bg.style.display = 'block';
            areaMore.style.display = '';
            area.style.color = '#ff3366';
            menuMore.style.display = 'none';
            menuBtn.style.color = '#333';
        } else {
            areaMore.style.display = 'none';
            doc.body.style.overflow = 'hidden';
            bg.style.display = 'none';
            doc.body.style.overflow = 'auto';
            area.style.color = '#333';
        }
    }, false);
    for (let i = 0; i < 4; i++) {
        areaMore.children[0].children[i].addEventListener('click', function (e) {
            let bg = doc.getElementsByClassName('bg')[0];
            e.stopPropagation();
            let areaText = e.target.innerHTML;
            area.children[0].innerHTML = areaText;
            areaMore.style.display = 'none';
            bg.style.display = 'none';
            area.style.color = '#333';
            doc.body.style.overflow = 'auto';
        }, false);
    }
    doc.getElementsByClassName('clear')[0].addEventListener('click', function (e) {
        e.stopPropagation();
        let fixed = doc.getElementsByClassName('fixed')[0];
        let more = doc.getElementsByClassName('more')[0];
        if (fixed.style.display === '') {
            fixed.style.display = 'none';
            more.style.height = '4.5rem';
        } else {
            fixed.style.display = '';
            more.style.height = '10rem';
        }
    }, false);
    let inputClear = doc.getElementsByClassName('input-clear')[0];
    var input = doc.getElementsByClassName('search-input')[0];
    input.addEventListener('keydown', function (e) {
        e.stopPropagation();
        if (inputClear.style.display === 'none');
        inputClear.style.display = 'block';
        input.focus();
    }, false);
    inputClear.addEventListener('click', function (e) {
        e.stopPropagation();
        input.value = '';
        inputClear.style.display = 'none';
    }, false);
})(document, window);