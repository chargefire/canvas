new BackgroundLayer backgroundColor:"#669cf5"
container=new Layer
    width:1000,height:1000
    backgroundColor:"transparent"
container.center();

circleBg = new Layer
    width:480,height:480
    borderRadius:"50%"
    opacity:.5
    scale:0
    backgroundColor:"#ffffff"
    superLayer:container
circleBg.center()

sun= new Layer
    width:360,height:360
    scale:0
    opacity:0
    image:"images/sun.png"
    superLayer:container
sun.center()

cloud =new Layer
    x:sun.midX-50,y:sun.midY
    width:204,height:122
    scale:0
    image:"images/cloud.png"
    superLayer:container
cloud.center()

animateBg = new Animation
	  layer: circleBg
	  properties:
		    scale: 2
		    opacity: 0
	  curve: "linear"
	  time: .5

animateSun = new Animation
    layer: sun
    properties:
        scale: 1
        opacity: 1

animateSunRotate=new Animation
    layer:sun
    properties:
        rotation:315
    curve:"ease-out"
    time:2

animateCloudScale = new Animation
    layer:cloud
    properties:
        scale:1

animateCloudMove = new Animation
    layer:cloud
    properties:
        x:sun.midX
    delay:0.2

cloud.originX = 0
cloud.originY = 1

Framer.Defaults.Animation =
    curve: "spring(80, 12, 0)"

animateBg.start()
animateSun.start()
animateSunRotate.start()
animateCloudScale.start()
animateCloudMove.start()

animateSunRotate.on "end", ->
    container.animate
        properties:
            scale:0
        curve:"cubic-bezier(0.6,-0.28,0.735,0.045)"
        time:.6
