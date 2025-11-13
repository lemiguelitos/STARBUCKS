const navlist = document.getElementById('menuList'),
      navtoggle = document.getElementById('nav-show'),
      navclose = document.getElementById('nav-close')

      /*  ========== show menu canvas =========*/
 
if(navtoggle){
    navtoggle.addEventListener('click', ()=>{
        navlist.classList.add('showmenu')
    })
}

/*  ========== remove menu canvas =========*/
if(navclose){
    navclose.addEventListener('click', ()=>{
        navlist.classList.remove('showmenu')
    })
}

/*  ========== remove menu canvas mobile =========*/
const navlink = document.querySelectorAll('.nav__link')

const linkAction = ()=>{
    const navlist =document.getElementById('menulist')

    navlist.classList.remove('showmenu')

}

navlink.forEach(n =>n.addEventListener('click', linkAction))

const foot_list_items = document.querySelectorAll('.foot_list1_li');

foot_list_items.forEach((item) => {
    const button = item.querySelector('.toplist'); // bouton à l'intérieur du li
    let toggleindex = 0;

    button.addEventListener('click', () => {
        if (toggleindex === 0) {
            item.style.height = `${item.scrollHeight}px`;
            toggleindex++;
        } else {
            item.style.height = '63px';
            toggleindex = 0;
        }
    });
});


/* ===================== menu sctiky ==================== */

const header = document.getElementById('header');
const sticky = header.offsetTop;

window.addEventListener('scroll', () => {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});





