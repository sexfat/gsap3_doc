//套件引入
import { gsap, ScrollTrigger, DrawSVGPlugin } from "gsap-trial/all";
// 套件註冊使用
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
import './sass/index.scss';

// ==============   基本動畫

gsap.to('.a1', {
    x: 500,
    duration: 4,
})


// ===============  時間軸動畫

let tl = gsap.timeline();


tl.to('.b1', {
    x: 200,
    duration: 4
}).to('.b1', {
    y: 200,
    duration: 2
}).to('.b1', {
    rotation: 180
})


// ================= svg 動畫
gsap.from('circle', {
    duration: 2,
    drawSVG: "0% 0%",
    stagger: 0.5,
    repeat: 3
})


// =============== scroll 動畫
gsap.to('.s1', {
    scrollTrigger: '.s1', // start the animation when ".s1" enters the viewport 這個是當物件進入可視範圍內就會開始執行動畫 (once)
    duration: 2,
    x: 200,
    rotate: 180,
   
})


// 可以把 markers 打開，看一下 start 與 end 的觸發點
gsap.to('.s2', {
    x: 600,
    duration: 3,
    scrollTrigger: {
        trigger: '.s2',
        start: "top center", // 第一個是物件的觸發位址  第二個是視窗的位址 
        end: "100px 100px", //  第一個是物件的觸發位址  第二個是視窗的位址 
        // markers: { startColor: "blue", endColor: "red" }, //觸發點指標
        toggleClass: "active", // 動態在物件上 置入xclass
        toggleActions: 'play pause reverse pause',//返回執行狀態，講義裡有範例
        // 範例在這邊 ： https://codepen.io/GreenSock/pen/LYVKWGo
        //onUpdate: self => console.log("direction:", self.direction)
        //scrub: true,
        // onEnter: console.log('scroll start')
    }
})


// =========== scrub 動畫

var t = gsap.timeline({
    scrollTrigger: {
        trigger: ".scrub",
        start: "-200px center",
        end: "center bottom",
        scrub: .5, // 是否可以返回
        //markers: true
    }

});


t.to('.r1' , {
    width: '500px',
}).to('.r2' , {
     width: '500px'
})



/** 滾動視差寫法 原理是兩個物件動畫移動不同的速度，就會造成有景深的效果
所以你們可以使用位移不同的距離來看，例如 y: 100 and y : -100
兩個速度就不一樣，就會有視差效果
**/


gsap.to('.img' , {
    //yPercent : -5 ,
    y : -100,
    scrollTrigger: {
                trigger: ".img",
                //start: "-200px center",
                //end: "center bottom",
                scrub: 1,  //smooth animation
                //markers: true
            }
})

gsap.to('.color' , {
    //yPercent : 20 ,
    y : 100,
    scrollTrigger: {
                trigger: ".color",
                //start: "-200px center",
                //end: "center bottom",
                scrub: .5, 
                //markers: true
            }

})


//  svg 觸發事件

var tl1 = gsap.timeline({
  scrollTrigger : {
      trigger : 'rect',
      start : 'top center',
      markers: { startColor: "blue", endColor: "red" }, //觸發點指標
   },
});

tl1.from('rect', {
    duration: 2,
    drawSVG: 1,
})
