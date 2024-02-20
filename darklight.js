

// // ========================= dark/light mode ===================
 let body = document.querySelector('body');
let modeBtn = document.querySelector('button');
 let mode = 'light';
modeBtn.onclick = ()=>{

    if (mode==='light'){
        body.classList.add('dark')
         mode = 'dark';
    } else {
         body.classList.remove('dark')
        mode='light';
    } 
 }
let modeBtn1 = document.querySelector('button');
 let mode = 'dark';
modeBtn1.onclick = ()=>{

    if (mode==='dark'){
        body.classList.add('light')
         mode = 'light';
    } else {
         body.classList.remove('light')
        mode='dark';
    } 
 }

