window.onscroll = ()=> {
let header = document.querySelector('.header');
header.classList.toggle("sticky",window.scrollY>100);
};
let cl= document.getElementsById("footerbtn")
window.addEventListener("scroll", function(){
    if(window.scrollY>150){
        cl.style.display="block"
    }else{cl.style.display="none"}
});