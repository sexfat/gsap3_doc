//套件引入
import { gsap, ScrollTrigger, DrawSVGPlugin } from "gsap-trial/all";

// 套件註冊使用  ScrollTrigger＝滾動觸發事件   DrawSVGPlugin ＝ svg line 動畫 
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

//看自己要引入哪個 scss
//import './sass/index.scss';