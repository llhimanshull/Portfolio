// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  loader();
  horizontalScroll("scroll-horizontal-wrapper-1");
  horizontalScroll("scroll-horizontal-wrapper-2");
  horizontalScroll("scroll-horizontal-wrapper-3");
  cursor();
  movingdiv("move-1", 0, -400, 8);
  movingdiv("move-2", 0, 400, 8);
  movingicons();
  achievementMov([
    { id: "achievement-items-1", speed: 20 },
    { id: "achievement-items-2", speed: 20 },
    { id: "achievement-items-3", speed: 20 },
    { id: "achievement-items-4", speed: 22 },
    { id: "achievement-items-5", speed: 22 },
    { id: "achievement-items-6", speed: 22 }
  ]);
});



const horizontalScroll = (wrapperClass) => {
  const wrapper = document.querySelector(`.${wrapperClass}`);

  if (!wrapper) return;

  gsap.to(wrapper, {
    x: () => -(wrapper.scrollWidth - window.innerWidth),
    ease: "none",
    scrollTrigger: {
      trigger: wrapper,
      start: "top top",
      end: () => "+=" + (wrapper.scrollWidth - window.innerWidth),
      pin: true,
      scrub: 1,
      anticipatePin: 1,
    },
  });
};

const number = () => {
  alert("Phone No : +91 7756072543");
};

const loader = function (callback) {
  gsap.to(".wrapper span", {
    autoAlpha: 1,
    duration: 1.5,
    stagger: 0.1,
    ease: "power2.out"
  });

  gsap.to("#loader", {
    y: "-100vh",
    delay: 2.5,
    duration: 1.5,
    ease: "power2.inOut",
    onComplete: () => {
      document.getElementById("loader").style.display = "none";
      document.body.style.overflow = "auto";
      callback();
    }
  });
};

const cursor = () => {
  const cursor = document.querySelector('.cursor');
  const outerCircle = document.querySelector('.outer-circle');
  const innerCircle = document.querySelector('.inner-circle');

  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  gsap.ticker.add(() => {
    gsap.to(cursor, {
      x: mouseX,
      y: mouseY,
      duration: 1,
      ease: 'power3.out',
    });

    gsap.to(innerCircle, {
      x: 0,
      y: 0,
      duration: 100,
      ease: 'power3.out',
    });
  });
};

const movingdiv = (idName, rightleft, updown, time) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(`#${idName}`, {
    x: rightleft,
    y: updown,
    ease: "expo.in",
    duration: time,
    scrollTrigger: {
      trigger: `.wrapper-right`,
      start: "top 0%",
      end: "bottom 20%",
      scrub: true,
      markers: false
    }
  });
};

const movingicons = () => {
  const container = document.getElementById("move-1");
  const icons = document.querySelectorAll(".skill-icon");

  function getContainerSize() {
    return {
      width: container.clientWidth,
      height: container.clientHeight
    };
  }

  icons.forEach(icon => {
    const iconSize = icon.offsetWidth;

    gsap.set(icon, {
      x: Math.random() * (getContainerSize().width - iconSize),
      y: Math.random() * (getContainerSize().height - iconSize)
    });

    const moveIcon = () => {
      const { width, height } = getContainerSize();

      gsap.to(icon, {
        x: Math.random() * (width - iconSize),
        y: Math.random() * (height - iconSize),
        rotation: `+=${Math.random() * 360 - 180}`,
        duration: 2 + Math.random() * 2,
        ease: "power1.inOut",
        onComplete: moveIcon
      });
    };

    moveIcon();

    icon.addEventListener("mouseenter", () => {
      gsap.to(icon, {
        x: `+=${Math.random() * 100 - 50}`,
        y: `+=${Math.random() * 100 - 50}`,
        rotation: `+=${Math.random() * 90 - 45}`,
        duration: 2,
        ease: "power2.out"
      });
    });
  });
};


const achievementMov = (itemsWithSpeeds) => {

  itemsWithSpeeds.forEach(({ id, speed }) => {
    const item = document.getElementById(id);

    const animation = gsap.fromTo(
      item,
      { x: "100vw" },
      {
        delay: 3,
        x: "-100vw",
        duration: speed,
        ease: "power1.in",
        repeat: -1,
        repeatDelay: 2
      }
    );
    item.addEventListener("mouseenter", () => animation.pause());
    item.addEventListener("mouseleave", () => animation.resume());
  });
};

function projectContainer(containerId) {

  const allproject = document.querySelectorAll(".projectDetails");

  allproject.forEach( project => {
    project.style.display = "none";
    project.style.zIndex = "0";  // Reset z-index for all
  });

  const container = document.getElementById(containerId);
  container.style.display = "flex";
  container.style.zIndex="10";

  gsap.from(container, {
    y: "100vh",
    ease: "power.inOut",
    duration: 0.6,
    onComplete: () => {
      console.log('Animation complete!');
    }
  });


}

