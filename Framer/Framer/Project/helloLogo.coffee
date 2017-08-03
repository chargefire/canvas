# Prototyping with Framer
# 创建背景图层
new BackgroundLayer backgroundColor: "#151517"
# 使用Framer logo创建一个图层
logo = new Layer
       width: 128
       height: 128
       image: "images/icon.png"

logo.center()

# 添加一个的状态（原始状态是'default'）
logo.states.add
     second:
          y: 200
          scale: 1.5
          rotation: 225
     third:
          y: 300
          scale: 0.5
          blur: 25
# 创建一个弹性动画
logo.states.animationOptions =
     curve: "spring(250,25,0)"
# 当点击时播放动画
logo.on Events.Click, ->
     logo.states.next()
