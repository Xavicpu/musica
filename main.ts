input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 100000000000000000000; index++) {
        music.setVolume(255)
        music.playMelody("G B A G C5 B A B ", 360)
    }
})
for (let index = 0; index < 3; index++) {
    music.setVolume(255)
    music.playMelody("G B A G C5 B A B ", 360)
}
basic.forever(function () {
    music.playMelody("D F E D G F E F ", 360)
})
