
var $wrap = $('#hover-img , #hover-img-2'),
    lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 12;

function animate() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;

  $wrap.css({
    'transform': 'translate(-50%, -50%) perspective(600px) rotateY(' + -x + 'deg) rotateX(' + y + 'deg)'
  });
  window.requestAnimationFrame(animate);
}

$(window).on('mousemove click', function(e) {
  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (12 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;
});

animate();


const items = document.querySelectorAll('.item')

const expand = (item, i) => {
  items.forEach((it, ind) => {
    if (i === ind) return
    it.clicked = false
  })
  gsap.to(items, {
    width: item.clicked ? '15vw' : '8vw',
    duration: 2,
    ease: 'elastic(1, .6)'
  })
  
  item.clicked = !item.clicked
  gsap.to(item, {
    width: item.clicked ? '42vw' : '15vw',
    duration: 2.5,
    ease: 'elastic(1, .3)'
  })
}

items.forEach((item, i) => {
  item.clicked = false
  item.addEventListener('click', () => expand(item, i))
})

// Create an intersection observer instance
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      if (!entry.target.classList.contains('line-animation')) {
        entry.target.classList.add('line-animation');
      }
    } else {
      if (entry.target.classList.contains('line-animation')) {
        entry.target.classList.remove('line-animation');
        entry.target.style.animation = 'none';
        setTimeout(function() {
          entry.target.style.animation = '';
        }, 10);
      }
    }
  });
}, { threshold: 0 });




// Select the element to observe
var scrollingText1 = document.querySelector('.line-1');
var scrollingText2 = document.querySelector('.line-2');
var scrollingText3 = document.querySelector('.line-3');
var scrollingText4 = document.querySelector('.line-4');
var scrollingText5 = document.querySelector('.line-5');
// Start observing the element
observer.observe(scrollingText1);
observer.observe(scrollingText2);
observer.observe(scrollingText3);
observer.observe(scrollingText4);
observer.observe(scrollingText5);



function navigateToSlide(slideNumber) {
  // Hide all slides
  var slides = document.getElementsByClassName('slide');
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  
  // Show the selected slide
  var selectedSlide = document.querySelector('.slide-' + slideNumber);
  if (selectedSlide) {
    selectedSlide.style.display = 'block';
  }
}