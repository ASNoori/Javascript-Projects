const menuBtn = document.getElementById('menu-btn');
const sideBar = document.querySelector('.sidebar');
const navbar = document.querySelector('.navbar');
const logo = document.getElementById('logo-name');
const navSec=document.querySelector('.nav-sec');

let isSidebarOpen = false;
function openSideBar(){
    menuBtn.remove();
    sideBar.prepend(menuBtn);
     logo.style.marginLeft='260px';
     sideBar.style.position='absolute';
     sideBar.style.top='0px';
     sideBar.style.display='block';
     menuBtn.style.padding='20px';
}
function closeSideBar(){
    menuBtn.remove();
    navSec.prepend(menuBtn);
    sideBar.style.display = 'none';
    menuBtn.style.padding = '0px';
    logo.style.marginLeft = '30px';
}
menuBtn.addEventListener('click',()=>{
    if(!isSidebarOpen){
        isSidebarOpen=true;
        openSideBar();
     }
    else{
        isSidebarOpen=false;
        console.log('button clicked');
        closeSideBar();
    }
    });





     
   
  