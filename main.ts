input.onButtonPressed(Button.A, function () {
    sprite.turn(Direction.Left, 90)
})
input.onButtonPressed(Button.B, function () {
    sprite.turn(Direction.Right, 90)
})
let apppelsprite: game.LedSprite = null
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
sprite.turn(Direction.Left, 90)
let appel = 0
game.setScore(0)
basic.forever(function () {
    basic.pause(1000)
    sprite.move(1)
})
basic.forever(function () {
    if (appel == 0) {
        apppelsprite = game.createSprite(randint(0, 5), randint(0, 5))
        appel = 1
    }
    if (sprite.isTouching(apppelsprite)) {
        apppelsprite.delete()
        basic.pause(1100)
        appel = 0
        game.addScore(1)
    }
})
