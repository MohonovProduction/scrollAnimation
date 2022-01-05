const controller = new ScrollMagic.Controller();

const name = document.querySelector('.my-name__name')
name.classList.add('my-name__name--animated')

const nameTl = new TimelineMax()
const nameScene = new ScrollMagic.Scene({
    triggerElement: ".my-name",
    triggerHook: "onLeave",
    duration: "1000"
})

nameTl.from('.my-name__name', 1000, { x: '100%' })
nameScene.setPin('.my-name')
nameScene.setTween(nameTl)

controller.addScene([nameScene])

