function showMenu(){
    let menu = document.getElementById('hbMenu');
        if(menu.classList.contains('hidden') == true){
            menu.classList.remove('hidden');
        }else{
            menu.classList.add('hidden');
        }
}
function showLarge(e){
	document.getElementById('large').src = e.target.src;
}





function init(){
    document.getElementById('hb').onclick=showMenu;

    //點小圖秀大圖
    let imgs = document.querySelectorAll('.product .item-pic img');
	    for(i=0; i<imgs.length; i++){
		    imgs[i].onmouseover = showLarge;
	};


}


window.addEventListener('load', init, false);


// $(function (adVideo) {
//     let divWidth = $('.banner').width();
//     let imgCount = $('.video li').length();
//     $('.video').width(divWidth * imgCount);
//     $('.video li').width(divWidth);   
//     $('.video').animate({
//         left: divWidth * imgCount[i] * -1,
//     });
// });
// setInterval(adVideo,3000);