let burger = sprites.create(img`
. . . . . . . . . . . c c c c c 6 6 6 6 6 . . . . . . . . . . . 
. . . . . . . . c c c 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . . 
. . . . . . c c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . 
. . . . . c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b . . . . . 
. . . . e 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b . . . . 
. . . e 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . 
. . e 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . 
. . e 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 e . . 
. e 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 e . 
. e 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 e . 
e 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 e 
e 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 e 
f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
. f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f . 
. e f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f e . 
. 8 6 f c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c c 6 8 8 
8 7 7 2 e f f c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c f c 2 2 7 7 8 
8 7 7 2 2 2 2 2 c c c c c c c c c c c c c c c c 2 2 2 2 6 6 7 8 
f 8 6 6 6 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 7 6 6 8 6 f 
f e f 8 6 6 6 7 7 7 6 6 6 6 7 7 7 7 7 7 6 6 6 7 7 7 7 f f f e f 
f b f f 8 7 7 7 6 8 f 8 6 7 7 7 7 7 7 6 6 6 7 7 6 f f f f f b f 
f b e f f e e f f f e f f 7 7 6 6 6 8 8 e f f e e e e f e b 6 f 
f 6 b f f f e f f e e e e e e e e e e e e e f e e e e e b b 6 e 
f 6 6 d d f f f f f e e e f f e f f e e e e e f f e e d b 6 6 e 
. c 6 6 d d d 6 e f f f f f f e e e e e f f f f 6 d d b 6 6 e . 
. f c 6 6 6 d d d d d d d d d d d d d d d d d d d b 6 6 6 e e . 
. . f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 e e . . 
. . . . f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 e e . . . . 
. . . . . . f f e 6 6 6 6 6 6 6 6 6 6 6 6 6 6 e e e . . . . . . 
. . . . . . . . . f f f f f f f c c c c c e e . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
burger.setPosition(15, 9)
let ice_cone = sprites.create(img`
. . . . . . . . . . . . 3 3 3 3 b b . . b b 3 3 3 3 3 . . . . . 
. . . . . . . . 3 b b 3 1 1 1 1 d 3 b 3 1 1 d 1 1 1 d 3 3 . . . 
. . . . . . . 3 b d d 1 1 1 1 1 d b d 1 1 d 1 1 1 1 1 1 1 3 . . 
. . . . . . . b d d d d 1 1 1 1 b d 1 1 d 1 1 1 d d 1 1 1 1 3 . 
. . . . . . 3 d 1 1 1 d d 1 1 1 b 1 1 d 1 1 1 d d 3 3 d 1 1 d 3 
. . . . . . 3 d 1 1 1 1 1 d d 1 d 1 1 d 1 1 1 d 1 1 d 3 3 1 1 3 
. . . . b b 3 d 1 1 1 1 1 1 d d 1 3 d d 1 1 1 d 1 d d 3 b 3 1 b 
. . . b 3 d 3 d d 1 1 1 1 1 1 d d 1 3 d d 1 1 d 1 d d d b b d b 
. . . 3 d d d 3 1 d 1 1 1 1 1 1 d d 1 3 3 d d d d d d d b . b . 
. . 3 1 1 1 1 1 d 1 d d d 1 1 1 1 d d 1 1 d d d d d d 3 3 . . . 
. . 3 1 1 1 1 1 1 d 1 1 1 d d 1 1 1 d d 1 1 1 1 d d 3 3 1 3 . . 
. . b d d d 1 1 1 1 d d d 1 1 d d 1 1 1 d 1 1 1 1 1 1 1 1 3 . . 
. . 3 1 1 d d d 1 1 1 d d d d 1 1 d d 1 1 d d d 1 1 1 1 d d b . 
. . 3 1 1 1 1 d d 1 1 1 d d d d 1 1 d d 1 1 1 d d d d d d d b . 
. . . b d 1 1 1 1 d 1 1 1 3 d d d 1 1 d d 1 1 1 1 1 1 1 d 3 b . 
. . . 4 d d 1 1 1 1 d 1 1 1 3 d d d 1 1 d d d 1 1 1 d 3 3 3 b . 
. . 4 d b d d d d 1 1 d 1 1 1 3 3 d d d d d d d d d d d d b . . 
. 4 d d b d d d d d 1 1 d 1 1 1 d 3 3 d d d d d d d d d 3 b . . 
. 4 d d d b 1 1 d d d 1 1 d d 1 1 1 d 3 3 3 d d d d 3 b b . . . 
. 4 d d 5 5 b 1 1 1 d 1 1 d d 1 1 1 1 1 d 3 3 3 3 b b b . . . . 
. 4 4 5 5 5 5 b 1 1 1 d 1 1 d d d d 1 1 1 1 1 1 d d b . . . . . 
. 4 4 5 5 5 5 5 b d 1 d 3 1 1 d d d d d d d d d d d 3 . . . . . 
. 4 5 4 5 5 5 5 5 b b 1 d 3 1 1 1 d d d d d d d 1 1 3 . . . . . 
. 4 5 5 4 5 5 5 5 5 5 b 3 3 3 d 1 1 1 1 1 1 1 1 1 3 . . . . . . 
4 5 5 5 5 4 5 5 5 5 5 5 b b b 3 3 d 1 1 1 1 1 d 3 3 . . . . . . 
4 d 5 5 5 5 4 5 5 5 5 5 5 5 d b b b 3 d 1 1 d 3 3 . . . . . . . 
4 d d 5 5 5 5 4 5 5 5 5 5 d d d d d 4 3 3 3 3 . . . . . . . . . 
4 5 d d 5 5 5 5 4 4 d d d d d d d 4 . . . . . . . . . . . . . . 
. 4 5 d d 5 5 5 5 d 4 4 d d d d 4 . . . . . . . . . . . . . . . 
. . 4 5 d d 5 5 d d d d 4 4 4 4 . . . . . . . . . . . . . . . . 
. . . 4 5 d d 5 5 4 4 4 . . . . . . . . . . . . . . . . . . . . 
. . . . 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
ice_cone.setPosition(47, 8)
let doughnut = sprites.create(img`
. . . . . . . . . . . . . . b b b b b b b . . . . . . . . . . . 
. . . . . . . . . . . b b 6 6 6 6 3 3 3 3 b a a . . . . . . . . 
. . . . . . . . . b b 3 3 6 7 7 7 6 3 3 3 6 6 3 a a . . . . . . 
. . . . . . . . b 3 3 3 3 3 8 8 8 3 3 3 3 8 9 6 3 3 a a . . . . 
. . . . . . . b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 8 9 6 3 3 a a . . . 
. . . . . . b 3 4 4 4 3 3 3 3 3 3 3 3 3 3 3 3 8 6 3 3 b a e . . 
. . . . . b 3 4 5 5 4 3 3 3 3 3 3 3 3 3 3 4 4 4 3 3 3 3 a e . . 
. . . . b 3 3 3 2 2 3 3 3 d d d d 3 3 3 3 4 5 5 2 3 3 d a e e . 
. . . b 3 d 3 3 3 3 3 3 d d 3 b b b b 3 3 3 2 2 3 3 3 d a b e . 
. . b 3 d 3 3 3 3 3 3 d 3 b b 3 3 b b 3 3 3 3 3 3 3 3 d a 4 e . 
. . b d 3 3 3 3 3 3 3 3 b 3 3 a a b 3 3 3 3 3 3 3 2 2 3 a 4 e e 
. b 3 d 3 6 6 3 3 3 3 b 3 3 a a b 3 3 3 6 6 3 3 2 4 4 2 b 4 e e 
. b d 3 b 9 8 3 3 3 3 a 3 a a 3 3 3 3 3 8 7 6 3 3 e e 3 b 4 e e 
. b d 6 9 8 3 3 3 3 b a a a 3 3 3 3 3 3 3 8 7 6 3 3 b b 4 b e e 
b 3 d 6 8 3 3 3 3 3 b b a 3 3 3 3 3 3 3 3 3 8 6 3 b a 4 4 e b e 
b d d 3 3 3 3 3 3 3 b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 4 4 b e b e 
a d d 6 6 6 6 3 3 3 3 3 3 2 2 3 3 3 3 6 6 3 3 3 b a 4 4 b b b e 
a d 6 7 7 7 6 3 3 3 3 3 2 4 4 2 3 3 6 9 8 3 d 3 a 4 4 4 b 4 e . 
a d d 8 8 8 b 3 3 3 3 3 3 e e 3 3 6 9 8 3 3 d 3 a 4 4 b 4 4 e . 
a d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 6 8 3 3 d 3 a 4 4 4 b 4 e . . 
a 3 d d 3 3 3 3 3 4 4 4 3 3 3 3 3 d d d d 3 a 4 4 4 b 4 4 e . . 
a b 3 3 d d d 3 2 5 5 4 3 3 3 3 d d 3 3 a a 4 4 4 b 4 4 e . . . 
. e a b b 3 d d 3 2 2 3 3 3 3 3 b a a a 4 4 4 4 b 4 4 e . . . . 
. e b a b b 3 d 3 3 3 d 3 3 b a a 4 4 4 4 4 3 b 4 4 e . . . . . 
. . e b a a b 3 d d d 3 a a a 4 4 4 4 4 3 3 b 4 4 e . . . . . . 
. . e e b b a a b 3 3 a 4 4 4 4 4 3 3 3 b 4 4 4 e . . . . . . . 
. . . e e e b b a a b 4 4 4 b 3 3 3 b 4 4 4 4 e . . . . . . . . 
. . . . e b e e e b b b b b b b b 4 4 4 4 e e . . . . . . . . . 
. . . . . e e b b b b 4 4 4 4 4 4 4 4 e e . . . . . . . . . . . 
. . . . . . . e e e b b b 4 4 4 e e e . . . . . . . . . . . . . 
. . . . . . . . . . e e e e e e . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
doughnut.setPosition(78, 8)
let cake = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . b b b . . . . . . . 
. . . . . . . . . . . . . . . . . . . . b b 3 3 3 b . . . . . . 
. . . . . . . . . . . . . . . . . b b b 3 3 3 d 3 3 b . . . . . 
. . . . . . . . . . . . . . . . b b 3 3 3 3 3 3 d 3 a . . . . . 
. . . . . . . . . . . . . . b b 3 3 3 3 2 e e e e d b a . . . . 
. . . . . . . . . . . . b b b 3 3 3 3 2 3 e e e 2 e 3 a . . . . 
. . . . . . . . . . b b d 3 3 3 3 3 3 e 2 2 2 2 2 e d 3 a . . . 
. . . . . . . b b b d d 3 3 3 3 3 3 3 e 2 2 2 2 2 e d d a . . . 
. . . . . . b b 3 d 3 3 3 3 3 3 3 3 3 b e 2 2 2 e b 3 d 3 a . . 
. . . b b b 3 d d 3 3 3 3 3 3 3 3 3 3 3 b e e e b 3 3 d 3 a . . 
. . b 3 d d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 d d a . . 
b b d d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 d d 3 a . 
b 3 3 d d d d d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 d 3 a . 
b b 3 3 3 3 3 3 3 d d d d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 d d a . 
b b b b b b b 3 3 3 d d 3 3 d d d d d d d d d d 3 3 3 3 d d b a 
b 5 5 5 5 3 b b b b b b 3 3 3 3 d d 3 3 3 3 3 d d d 3 3 d d 3 a 
b 5 5 5 5 5 5 5 5 5 5 5 3 b b b b b b b b 3 3 3 3 3 d d d d 3 a 
b d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d d d b a a a a a b 3 d 3 b a 
b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d d d d d d d b b 3 3 b a 
b 3 b b 3 5 5 5 5 5 5 5 5 5 5 d 5 5 5 5 d 5 5 d d d d d b b b a 
b 3 3 3 3 3 b b b 3 5 5 d d 5 5 5 5 5 d 5 5 5 d d d d d d b b a 
b 5 5 5 5 d 3 3 3 3 3 3 b b b 3 5 d d d d d d 5 5 d d d d b b a 
b 5 d 5 5 5 d d 5 5 5 3 3 3 3 b b b b b 3 d d d d d d d d b 3 a 
b 5 d 5 5 5 5 5 5 5 5 5 5 5 5 d d 3 3 3 3 b b b b b b 3 d b 3 a 
b d 5 d 5 5 5 5 5 5 d 5 5 5 5 5 d d 5 5 5 d d b b b b b b b 3 a 
b b b 5 5 d d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d d d d d d b b 3 a 
. . . b b b b d d 5 5 5 d d d 5 5 5 5 d d d d d d d d d d b 3 a 
. . . . . . . b b b b 5 5 5 5 5 5 d 5 d d d 5 d d d d d d b 3 a 
. . . . . . . . . . . b b b b 5 5 5 5 5 5 5 5 5 5 5 d d 5 3 3 a 
. . . . . . . . . . . . . . . b b b b d d d 5 d 5 5 d 5 b 3 b a 
. . . . . . . . . . . . . . . . . . . b b b b d d d d b 3 b a . 
. . . . . . . . . . . . . . . . . . . . . . . b b b a a a a . . 
`, SpriteKind.Player)
cake.setPosition(111, 8)
let pizza = sprites.create(img`
. . . . . . . . . . . . . b e e b b b b . . . . . . . . . . . . 
. . . . . . . . . . . . e e b b b b 4 b b . . . . . . . . . . . 
. . . . . . . . . . . . e b 3 4 4 b b 4 b b . . . . . . . . . . 
. . . . . . . . . . . . e 4 4 3 3 4 b b 4 b b . . . . . . . . . 
. . . . . . . . . . . . e b 4 3 3 3 4 4 b 4 b e . . . . . . . . 
. . . . . . . . . . . . 4 e b 4 3 3 4 4 4 4 4 b e . . . . . . . 
. . . . . . . . . . . b d 4 e b 4 3 3 3 3 3 4 4 b b . . . . . . 
. . . . . . . . . . b 4 5 5 d 4 4 4 3 3 3 3 4 4 4 b b . . . . . 
. . . . . . . . . . 4 d 5 5 5 5 d 4 4 4 3 3 3 4 4 4 b b . . . . 
. . . . . . . . . 4 5 5 5 5 5 5 d d 4 b 4 4 4 3 4 4 4 b e . . . 
. . . . . . . . b d 5 5 5 5 d 5 5 5 d 4 b b 4 4 4 4 4 4 e e . . 
. . . . . . . . b 5 5 d d d 6 6 5 5 5 5 b b 4 b 4 4 4 4 4 e e . 
. . . . . . . b d 5 5 5 5 6 7 7 6 5 5 5 5 4 e b b 4 4 4 4 4 e b 
. . . . . . . 4 3 2 2 2 5 5 8 8 5 5 5 5 5 d 4 e e b 4 4 b 4 e e 
. . . . . . b 4 2 2 3 3 2 d d d 5 5 5 2 2 2 d 4 e e b b b 4 b e 
. . . . . . b e 2 2 2 3 2 e d 5 5 5 2 2 3 3 2 d b 4 e b b b b e 
. . . . . b d e 2 2 2 2 2 e 5 5 5 e 2 2 2 3 2 e d d 4 b b b b e 
. . . . . b 5 2 e 2 2 2 e 3 5 5 5 e 2 2 2 2 2 e d d d 4 e b e e 
. . . . b d 5 5 2 e e e 3 5 5 5 5 2 e 2 2 2 e 3 5 5 5 4 4 e e e 
. . . . 6 6 5 d d 5 5 5 5 5 5 5 5 5 2 e e e 3 5 5 d d 4 d e e e 
. . . 6 7 7 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 5 5 4 d 4 e e 
. . . 4 8 8 5 2 2 2 5 5 5 d d d d 6 6 5 5 5 5 1 5 4 4 d 4 e e e 
. . b 4 5 5 2 2 3 3 2 5 5 5 d d 6 7 7 6 1 1 d 4 4 4 d d e e e . 
. . 4 d 5 2 2 2 2 3 2 e 5 5 5 5 5 8 8 1 d 4 4 d d d 4 e e e . . 
. b d d 5 e 2 2 2 2 2 e 5 5 5 1 1 5 1 1 4 d 5 4 d 4 e e . . . . 
. b 5 5 d 2 e 2 2 2 e 3 5 1 1 4 4 d 1 d 5 5 e e e e . . . . . . 
b d 5 d d d 2 e e e 3 d 4 4 4 5 5 5 d d 4 e . . . . . . . . . . 
b 5 5 5 1 1 5 d d d d 5 5 d 5 4 4 e e d e . . . . . . . . . . . 
4 5 1 1 d 4 4 4 d 5 5 4 4 e e . . . 4 d e . . . . . . . . . . . 
4 1 d 4 5 5 5 d 4 e e . . . . . . . . 4 4 . . . . . . . . . . . 
4 1 5 5 4 e e d e . . . . . . . . . . . . . . . . . . . . . . . 
4 4 e e . . . 4 e . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
pizza.setPosition(143, 8)
let ham = sprites.create(img`
. . . . . . . . . . . 2 2 2 2 2 2 e e . . . . . . . . . . . . . 
. . . . . . . . . 2 2 3 3 3 3 3 b b e e e . . . . . . . . . . . 
. . . . . . . 2 2 3 3 d 1 1 1 1 3 3 3 b e e . . . . . . . . . . 
. . . . . . 2 3 d d d 1 1 1 d d 1 d 3 3 e e e . . . . . . . . . 
. . . . . 2 3 d 1 3 3 3 d 1 d 3 3 d 1 3 b e e . . . . . . . . . 
. . . . 2 3 d 1 3 3 3 3 3 d 1 d 3 3 3 1 3 e e e . . . . . . . . 
. . . 2 3 1 1 3 3 3 3 3 3 d d d 3 3 3 3 d b e e e . . . . . . . 
. . 2 3 1 3 3 3 3 3 3 3 3 3 3 d d d 3 3 d 3 e 4 4 e . . . . . . 
. . 2 1 d 3 3 3 3 3 3 3 3 3 3 d d d 3 3 3 d b 4 4 e e . . . . . 
. 2 3 1 3 3 3 3 3 3 3 3 3 3 d d 3 3 3 3 3 d b 4 4 4 e e . . . . 
. 2 d d 3 3 3 3 3 3 3 3 3 3 d 3 3 3 3 3 3 d 3 b 4 4 4 e . . . . 
2 3 1 1 d 3 3 3 3 3 3 3 3 3 d 3 3 3 3 3 3 d d b b 4 4 4 e . . . 
2 d 1 3 1 d 3 3 3 3 3 3 3 3 d 3 3 3 3 3 3 d 1 b 6 6 4 4 e . . . 
2 d 3 3 d d 3 3 3 3 3 3 3 3 d 3 3 3 3 3 3 d 1 b 4 4 4 4 4 e . . 
2 1 3 3 3 d 3 3 3 3 3 3 3 d 3 3 3 3 3 3 3 d 1 6 4 4 6 6 4 e e . 
2 1 3 3 3 d 3 3 3 3 3 3 d 3 3 3 3 3 3 3 3 d 1 6 b 6 4 4 6 4 b e 
2 1 3 3 3 d d d d 3 3 d d 3 3 3 3 3 3 3 3 d 1 6 4 6 4 4 6 b 6 e 
2 1 3 3 3 3 3 d d 1 1 d d 3 3 3 3 3 3 3 3 d 1 6 4 4 b 6 4 4 6 e 
e 1 3 3 3 3 3 d 1 d 3 1 d 3 3 3 3 3 3 3 3 d 1 b 4 4 4 6 4 4 6 e 
e 1 3 3 3 3 3 1 d 3 3 3 1 3 3 3 3 3 3 3 3 1 d 6 b b 4 4 b 6 e . 
e 1 3 3 3 3 3 1 d d 3 3 1 b 3 3 3 3 3 3 3 1 3 6 b b 6 b b 6 e . 
e 1 3 3 3 3 3 3 1 d d 1 d b 3 3 3 3 3 3 3 1 b 6 b 6 6 b b e . . 
e d d 3 3 3 3 3 3 1 1 d b 3 3 3 3 3 3 3 d d 6 b b 6 b b e . . . 
e 3 d 3 3 3 3 3 3 3 d 3 3 3 3 3 3 3 3 3 1 3 6 b e e b b e . . . 
. e d d 3 3 3 3 3 3 3 d 3 3 3 3 3 3 3 d d b f e e b b e . . . . 
. e 3 d d 3 3 3 3 3 d d 3 3 3 3 3 3 3 d 3 e f e e e e . . . . . 
. . e 3 d d 3 3 3 d 1 3 3 3 3 3 3 d d 3 b f f f f f . . . . . . 
. . . e 3 1 1 1 1 1 d d d 3 3 3 d d d b f f e e f . . . . . . . 
. . . . e e d 1 d 3 3 d 1 1 1 1 1 3 b e f e f f . . . . . . . . 
. . . . . . e e b 3 3 3 d d 1 3 b e f f f f . . . . . . . . . . 
. . . . . . . . e e e e f f f f f e e . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
ham.setPosition(15, 41)
ham.say("yo", 5000)
