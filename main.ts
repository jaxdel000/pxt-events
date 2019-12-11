let chrerycake = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 8 5 f f f . . . . 
. . . f f f 8 5 2 5 f f f . . . 
. . f f f 5 8 5 5 2 5 f f f . . 
. . f f 5 5 8 8 2 5 2 5 5 f . . 
. . f 5 5 f f f f f f 2 5 f . . 
. . f f f f 5 5 5 5 f f f f . . 
. f f 8 f b f 5 5 f b f 5 f f . 
. f 8 5 2 1 f d d f 1 2 5 5 f . 
. . f f f f d d d d d 5 2 f . . 
. f d d d d f f 5 5 5 5 f . . . 
. f b b b b f 5 8 8 8 f 5 5 . . 
. f b b b b f 5 5 8 8 f d 5 . . 
. . f c c f 5 5 5 5 8 f 5 5 . . 
. . . f f f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
chrerycake.setPosition(86, 120)
controller.moveSprite(chrerycake, 100, 100)
let MessageDad = 1
chrerycake.say("okay!")
let otherperson = sprites.create(img`
. . . . . . 5 . 5 . . . . . . . 
. . . . . f 5 5 5 f f . . . . . 
. . . . f 1 5 2 5 1 3 f . . . . 
. . . f 1 3 3 3 3 3 1 3 f . . . 
. . . f 3 3 f f f f 3 1 f . . . 
. . . f 3 f f d d f f 3 f . . . 
. . f 3 f d f d d f d f 3 f . . 
. . f 3 f d 3 d d 3 d f 3 f . . 
. . f 3 3 f d d d d f 3 3 f . . 
. f 3 3 f 3 f f f f 3 f 3 3 f . 
. . f f d 3 5 3 3 5 3 d f f . . 
. . f d d f 3 5 5 3 f d d f . . 
. . . f f 3 3 3 3 3 3 f f . . . 
. . . f 3 3 5 3 3 5 3 3 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
chrerycake.setPosition(80, 88)
MessageDad = 1
otherperson.say("begin your quest knight")
let knight = sprites.create(img`
. . . . f f f f f f . . . . . . . . . . . . . . 
. . f f 5 5 5 5 f 2 f . . . . . . . . . . . . . 
. f f 5 5 5 5 f 2 2 2 f . . . . . . . . . . . . 
. f 5 5 5 f f 5 5 5 5 f . . . . . . . . . . . . 
. f f f f 5 5 2 2 2 2 5 f . . . . . . . . . . . 
. f 5 2 2 2 f f f f 5 2 f . . . . . . . . . . . 
f f f f f f f 5 5 5 f f f . . . . . . . . . . . 
f f 5 4 4 5 b f 4 4 5 5 f . . . . . . . . . . . 
f 5 5 4 d 4 1 f d d 5 f . . . . . . . . . . . . 
. f 5 5 5 4 d d d d f . . . . . . . . . . . . . 
. . f d d 5 4 4 4 e f . . . . . . . . . . . . . 
. . f d d 5 2 2 c c c . . . . . . . . . . . . . 
. . . 5 5 f 2 2 c d c . . . . . . . . . . . . . 
. . . f 4 4 4 4 c d d c . . . . . . . . . . . . 
. . . . f f f f f c d d c . . . . . . . . . . . 
. . . . . f f f . . c d d c . . . . . . . . . . 
. . . . . . . . . . . c d c . . . . . . . . . . 
. . . . . . . . . . . . c c . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
knight.setPosition(34, 88)
MessageDad = 1
knight.say("yes begin")
let other_knight = sprites.create(img`
. . . . . . . . . . . . . . f f f f f f . . . . 
. . . . . . . . . . . . . f 2 f 8 8 8 8 f f . . 
. . . . . . . . . . . . f 2 2 2 f 8 8 8 8 f f . 
. . . . . . . . . . . . f 8 8 8 8 f f 8 8 8 f . 
. . . . . . . . . . . f 8 2 2 2 2 8 8 f f f f . 
. . . . . . . . . . . f 2 8 f f f f 2 2 2 8 f . 
. . . . . . . . . . . f f f 8 8 8 f f f f f f f 
. . . . . . . . . . . f 8 8 4 4 f b 8 4 4 8 f f 
. . . . . . . . . . . . f 8 d d f 1 4 d 4 8 8 f 
. . . . . . . . . . . . . f d d d d 4 8 8 8 f . 
. . . . . . . . . . . . . f 8 4 4 4 8 d d f . . 
. . . . . . . . . . . . . c c c 2 2 8 d d f . . 
. . . . . . . . . . . . . c d c 2 2 f 8 8 . . . 
. . . . . . . . . . . . c d d c 4 4 4 4 f . . . 
. . . . . . . . . . . c d d c f f f f f . . . . 
. . . . . . . . . . c d d c . . f f f . . . . . 
. . . . . . . . . . c d c . . . . . . . . . . . 
. . . . . . . . . . c c . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
other_knight.setPosition(125, 88)
MessageDad = 1
other_knight.say("begin knight")
let ball = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . 4 4 4 5 5 4 4 4 . . . . 
. . . 3 3 3 3 4 4 4 4 4 4 . . . 
. . 4 3 3 3 3 f f f 1 1 4 4 . . 
. . 3 3 3 3 3 f f f 1 1 5 4 . . 
. 4 3 3 3 3 f f f f f 5 5 4 4 . 
. 4 3 3 3 f f f 4 4 4 4 5 4 4 . 
. 4 4 3 3 f f 4 4 4 4 4 4 4 4 . 
. 4 f 3 3 f f 4 4 4 4 4 4 4 4 . 
. . 4 f 3 3 f 4 4 4 4 4 f 4 . . 
. . 4 f f 3 f f 4 4 4 f 4 4 . . 
. . . 4 f f f f f f f f 4 . . . 
. . . . 4 4 f f f f 4 4 . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
game.onUpdate(function () {
    ball.y += controller.dx(110)
    ball.x += controller.dy(110)
})
