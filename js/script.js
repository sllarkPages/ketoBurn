var popupClose=document.querySelector('.popupCross'),
    menu=document.querySelector('.hamburgerMenu'),
    nav=document.querySelector('.header__top__nav');


popupClose.onclick=function () {
    document.querySelector('.topPopup').style.display='none';
};

menu.onclick=function () {
    nav.classList.toggle('hideNav');
};

window.addEventListener('click',function (e) {


    if( !(nav.contains(e.target)) && e.target!==nav && e.target!==menu && !(menu.contains(e.target))){
        nav.classList.add('hideNav');
    }


});


window.onload=function () {

    if(window.innerWidth<=760){


        document.querySelectorAll('.dropbtn').forEach(ele=>{

            ele.nextElementSibling.classList.add('hideNavDropdown');

            ele.addEventListener('click',()=>{
                ele.nextElementSibling.classList.toggle('hideNavDropdown');
            })


        })


    }

};