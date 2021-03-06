import './sass/main.scss';

// open all social links in new tab





// navigation
const tl = gsap.timeline({paused:true, reversed: true});
tl.to('.box', {height: '100vh', duration: .2, transformOrigin: 'bottom', stagger: .3})
tl.to('.mobile-logo', {opacity: '1'})
tl.to('.nav-main__content', {opacity: '1', visibility: 'visible', yPercent: -5, duration: .2, transformOrigin: 'bottom', stagger: .3})

const navIcon = document.querySelector('.nav-icon');
navIcon.onclick = function() {
    if (tl.reversed()) {
        this.classList.add('nav-anim')
        tl.play()
        document.body.classList.add('noScroll');
    } else {
        this.classList.remove('nav-anim')
        tl.reverse()
        document.body.classList.remove('noScroll');
    }
}

const allLinks = document.querySelectorAll('.list__item a');

allLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('noScroll');
        tl.reverse()
        navIcon.classList.remove('nav-anim')
    })
})

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}