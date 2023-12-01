var tl = gsap.timeline()


tl.from("h3",{
  y:-30,
  opacity:0,
  duration:0.8,
  delay:0.3,
  stagger:0.3
})
tl.from("h1",{
    x:-300,
    opacity:0,
    duration:0.8,
   
    stagger:0.4
})
tl.from("img",{
    rotate:200,
  duration:1,
  stagger:1,
  x:400,
  opacity:0
})
tl.from(" h4",{
    y:30,
    
    opacity:0,
    duration:0.8,
    delay:0.3,
    stagger:0.3
  })