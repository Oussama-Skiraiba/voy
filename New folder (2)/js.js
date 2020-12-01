let btn = document.getElementById('btn'),
    nav = document.getElementById('nav');

btn.addEventListener('click',()=>{
    nav.classList.toggle('activ');
    btn.classList.toggle('activ');
});

let tog = document.getElementById('toggle');

tog.addEventListener('change', (e) => {
	document.body.classList.toggle('dark', e.target.checked);
});
