function ToggleSidebar(){
   let sideBar=document.getElementsByClassName("sideBar");
   if(sideBar[0].style.width=="0%"){
    sideBar[0].style.width="15%"
    sideBar[0].style.transition="0.3s"
   }else{
    sideBar[0].style.width="0%"
    sideBar[0].style.transition="0.3s"
   }
   
}