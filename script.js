let elemC = document.querySelector('#elem-con'),
 image = document.querySelector('#fixed-image'),
 cursor = document.querySelector('#cursor');



elemC.addEventListener('mouseenter', function(){
image.style.display = 'block'
})
elemC.addEventListener('mouseleave', function(){
image.style.display = 'none'
})


document.querySelectorAll('.elem').forEach((e)=>{
    e.addEventListener('mouseenter', function(){
        let scr = e.getAttribute('data-image')
        image.style.background = `url(${scr})`
    })
})

document.addEventListener('mousemove', (e)=>{
})
gsap.to('#cursor', {
    x: 300,
    y:333,
})