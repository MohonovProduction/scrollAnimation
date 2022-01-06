const app = new Vue({
    el: '#app',
    data: {
        classList: {
            animated: true,
        }
    },
    created() {

    }
})

const controller = new ScrollMagic.Controller();

const name = document.querySelector('.my-name__name')
name.classList.add('my-name__name--animated')

const nameTl = new TimelineMax()
const nameScene = new ScrollMagic.Scene({
    triggerElement: '.my-name',
    triggerHook: 'onLeave',
    duration: '5000'
})

nameTl.from('.my-name__title', 1, { opacity: 0 })
nameTl.from('.my-name__name', 8, { x: '100vw' })
nameTl.to('.my-name__title', 1, { opacity: 0 }, '-=5')
nameScene.setPin('.my-name')
nameScene.setTween(nameTl)

const skillsTl = new TimelineMax()
const skillsScene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 'onLeave',
    duration: '15000'
})

skillsTl.from('#skills__title', 1, { opacity: 0, y: 100 })

skillsTl.to('#skills', 1, { x: '-100vw' }, '+=2')

skillsTl.from('#skill-front-end__title', 1, { opacity: 0, scale: 0, delay: 2 })
skillsTl.from('#skill-front-end__list', 1, { opacity: 0, x: 20, delay: 2 })

skillsTl.to('#skills', 1, { x: '-200vw' }, '+=2')

skillsTl.to('#skills-wrapper', 1, { 'background-color': 'hsl(188, 45%, 19%)', color: 'hsl(188, 0%, 100%)' })
skillsTl.from('#skill-back-end__title', 1, { opacity: 0, skewX: '90deg' })
skillsTl.from('#skill-back-end__list', 1, { opacity: 0, x: 20 })
skillsTl.to('#skill-back-end', 1, { opacity: 0, skewY: '90deg', delay: 2 })

skillsTl.to('#skills', 1, { x: '-300vw' }, '+=2')

skillsTl.to('#skills-wrapper', 1, { 'background-color': 'hsl(188, 0%, 100%)', color: 'hsl(188, 45%, 19%)' })
skillsTl.from('#skill-uxui__title', 1, { scale: 10, opacity: 0 })
skillsTl.from('#skill-uxui__description', 1, { y: 20, opacity: 0 })
skillsTl.from('.square', 1, { opacity: 0 }, '+=2')
skillsScene.setPin('#skills')
skillsScene.setTween(skillsTl)

const contactsTl = new TimelineMax()
const contactsScene = new ScrollMagic.Scene({
    triggerElement: '.contacts',
    triggerHook: 'onLeave',
    duration: '1000'
})

contactsTl.from('#contacts-title', 1, { x: -20, opacity: 0 })
const elements = document.querySelectorAll('.contact__link')
for (let el of elements) {
    contactsTl.from(`#${el.id}`, 1, { x: -20, opacity: 0 }, '-=0.9')
}

contactsScene.setPin('.contacts')
contactsScene.setTween(contactsTl)

controller.addScene([nameScene, skillsScene, contactsScene])
