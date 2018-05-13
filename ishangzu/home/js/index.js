window.onload = function (e) {
  // 点击body收回下拉列表
  document.body.onclick = function (e) {
    event.stopPropagation();
    document.getElementById('city-select').className = 'drop-select';
    document.getElementById('drop-down-select').children[1].className = "iconfont icon-arrow-down";
  }
  // 城市选择
  document.getElementById('drop-down-select').onclick = function (event) {
    event.stopPropagation();
    if (this.children[1].className === "iconfont icon-arrow-down") {
      this.children[1].className = "iconfont icon-arrow-up";
      document.getElementById('city-select').className = 'show drop-select';
      for (let i = 0; i < 4; i++) {
        // console.log(document.getElementById('city-select').children[i]);
        // console.log(this);
        document.getElementById('city-select').children[i].onclick=function(e){
          // console.log(this);
          // console.log(this.parentElement.parentElement.children[0].children[0].innerHTML);
          this.parentElement.parentElement.children[0].children[0].innerHTML=this.innerHTML;
          // console.log(this.parentElement.childElementCount);
          for(let i=0;i<this.parentElement.childElementCount;i++){
            // console.log(this.parentElement.children[i]);
            this.parentElement.children[i].className='';
          }
          this.className='active-selected';
        }
      }
    } else {
      this.children[1].className = "iconfont icon-arrow-down";
      document.getElementById('city-select').className = 'drop-select';
    }
  }

  // 搜索
  function areaSeltctShow(event) {
    event.stopPropagation();
    if (this.parentElement.children[1].className === 'drop-select') {
      this.parentElement.children[1].className = 'drop-select show';
      for(let i=0;i<this.parentElement.children[1].childElementCount;i++){
        this.parentElement.children[1].children[i].onclick=function(e){
          // console.log(this.parentElement.parentElement.children[0]);
          this.parentElement.parentElement.children[0].value=this.innerHTML;
        }
      }
    } else {
      this.parentElement.children[1].className = 'drop-select';
    }
  }
  document.getElementById('area-input').onmouseover = areaSeltctShow;
  document.getElementById('area-input').onmouseout = areaSeltctShow;
  document.getElementById('area-select').onmouseover = function (e) {
    event.stopPropagation();
    this.parentElement.children[1].className = 'drop-select show';
  }
  document.getElementById('area-select').onmouseout = function (e) {
    event.stopPropagation();
    this.parentElement.children[1].className = 'drop-select';
  }
}
// 侧边栏
document.getElementById('entrust').onmousemove=function(e){
  e.stopPropagation();
  // console.log(this);
  this.children[0].className='sidebar-show';
}
document.getElementById('entrust').onmouseout=function(e){
  e.stopPropagation();
  // console.log(this);
  this.children[0].className='sidebar-show hide';

}
document.getElementById('qr-code').onmouseover=function (e) {
  e.stopPropagation();
  this.children[0].className='sidebar-show';

  }
  document.getElementById('qr-code').onmouseout=function(e){
    e.stopPropagation();
    // console.log(this);
    this.children[0].className='sidebar-show hide';
  
  }
  // 滚动
  window.onscroll=function(e){
    // this.console.log(document.documentElement.scrollTop);
    let t=document.documentElement.scrollTop||document.body.scrollTop;
    if(t>150){
      // console.log(`66`);
      document.getElementById('up-to-head').className='trans-hide slow-show iconfont icon-arrow-up';
    }else{
      document.getElementById('up-to-head').className='iconfont icon-arrow-up trans-hide';
    }
  }
  document.getElementById('up-to-head').onmouseover=function(e){
    if(document.getElementById('up-to-head').className==='trans-hide slow-show iconfont icon-arrow-up')
    // console.log(document.getElementById('up-to-head').style.visibility);
    document.getElementById('up-top-show').className='sidebar-show';
  }
  document.getElementById('up-to-head').onmouseout=function(e){
    document.getElementById('up-top-show').className='sidebar-show hide';
  }

  document.getElementById('up-to-head').onclick=function(e){
    // document.documentElement.scrollTop=0;
    let timer=null;
    cancelAnimationFrame(timer);
    timer=requestAnimationFrame(function fn(){
      let top=document.documentElement.scrollTop|| document.documentElement.scrollTop;
      if(top > 0){
        document.body.scrollTop = document.documentElement.scrollTop = top - 50;
        timer = requestAnimationFrame(fn);
        }else{
        cancelAnimationFrame(timer);
        } 
    });
    document.getElementById('up-top-show').className='sidebar-show hide';
  }
  console.log(document.getElementById('band-house-btns').children);
  // 品牌按钮
 for(let i=1;i<4;i++){
  document.getElementById('band-house-btns').children[i].onclick=function (e) {
      e.stopPropagation();
      console.log(this.parentElement);
      for(let j=1;j<4;j++){
        this.parentElement.children[j].className='';
      }
      this.className='active-btn';
      for(let j=1;j<4;j++){
        this.parentElement.parentElement.children[j].className='band-house-show show-list display-none';
      }
      this.parentElement.parentElement.children[i].className='band-house-show show-list display-show';
    }
 }