let projects=[
    {title:"Analog watch",img:"./img/Analog watch.png",file:"./Analog watch/index.html"},
{title:"Animal Sounds",img:"./img/Animal Sounds.png",file:"./Animal Sounds/index.html"},
{title:"Animated Search Bar",img:"./img/Animated Search Bar.png",file:"./Animated Search Bar/index.html"},
{title:"Arithmetic quiz",img:"./img/Arithmetic quiz.png",file:"./Arithmetic quiz/index.html"},
{title:"Auto text Effect",img:"./img/Auto text Effect.png",file:"./Auto text Effect/index.html"},
{title:"background img scroll",img:"./img/background img scroll.png",file:"./background img scroll/index.html"},
{title:"Background video",img:"./img/Background video.png",file:"./Background video/index.html"},
{title:"Blurry Loading",img:"./img/Blurry Loading.png",file:"./Blurry Loading/index.html"},
{title:"Calculator",img:"./img/Calculator.png",file:"./Calculator/index.html"},
{title:"Calendar",img:"./img/Calendar.png",file:"./Calendar/index.html"},
{title:"Counter",img:"./img/Counter.png",file:"./Counter/index.html"},
{title:"Dark Mode Toggle",img:"./img/Dark Mode Toggle.png",file:"./Dark Mode Toggle/index.html"},
{title:"Digital watch",img:"./img/Digital watch.png",file:"./Digital watch/index.html"},
{title:"Double Landing Page",img:"./img/Double Landing Page.png",file:"./Double Landing Page/index.html"},
{title:"Emoji rating",img:"./img/Emoji rating.png",file:"./Emoji rating/index.html"},
{title:"Hotstar Clone",img:"./img/Hotstar Clone.png",file:"./Hotstar Clone/index.html"},
{title:"Image slider",img:"./img/Image slider.png",file:"./Image slider/index.html"},
{title:"Live User Filter",img:"./img/Live User Filter.png",file:"./Live User Filter/index.html"},
{title:"Loading bar",img:"./img/Loading bar.png",file:"./Loading bar/index.html"},
{title:"Mini Calendar",img:"./img/Mini Calendar.png",file:"./Mini Calendar/index.html"},
{title:"Mouse Events",img:"./img/Mouse Events.png",file:"./Mouse Events/index.html"},
{title:"Music Player",img:"./img/Music Player.png",file:"./Music Player/index.html"},
{title:"Navbar",img:"./img/Navbar.png",file:"./Navbar/index.html"},
{title:"New Year Countdown",img:"./img/New Year Countdown.png",file:"./New Year Countdown/index.html"},
{title:"popup background",img:"./img/popup background.png",file:"./popup background/index.html"},
{title:"Profile Statistics",img:"./img/Profile Statistics.png",file:"./Profile Statistics/index.html"},
{title:"QnA",img:"./img/QnA.png",file:"./QnA/index.html"},
{title:"Random Color Generator",img:"./img/Random Color Generator.png",file:"./Random Color Generator/index.html"},
{title:"Random Password Generator",img:"./img/Random Password Generator.png",file:"./Random Password Generator/index.html"},
{title:"Random photo generator",img:"./img/Random photo generator.png",file:"./Random photo generator/index.html"},
{title:"Randon choice picker",img:"./img/Randon choice picker.png",file:"./Randon choice picker/index.html"},
{title:"Restaurent",img:"./img/Restaurent.png",file:"./Restaurent/index.html"},
{title:"Ripple Effect",img:"./img/Ripple Effect.png",file:"./Ripple Effect/index.html"},
{title:"Rock Paper Scissors",img:"./img/Rock Paper Scissors.png",file:"./Rock Paper Scissors/index.html"},
{title:"Sidebar",img:"./img/Sidebar.png",file:"./Sidebar/index.html"},
{title:"Social media select menu",img:"./img/Social media select menu.png",file:"./Social media select menu/index.html"},
{title:"Step Progress  Bar",img:"./img/Step Progress  Bar.png",file:"./Step Progress  Bar/index.html"},
 {title:"Sticky navbar",img:"./img/Sticky navbar.png",file:"./Sticky navbar/index.html"},
// {title:"Stopwatch",img:"./img/Stopwatch.png",file:"./Stopwatch/index.html"},
{title:"Tabs Section",img:"./img/Tabs Section.png",file:"./Tabs Section/index.html"},
{title:"Tasks",img:"./img/Tasks.png",file:"./Tasks/index.html"},
{title:"Testimonial generator",img:"./img/Testimonial generator.png",file:"./Testimonial generator/index.html"},
{title:"Tic Tac Toe",img:"./img/Tic Tac Toe.png",file:"./Tic Tac Toe/index.html"},
{title:"To do list",img:"./img/To do list.png",file:"./To do list/index.html"},
{title:"Trail Animations",img:"./img/Trail Animations.png",file:"./Trail Animations/index.html"},
{title:"Vertical Slider",img:"./img/Vertical Slider.png",file:"./Vertical Slider/index.html"},
// {title:"Video player",img:"./img/Video player.png",file:"./Video player/index.html"},
{title:"Word counter",img:"./img/Word counter.png",file:"./Word counter/index.html"},
  
    
]

containerel=document.querySelector(".container");

projects.forEach((project)=>
{
    containerel.innerHTML+=`<a href="${project.file}"><div class="project">
    <div class="title">${project.title}</div>
    <img src="${project.img}" />
    
        </div></a>`
})