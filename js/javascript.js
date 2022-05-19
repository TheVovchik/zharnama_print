// let click = 0;

// function changeItem() {

//     const header__phone = document.getElementById('header__phone');
    
//     header__phone.style.display = header__phone.style.display == 'none' ? 'initial' : 'none';
// }

function showItem(number) {
       const blockToShow = document.getElementById('descr'+[number]);
       const blockToWatch = document.getElementById(number);
       blockToShow.style.opacity = 1;
       blockToShow.style.transition = "opacity 1s";
       const f_fade = (() => { blockToShow.style.opacity = 0; });

       const f_unfade = (() => { blockToShow.style.opacity = 1; });
       blockToWatch.addEventListener("mouseout", f_fade , false);
       blockToWatch.addEventListener("mouseover", f_unfade , false);
}
    // switch (click % 2){
    //     case 1:
    //         document.getElementById('header__phone').style.display = 'initial';
    //         break;
    //     case 0:
    //         document.getElementById('header__phone').style.display = 'none';
    //         break;
    // }

    // const ifHidden = document.getElementById('header__phone').style.display === 'none';

    // switch (ifHidden){
    //     case true:
    //         document.getElementById('header__phone').style.display = 'initial';
    //         break;
    //     case false:
    //         document.getElementById('header__phone').style.display = 'none';
    //         break;
    // }

    //     if (click % 2 === 1) {
    //     document.getElementById('header__phone').style.display = 'initial';
    //     }
    //     else {document.getElementById('header__phone').style.display = 'none';


