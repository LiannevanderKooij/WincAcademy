

let toggleButton = document.querySelector('.btn-toggle');

let sidebar = document.querySelector('.sidebar');
    let sidebarUl = document.querySelector('.ul');
    let sidebarLinks = document.querySelectorAll('.links');

toggleButton.addEventListener('click', function () {
    


    sidebarUl.classList.toggle('visible');
    sidebar.classList.toggle('width');

    let arrayLength = sidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
        sidebarLinks[i].classList.toggle('opacity');

    }
});

let home = document.querySelector('.home');
let purple = document.querySelector('.purple');
let orange = document.querySelector('.orange');
let green = document.querySelector('.green');
let blue = document.querySelector('.blue');


green.addEventListener('click', function(){
    document.querySelector('body').classList.add('green');
    document.querySelector('.sidebar').classList.add('green');
    document.querySelector('.btn-toggle').classList.add('green');
    document.querySelector('body').classList.remove('purple','home','orange','blue');
    document.querySelector('.sidebar').classList.remove('purple','home','orange','blue');
    document.querySelector('.btn-toggle').classList.remove('purple','home','orange','blue');
    document.querySelector('.title').innerHTML = 'Green';

    sidebarUl.classList.remove('visible');
    sidebar.classList.remove('width');

    let arrayLength = sidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
        sidebarLinks[i].classList.remove('opacity');
    }
});
purple.addEventListener('click', function(){
    document.querySelector('body').classList.add('purple');
    document.querySelector('.sidebar').classList.add('purple');
    document.querySelector('.btn-toggle').classList.add('purple');
    document.querySelector('body').classList.remove('green','home','orange','blue');
    document.querySelector('.sidebar').classList.remove('green','home','orange','blue');
    document.querySelector('.btn-toggle').classList.remove('green','home','orange','blue');
    document.querySelector('.title').innerHTML = 'Purple';

    sidebarUl.classList.remove('visible');
    sidebar.classList.remove('width');

    let arrayLength = sidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
        sidebarLinks[i].classList.remove('opacity');
    }
});
orange.addEventListener('click', function(){
    document.querySelector('body').classList.add('orange');
    document.querySelector('.sidebar').classList.add('orange');
    document.querySelector('.btn-toggle').classList.add('orange');
    document.querySelector('body').classList.remove('purple','home','green','blue');
    document.querySelector('.sidebar').classList.remove('purple','home','green','blue');
    document.querySelector('.btn-toggle').classList.remove('purple','home','green','blue');
    document.querySelector('.title').innerHTML = 'Orange';

    sidebarUl.classList.remove('visible');
    sidebar.classList.remove('width');

    let arrayLength = sidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
        sidebarLinks[i].classList.remove('opacity');
    }
});
blue.addEventListener('click', function(){
    document.querySelector('body').classList.add('blue');
    document.querySelector('.sidebar').classList.add('blue');
    document.querySelector('.btn-toggle').classList.add('blue');
    document.querySelector('body').classList.remove('purple','home','green','orange');
    document.querySelector('.sidebar').classList.remove('purple','home','green','orange');
    document.querySelector('.btn-toggle').classList.remove('purple','home','green','orange');
    document.querySelector('.title').innerHTML = 'Blue';

    sidebarUl.classList.remove('visible');
    sidebar.classList.remove('width');

    let arrayLength = sidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
        sidebarLinks[i].classList.remove('opacity');
    }
});
    
home.addEventListener('click', function(){
    document.querySelector('body').classList.add('home');
    document.querySelector('.sidebar').classList.add('home');
    document.querySelector('.btn-toggle').classList.add('home');
    document.querySelector('body').classList.remove('purple','orange','green','blue');
    document.querySelector('.sidebar').classList.remove('purple','orange','green','blue');
    document.querySelector('.btn-toggle').classList.remove('purple','orange','green','blue');
    document.querySelector('.title').innerHTML = 'Choose your background-color!';

    sidebarUl.classList.remove('visible');
    sidebar.classList.remove('width');

    let arrayLength = sidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
        sidebarLinks[i].classList.remove('opacity');
    }
});
    

