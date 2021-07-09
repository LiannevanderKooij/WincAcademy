const btn = document.querySelector('#mybutton');

btn.addEventListener('click', function(){
    alert('button clicked');
}); 

const btn2 = document.querySelector('#changebackground');

 


btn2.addEventListener('click', function(){
   document.querySelector('body').classList.toggle('red-background');
}
);


