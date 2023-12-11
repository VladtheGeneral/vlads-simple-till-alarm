input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    music.play(music.stringPlayable("C F D F C F D C ", 200), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
	
})
