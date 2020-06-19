
let img = document.getElementsByTagName("img");

for (let i = 0; i <img.length;i++){

    img[i].addEventListener('click', function (e) {
        e.stopPropagation();
        clickImg(this);
    });

}

creaModal();


function creaModal(){

    let modal = document.createElement("div");
    let close = document.createElement("div");
    let content = document.getElementById("content");

    modal.classList.add("modal");
    modal.style.height = '100vh';
    modal.style.width = '50vw';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.right = '-50vw';
    modal.style.backgroundColor = 'black';
    modal.style.zIndex = '9999999';
    modal.style.opacity = '.5';
    modal.style.transition = '1s ease-in-out';

    close.addEventListener('click',function(){
        modal.style.right = '-50vw';
    });

    content.addEventListener('click',function(e){
        e.stopPropagation();
        modal.style.right = '-50vw';
    });

    close.classList.add("close_modal");

    modal.appendChild(close);
    document.body.appendChild(modal);

}



function clickImg(){

    let modal  = document.getElementsByClassName('modal');


    if (modal[0].style.right == '-50vw'){
        modal[0].style.right = '0vw';
    }else {
        modal[0].style.right = '-50vw';
        setTimeout(function(){
            modal[0].style.right = '0vw';
        },1000)
    }

}