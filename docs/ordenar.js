var flipbookEL = document.getElementById('flipbook');
ventana.addEventListener('resize', function (e) { 
  flipbookEL.style.width = ''; 
  flipbookEL.style.height = ''; 
  $(flipbookEL).turn('size', flipbookEL.clientWidth, flipbookEL.clientHeight); 
});
$(flipbookEL).turn({ 
    autoCenter: verdadero 
});