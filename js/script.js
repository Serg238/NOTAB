// cookie hide
document.querySelector('.cookie__btn').addEventListener('click', function (e) {
document.querySelector('.cookie').style.display='none';
});

// errоr form
let form = document.getElementsByTagName('form')[0],
    send = document.querySelector('.send');


send.addEventListener('click', function () {
    for (let i = 0; i < form.length-2; i++) {
        if(form[i].value =="") form[i].classList.add('invalid');
    }
});



for (let i = 0; i < form.length-2; i++) {
    form[i].oninput = function() {
        if(this.classList.contains('invalid'))
        this.classList.remove('invalid');
     } 
     form[i].onchange = function() {
        if(this.value =="") this.classList.add('invalid');
     }
}


// console.log('window.wigth');
