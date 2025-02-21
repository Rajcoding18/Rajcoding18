// let buttons = document.querySelector('button');
// buttons.addEventListener('click', function(){
//     function getotp(){

//         let digit = '0123456789';
//         let otp = '';
//         let len = digit.length;
//          for(let i=0; i<4; i++){
//             otp += digit[Math.floor(Math.random() * len)];

//          }
//          document.querySelector('.contain').innerHTML = otp
//         }

//         console.log(getotp());
// })



// let button = document.querySelector('button');
// button.addEventListener('click', function(){
//     let digit = '0123456789';
//     let otp = '';
//     for(let i=0; i<6; i++){
//         otp += digit[Math.floor(Math.random() * digit.length)]
//     }
//     console.log(otp)
//     document.querySelector('.contain').innerHTML = otp
// })



























let button = document.querySelector('button');
button.addEventListener('click', function(){
    let digit = '0123456789';
    let otp = ''
    for (let i=0; i<4; i++) {
        otp += digit[Math.floor(Math.random() * digit.length)]
        
    }
    console.log(otp);
    document.querySelector('.contain').innerHTML = otp;
    
})