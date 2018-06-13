// (function (doc, win) {
//     // iPhone 6、7、8
//     // 竖屏尺寸 750*1334,转换公式:px/20=rem;安全区域高度1130px
//     // 横屏尺寸 1334*750,转换公式:px/20=rem;安全区域高度670px
//     // iPhone X
//     // 竖屏尺寸 750*1624,转换公式:px/20=rem;安全区域高度1420px
//     // 横屏尺寸 1624*750,转换公式:px/20=rem;安全区域高度670px
//     var pxBase = 20; // px转化为rem的基数,1rem=?px;
//     var designWidth = 640; // 设计稿宽度;
//     var ua = navigator.userAgent.toLowerCase();
//     var isiOS = (/(iPhone|iPad|iPod):?/i).test(ua);
//     var isAndroid = (/Android/i).test(ua);
//     var docEl = doc.documentElement;
//     var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
//     var recalc = function () {
//         var clientWidth = docEl.clientWidth;
//         if (!clientWidth) {
//             return true;
//         }

//         // 获取横竖屏
//         // iPhone下会卡在这一句
//         // var orientation = window.screen.orientation.angle;
//         var orientationText = window.screen.orientation;
//         var isWeixin = (/MicroMessenger/i).test(ua);
//         var wxOrientation = window.orientation;
//         // 竖屏提示
//         if (isWeixin) {
//             if (wxOrientation === 0 || wxOrientation === 180) {
//                 // 竖屏
//                 docEl.style.fontSize = pxBase * (clientWidth / designWidth) + 'px';

//             } else if (wxOrientation === 90 || wxOrientation === -90) {
//                 // 横屏
//                 docEl.style.fontSize = pxBase * 1.12 * (clientWidth / designWidth) / 2 + 'px';

//             }
//         } else if (isiOS) {
//             if (orientationText !== undefined) {
//                 if (window.screen.orientation.angle === 0 || window.screen.orientation.angle === 180) {
//                     // 竖屏
//                     docEl.style.fontSize = pxBase * (clientWidth / designWidth) + 'px';

//                 } else if (window.screen.orientation.angle === 90 || window.screen.orientation.angle === -90) {
//                     // 横屏
//                     docEl.style.fontSize = pxBase * 1.12 * (clientWidth / designWidth) / 2 + 'px';

//                 }
//             } else {
//                 if (wxOrientation === 0 || wxOrientation === 180) {
//                     // 竖屏
//                     docEl.style.fontSize = pxBase * (clientWidth / designWidth) + 'px';

//                 } else if (wxOrientation === 90 || wxOrientation === -90) {
//                     // 横屏
//                     docEl.style.fontSize = pxBase * 1.12 * (clientWidth / designWidth) / 2 + 'px';

//                 }
//             }
//         } else if (isAndroid) {
//             if (window.orientation !== undefined) {
//                 if (window.orientation === 0 || window.orientation === 180) {
//                     // 竖屏
//                     docEl.style.fontSize = pxBase * (clientWidth / designWidth) + 'px';

//                 } else if (window.orientation === 90 || window.orientation === -90) {
//                     // 横屏
//                     docEl.style.fontSize = pxBase * 1.12 * (clientWidth / designWidth) / 2 + 'px';

//                 }
//             } else if (window.screen.orientation.angle !== undefined) {
//                 if (window.screen.orientation.angle === 0 || window.screen.orientation.angle === 180) {
//                     // 竖屏
//                     docEl.style.fontSize = pxBase * (clientWidth / designWidth) + 'px';

//                 } else if (window.screen.orientation.angle === 90 || window.screen.orientation.angle === -90) {
//                     // 横屏
//                     docEl.style.fontSize = pxBase * 1.12 * (clientWidth / designWidth) / 2 + 'px';

//                 }
//             } else if (orientationText !== undefined) {
//                 if (orientationText === 'portraitPrimary') {
//                     // 竖屏
//                     docEl.style.fontSize = pxBase * (clientWidth / designWidth) + 'px';

//                 } else if (orientationText === 'landscapePrimary' || orientationText === 'landscapeSecondary') {
//                     // 横屏
//                     docEl.style.fontSize = pxBase * 1.12 * (clientWidth / designWidth) / 2 + 'px';

//                 }
//             }
//         }
//     };
//     if (!doc.addEventListener) {
//         return true;
//     }

//     // 测试像素比Pixel
//     var dev = window.devicePixelRatio;
//     docEl.setAttribute('dev-pix', dev.toFixed());

//     // 对系统做识别
//     if (isiOS) {
//         var newDev = 1 / dev;
//         document.getElementsByName("viewport")[0].content = "width=device-width,initial-scale=" + newDev.toFixed(1) + ",minimum-scale=" + newDev.toFixed(1) + ",maximum-scale=" + newDev.toFixed(1) + ",minimal-ui";
//     } else if (isAndroid) {
//         var newDev = 1 / dev;
//         document.getElementsByName("viewport")[0].content = "width=device-width,initial-scale=" + newDev.toFixed(1) + ",minimum-scale=" + newDev.toFixed(1) + ",maximum-scale=" + newDev.toFixed(1) + ",minimal-ui";
//     }

//     win.addEventListener(resizeEvt, recalc, false);
//     doc.addEventListener('DOMContentLoaded', recalc, false);
// })(document, window);