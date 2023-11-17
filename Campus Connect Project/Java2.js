/* SLIDE IMAGE */





let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})






let autoSlideInterval;

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').appendChild(items[0]);
    }, 8000); // Change slide every 3 seconds
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Add an auto-slide on page load
startAutoSlide();

// Stop auto-slide on manual navigation (next/prev buttons)
next.addEventListener('click', function(){
    stopAutoSlide();
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
    startAutoSlide(); // Restart the auto-slide after a manual navigation
});

prev.addEventListener('click', function(){
    stopAutoSlide();
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
    startAutoSlide(); // Restart the auto-slide after a manual navigation
});







  function toggleReadMore(button) {
    var parentCard = button.closest('.post-card');
    var dots = parentCard.querySelector('.dots');
    var moreText = parentCard.querySelector('.more-text');
  
    if (dots.style.display === "none" || dots.style.display === "") {
      dots.style.display = "inline";
      button.innerHTML = "READ MORE";
      moreText.style.display = "none";
      button.style.color = "whitesmoke";
      button.style.fontWeight = "600";
    } else {
      dots.style.display = "none";
      button.innerHTML = "READ LESS";
      moreText.style.display = "inline";
      button.style.color = "whitesmoke";
      button.style.fontWeight = "600";
    }
  }
  


 
  















  document.querySelector('.hamburger').addEventListener('click', function () {
    const lowerNav = document.querySelector('.lower-nav');
    const screenWidth = window.innerWidth;
  
    if (screenWidth < 770) {
      lowerNav.style.display = lowerNav.style.display === 'none' || lowerNav.style.display === '' ? 'block' : 'none';
    } else {
      // If screen size is greater than or equal to 770 pixels, make lower nav visible in the nav section
      lowerNav.style.display = 'flex';
    }
  });
  
  // Handle resizing
  window.addEventListener('resize', function () {
    const lowerNav = document.querySelector('.lower-nav');
    const screenWidth = window.innerWidth;
  
    if (screenWidth >= 770) {
      // If screen size is greater than or equal to 770 pixels, make lower nav visible in the nav section
      lowerNav.style.display = 'flex';
    } else {
      // If screen size is less than 770 pixels, maintain the previous logic
      lowerNav.style.display = 'none';
    }
  });
  