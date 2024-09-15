console.log('create the new project');

let currentIndex = 0;

function moveCarousel(direction) {
    const items = document.querySelectorAll('.crocel-item-intro');
    const totalItems = items.length;

    // Hide the current item
    items[currentIndex].classList.remove('active');

    // Calculate the next index
    currentIndex = (currentIndex + direction + totalItems) % totalItems;

    // Show the next item
    items[currentIndex].classList.add('active');

    // Update the carousel position
    const carouselInner = document.querySelector('.crocel-intro');
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

ScrollReveal().reveal(".whole-home-content",{
    duration: 1500,
    delay: 300,
    distance: '20px',
    origin: 'top',
    scale: 1.1,
    opacity: 0.5,
    easing: 'ease-out'
})
ScrollReveal().reveal(".crocel-home-content",{
    origin: 'top',           // Animates from the right
    distance: '100px',         // Distance of the reveal
    duration: 2200,            // Duration of the animation in milliseconds
    delay: 500,                // Delay before animation starts
    easing: 'cubic-bezier(0.5, 0, 0.5, 1)', // Easing function for the animation
    opacity: 0,                // Start with opacity 0 (optional)
    scale: 0.9                 // Start with scale 0.9 (optional)
})
ScrollReveal().reveal(".crocel-home-intro",{
    origin: 'left',           // Animates from the left
  distance: '100px',        // Distance of the reveal
  duration: 2500,           // Duration of the animation in milliseconds
  delay: 500,               // Delay before animation starts
  easing: 'cubic-bezier(0.5, 0, 0.5, 1)', // Easing function for the animation
  opacity: 0,               // Start with opacity 0 (optional)
  scale: 0.9                // Start with scale 0.9 (optional)
})
ScrollReveal().reveal("#info-item-one",{
    origin: 'right',           // Animates from the right
    distance: '100px',         // Distance of the reveal
    duration: 2200,            // Duration of the animation in milliseconds
    delay: 700,                // Delay before animation starts
    easing: 'cubic-bezier(0.5, 0, 0.5, 1)', // Easing function for the animation
    opacity: 0,                // Start with opacity 0 (optional)
    scale: 0.9  
})
ScrollReveal().reveal("#info-item-two",{
    origin: 'left',           // Animates from the right
    distance: '100px',         // Distance of the reveal
    duration: 2400,            // Duration of the animation in milliseconds
    delay: 700,                // Delay before animation starts
    easing: 'cubic-bezier(0.5, 0, 0.5, 1)', // Easing function for the animation
    opacity: 0,                // Start with opacity 0 (optional)
    scale: 0.9  
})
ScrollReveal().reveal("#info-item-three",{
    origin: 'bottom',           // Animates from the right
    distance: '100px',         // Distance of the reveal
    duration: 2800,            // Duration of the animation in milliseconds
    delay: 800,                // Delay before animation starts
    easing: 'cubic-bezier(0.5, 0, 0.5, 1)', // Easing function for the animation
    opacity: 0,                // Start with opacity 0 (optional)
    scale: 0.9  
})
ScrollReveal().reveal("#techinfoone",{
    origin: 'left',           // Animates from the right
    distance: '100px',         // Distance of the reveal
    duration: 2800,            // Duration of the animation in milliseconds
    delay: 800,                // Delay before animation starts
    easing: 'cubic-bezier(0.5, 0, 0.5, 1)', // Easing function for the animation
    opacity: 0,                // Start with opacity 0 (optional)
    scale: 0.9  
})
ScrollReveal().reveal("#techinfotwo",{
    origin: 'right',           // Animates from the right
    distance: '100px',         // Distance of the reveal
    duration: 2800,            // Duration of the animation in milliseconds
    delay: 800,                // Delay before animation starts
    easing: 'cubic-bezier(0.5, 0, 0.5, 1)', // Easing function for the animation
    opacity: 0,                // Start with opacity 0 (optional)
    scale: 0.9  
})
ScrollReveal().reveal("#techinfothree",{
    origin: 'top',           // Animates from the right
    distance: '100px',         // Distance of the reveal
    duration: 2800,            // Duration of the animation in milliseconds
    delay: 800,                // Delay before animation starts
    easing: 'cubic-bezier(0.5, 0, 0.5, 1)', // Easing function for the animation
    opacity: 0,                // Start with opacity 0 (optional)
    scale: 0.9  
})
ScrollReveal().reveal(".design-home",{
    origin: 'right',           // Animates from the right
    distance: '100px',         // Distance of the reveal
    duration: 2800,            // Duration of the animation in milliseconds
    delay: 800,                // Delay before animation starts
    easing: 'cubic-bezier(0.5, 0, 0.5, 1)', // Easing function for the animation
    opacity: 0,                // Start with opacity 0 (optional)
    scale: 0.9  
})
ScrollReveal().reveal(".filter-home-content",{
    origin: 'left',           // Animates from the right
    distance: '100px',         // Distance of the reveal
    duration: 2800,            // Duration of the animation in milliseconds
    delay: 800,                // Delay before animation starts
    easing: 'cubic-bezier(0.5, 0, 0.5, 1)', // Easing function for the animation
    opacity: 0,                // Start with opacity 0 (optional)
    scale: 0.9  
})
ScrollReveal().reveal(".point-home-content",{
    origin: 'bottom',           // Animates from the right
    distance: '100px',         // Distance of the reveal
    duration: 2800,            // Duration of the animation in milliseconds
    delay: 800,                // Delay before animation starts
    easing: 'cubic-bezier(0.5, 0, 0.5, 1)', // Easing function for the animation
    opacity: 0,                // Start with opacity 0 (optional)
    scale: 0.9  
})
ScrollReveal().reveal(".end-content",{
    origin: 'top',           // Animates from the right
    distance: '100px',         // Distance of the reveal
    duration: 2800,            // Duration of the animation in milliseconds
    delay: 800,                // Delay before animation starts
    easing: 'cubic-bezier(0.5, 0, 0.5, 1)', // Easing function for the animation
    opacity: 0,                // Start with opacity 0 (optional)
    scale: 0.9  
})