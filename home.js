// const up1 = new up1('.up1', {
//     // Optional parameters
//     autoplay:{
//       delay:3000,
//       disableOnInteraction:false,
//     },
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.up1',
//       clickable: true,
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.up1-button-next',
//       prevEl: '.up1-button-prev',
//     },
  
//   });

const count=1;

setInterval(() => {
  document.getElementById('radio'+count).checked=true;
  count++;

  
  if (count>3){
    count=1;
  }
}, 3000);
  





function openimage(params) {
    document.getElementById('nav').style="display: block;";
    document.getElementById('open').style="display: none;";
    document.getElementById('close').style="display: block;";
    
}


function closeimage(params) {
    document.getElementById('nav').style="display: none;";
    document.getElementById('open').style="display: block;";
    document.getElementById('close').style="display: none;";
    
}
    



