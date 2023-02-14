input.onButtonPressed(Button.A, function on_button_pressed_a() {
    while (true) {
        strip.showRainbow(1, 360)
        strip.show()
    }
})
let I2CRead = 0
let strip : neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 4, NeoPixelMode.RGB)
basic.forever(function on_forever() {
    
    I2CRead = pins.i2cReadNumber(87, NumberFormat.UInt16BE, false)
    if (I2CRead == 16) {
        music.playTone(523, music.beat(BeatFraction.Half))
    } else if (I2CRead == 8) {
        music.playTone(494, music.beat(BeatFraction.Half))
    } else if (I2CRead == 4) {
        music.playTone(466, music.beat(BeatFraction.Half))
    } else if (I2CRead == 2) {
        music.playTone(440, music.beat(BeatFraction.Half))
    } else if (I2CRead == 1) {
        music.playTone(415, music.beat(BeatFraction.Half))
    } else if (I2CRead == 256) {
        music.playTone(262, music.beat(BeatFraction.Half))
    } else if (I2CRead == 32768) {
        music.playTone(392, music.beat(BeatFraction.Half))
    } else if (I2CRead == 16384) {
        music.playTone(370, music.beat(BeatFraction.Half))
    } else if (I2CRead == 8192) {
        music.playTone(349, music.beat(BeatFraction.Half))
    } else if (I2CRead == 4096) {
        music.playTone(330, music.beat(BeatFraction.Half))
    } else if (I2CRead == 2048) {
        music.playTone(311, music.beat(BeatFraction.Half))
    } else if (I2CRead == 1024) {
        music.playTone(294, music.beat(BeatFraction.Half))
    } else if (I2CRead == 512) {
        music.playTone(277, music.beat(BeatFraction.Half))
    }
    
})
