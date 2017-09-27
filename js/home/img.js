/*定时轮播3D打印图标*/
 setInterval(changeImg,1000);
  var array = new Array(); 
  var index = 0; 
  var array = new Array("img/home/3DprintA.png","img/home/3DprintB.png","img/home/3DprintC.png","img/home/3DprintD.png"); 
  function changeImg() { 
   var imgs = document.getElementById("imgs"); 
   if (index == array.length-1) { 
    index = 0; 
   } else { 
    index += 1; 
     } 
   imgs.src = array[index]; 
  } 