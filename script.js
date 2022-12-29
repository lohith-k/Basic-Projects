let projects=[
    {title:"Analog watch",img:"./img/Analog watch.png",file:"./Analog watch/index.html"},
{title:"Animal Sounds",img:"./img/Animal Sounds.png",file:"E:/WEB DEVELOPMENT/Projects/Animal Sounds/index.html"},
{title:"Animated Search Bar",img:"./img/Animated Search Bar.png",file:"E:/WEB DEVELOPMENT/Projects/Animated Search Bar/index.html"},
{title:"Arithmetic quiz",img:"./img/Arithmetic quiz.png",file:"E:/WEB DEVELOPMENT/Projects/Arithmetic quiz/index.html"},
{title:"Auto text Effect",img:"./img/Auto text Effect.png",file:"E:/WEB DEVELOPMENT/Projects/Auto text Effect/index.html"},
{title:"background img scroll",img:"./img/background img scroll.png",file:"E:/WEB DEVELOPMENT/Projects/background img scroll/index.html"},
{title:"Background video",img:"./img/Background video.png",file:"E:/WEB DEVELOPMENT/Projects/Background video/index.html"},
{title:"Blurry Loading",img:"./img/Blurry Loading.png",file:"E:/WEB DEVELOPMENT/Projects/Blurry Loading/index.html"},
{title:"Calculator",img:"./img/Calculator.png",file:"E:/WEB DEVELOPMENT/Projects/Calculator/index.html"},
{title:"Calendar",img:"./img/Calendar.png",file:"E:/WEB DEVELOPMENT/Projects/Calendar/index.html"},
{title:"Counter",img:"./img/Counter.png",file:"E:/WEB DEVELOPMENT/Projects/Counter/index.html"},
{title:"Dark Mode Toggle",img:"./img/Dark Mode Toggle.png",file:"E:/WEB DEVELOPMENT/Projects/Dark Mode Toggle/index.html"},
{title:"Digital watch",img:"./img/Digital watch.png",file:"E:/WEB DEVELOPMENT/Projects/Digital watch/index.html"},
{title:"Double Landing Page",img:"./img/Double Landing Page.png",file:"E:/WEB DEVELOPMENT/Projects/Double Landing Page/index.html"},
{title:"Emoji rating",img:"./img/Emoji rating.png",file:"E:/WEB DEVELOPMENT/Projects/Emoji rating/index.html"},
{title:"Hotstar Clone",img:"./img/Hotstar Clone.png",file:"E:/WEB DEVELOPMENT/Projects/Hotstar Clone/index.html"},
{title:"Image slider",img:"./img/Image slider.png",file:"E:/WEB DEVELOPMENT/Projects/Image slider/index.html"},
{title:"Live User Filter",img:"./img/Live User Filter.png",file:"E:/WEB DEVELOPMENT/Projects/Live User Filter/index.html"},
{title:"Loading bar",img:"./img/Loading bar.png",file:"E:/WEB DEVELOPMENT/Projects/Loading bar/index.html"},
{title:"Mini Calendar",img:"./img/Mini Calendar.png",file:"E:/WEB DEVELOPMENT/Projects/Mini Calendar/index.html"},
{title:"Mouse Events",img:"./img/Mouse Events.png",file:"E:/WEB DEVELOPMENT/Projects/Mouse Events/index.html"},
{title:"Music Player",img:"./img/Music Player.png",file:"E:/WEB DEVELOPMENT/Projects/Music Player/index.html"},
{title:"Navbar",img:"./img/Navbar.png",file:"E:/WEB DEVELOPMENT/Projects/Navbar/index.html"},
{title:"New Year Countdown",img:"./img/New Year Countdown.png",file:"E:/WEB DEVELOPMENT/Projects/New Year Countdown/index.html"},
{title:"popup background",img:"./img/popup background.png",file:"E:/WEB DEVELOPMENT/Projects/popup background/index.html"},
{title:"Profile Statistics",img:"./img/Profile Statistics.png",file:"E:/WEB DEVELOPMENT/Projects/Profile Statistics/index.html"},
{title:"QnA",img:"./img/QnA.png",file:"E:/WEB DEVELOPMENT/Projects/QnA/index.html"},
{title:"Random Color Generator",img:"./img/Random Color Generator.png",file:"E:/WEB DEVELOPMENT/Projects/Random Color Generator/index.html"},
{title:"Random Password Generator",img:"./img/Random Password Generator.png",file:"E:/WEB DEVELOPMENT/Projects/Random Password Generator/index.html"},
{title:"Random photo generator",img:"./img/Random photo generator.png",file:"E:/WEB DEVELOPMENT/Projects/Random photo generator/index.html"},
{title:"Randon choice picker",img:"./img/Randon choice picker.png",file:"E:/WEB DEVELOPMENT/Projects/Randon choice picker/index.html"},
{title:"Restaurent",img:"./img/Restaurent.png",file:"E:/WEB DEVELOPMENT/Projects/Restaurent/index.html"},
{title:"Ripple Effect",img:"./img/Ripple Effect.png",file:"E:/WEB DEVELOPMENT/Projects/Ripple Effect/index.html"},
{title:"Rock Paper Scissors",img:"./img/Rock Paper Scissors.png",file:"E:/WEB DEVELOPMENT/Projects/Rock Paper Scissors/index.html"},
{title:"Sidebar",img:"./img/Sidebar.png",file:"E:/WEB DEVELOPMENT/Projects/Sidebar/index.html"},
{title:"Social media select menu",img:"./img/Social media select menu.png",file:"E:/WEB DEVELOPMENT/Projects/Social media select menu/index.html"},
{title:"Step Progress  Bar",img:"./img/Step Progress  Bar.png",file:"E:/WEB DEVELOPMENT/Projects/Step Progress  Bar/index.html"},
 {title:"Sticky navbar",img:"./img/Sticky navbar.png",file:"E:/WEB DEVELOPMENT/Projects/Sticky navbar/index.html"},
// {title:"Stopwatch",img:"./img/Stopwatch.png",file:"E:/WEB DEVELOPMENT/Projects/Stopwatch/index.html"},
{title:"Tabs Section",img:"./img/Tabs Section.png",file:"E:/WEB DEVELOPMENT/Projects/Tabs Section/index.html"},
{title:"Tasks",img:"./img/Tasks.png",file:"E:/WEB DEVELOPMENT/Projects/Tasks/index.html"},
{title:"Testimonial generator",img:"./img/Testimonial generator.png",file:"E:/WEB DEVELOPMENT/Projects/Testimonial generator/index.html"},
{title:"Tic Tac Toe",img:"./img/Tic Tac Toe.png",file:"E:/WEB DEVELOPMENT/Projects/Tic Tac Toe/index.html"},
{title:"To do list",img:"./img/To do list.png",file:"E:/WEB DEVELOPMENT/Projects/To do list/index.html"},
{title:"Trail Animations",img:"./img/Trail Animations.png",file:"E:/WEB DEVELOPMENT/Projects/Trail Animations/index.html"},
{title:"Vertical Slider",img:"./img/Vertical Slider.png",file:"E:/WEB DEVELOPMENT/Projects/Vertical Slider/index.html"},
// {title:"Video player",img:"./img/Video player.png",file:"E:/WEB DEVELOPMENT/Projects/Video player/index.html"},
{title:"Word counter",img:"./img/Word counter.png",file:"E:/WEB DEVELOPMENT/Projects/Word counter/index.html"},
  
    
]

containerel=document.querySelector(".container");

projects.forEach((project)=>
{
    containerel.innerHTML+=`<a href="${project.file}"><div class="project">
    <div class="title">${project.title}</div>
    <img src="${project.img}" />
    
        </div></a>`
})