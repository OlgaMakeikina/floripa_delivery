document.addEventListener("DOMContentLoaded", function() {
    const availabilityBox = document.getElementById('availability_box');
    const closeBtn = document.getElementById('close_btn');
    const openBtn = document.getElementById('open_btn');

   
    gsap.to(availabilityBox, {
        duration: 1,  
        delay: 1.5, 
        right: "10px",  
        ease: "power3.out"  
    });

   
    closeBtn.addEventListener('click', function() {
        gsap.to(availabilityBox, {
            duration: 0.5,
            right: "-300px",
            ease: "power3.inOut"
        });
        openBtn.style.display = 'block'; 
    });


    openBtn.addEventListener('click', function() {
        gsap.to(availabilityBox, {
            duration: 0.5,
            right: "10px",
            ease: "power3.inOut"
        });
        openBtn.style.display = 'none'; 
    });

   
    window.addEventListener("scroll", function() {
        if (availabilityBox.style.right !== "-300px") { 
            gsap.to(availabilityBox, {
                duration: 0.5,
                right: "10px",
                ease: "power3.out"
            });
        }
    });
});


const back = document.querySelector('#back');
const next = document.querySelector('#next');
const photos = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
let i=0;
next.addEventListener('click', () => {
    i++;
    if (i > photos.length-1) {
        i=0;
    }
    document.querySelector('#pictures').src=photos[i];
    })
back.addEventListener('click', () => {
    i--;
    if (i<0) {
        i = photos.length-1;
    }
    document.querySelector('#pictures').src=photos[i];
})
