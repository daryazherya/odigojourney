// header-nav

(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
    if (this.pageYOffset >= 50 ){
         header.classList.add('header-active');
        } else { 
            header.classList.remove('header-active');
        }
    };
}());

// burger-menu

(function () {
    const burgerItem = document.querySelector('.header-burger');
    const menu = document.querySelector('.header-nav');
    const menuCloseItem =document.querySelector('.header-nav-close');

    
    burgerItem.addEventListener('click' ,() =>{
        menu.classList.add('header-nav-active')

    } );
    menuCloseItem.addEventListener('click' ,() =>{
        menu.classList.remove('header-nav-active');
    });
    


}());

// video

const videoFile = document.querySelector('.video-player');
videoFile.addEventListener('click',function () {
    if(videoFile.paused) {
        videoFile.play();

    } else {
        videoFile.pause();
    }
});

// Scroll 

(function () {
    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

        };

        const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());