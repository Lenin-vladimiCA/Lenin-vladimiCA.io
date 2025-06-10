let texto = document.querySelector('.about'); // Assuming your class name is 'about'

let opacityValue = 0.0; 

texto.addEventListener('click', function() {
  // Toggle opacity smoothly (optional)
  opacityValue = (opacityValue === 0) ? 1.0 : 0.0; // Ternary operator for toggling

  // Set opacity using the stored value
  texto.style.opacity = opacityValue;
});



