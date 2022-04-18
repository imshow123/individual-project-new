function showMenu(){
    let menu = document.getElementById('hbMenu');
        if(menu.classList.contains('hidden') == true){
            menu.classList.remove('hidden');
        }else{
            menu.classList.add('hidden');
        }
}
function init(){
    document.getElementById('hb').onclick=showMenu;
}

window.addEventListener('load', init, false)