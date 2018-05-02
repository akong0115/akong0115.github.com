function gdjz(div,cssname,offset){
    var a,b,c,d;
    d=$(div).offset().top;
    a=eval(d + offset);
    b=$(window).scrollTop(); //监控窗口已滚动的距离;
    c=$(window).height();//浏览器窗口的高度*/
    console.log(a,b,c,d);

    if(b>=offset){
    console.log("add");
        $(div).addClass(cssname);
     } else if (b<offset) {
        console.log("remove");
        $(div).removeClass(cssname);
     }
}
$(document).ready(function(){
    $('#name').fadeIn(2000);
    var rallax=new Rellax('.slow');
    var rallax=new Rellax('fast');
    // var word=document.getElementsByTagName('.dercription h2');
    var svg1 = new Vivus('svg1', {type: 'oneByOne', duration: 100});
    // var svg2 = new Vivus('svg2', {type: 'oneByOne', duration: 100});

});
function svglocation(div,offset){
    var a,b,c,d;
    // d=$(div).offset().top;
    a=eval(d);
    b=$(window).scrollTop(); //监控窗口已滚动的距离;
    c=$(window).height();//浏览器窗口的高度*/
    // console.log(a,b,c,d);
    if(b>offset){
    var myVivus=new Vivus(div).play();
     }
}
$(window).scroll(function(){
    gdjz('#title','animated bounceInLeft',200);
    gdjz('.dercription>ul li','animated fadeInUp',250);
    gdjz('#word2 h2','animated bounceInRight',700);
    gdjz('#word2 li','animated fadeInUp',780);
    gdjz('#za li','animated fadeInUp',1500);
    gdjz('#za h2','animated bounceInRight',1500);

    gdjz('#one','animated fadeInDown',2500);
    gdjz('#two','animated fadeInDown',2500);
    gdjz('#three','animated fadeInDown',2500);
})
