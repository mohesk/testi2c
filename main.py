def on_button_pressed_a():
    while True:
        strip.show_rainbow(1, 360)
        strip.show()
input.on_button_pressed(Button.A, on_button_pressed_a)

I2CRead = 0
strip: neopixel.Strip = None
strip = neopixel.create(DigitalPin.P1, 4, NeoPixelMode.RGB)

def on_forever():
    global I2CRead
    I2CRead = pins.i2c_read_number(87, NumberFormat.UINT16_BE, False)
    if I2CRead == 16:
        music.play_tone(523, music.beat(BeatFraction.HALF))
    elif I2CRead == 8:
        music.play_tone(494, music.beat(BeatFraction.HALF))
    elif I2CRead == 4:
        music.play_tone(466, music.beat(BeatFraction.HALF))
    elif I2CRead == 2:
        music.play_tone(440, music.beat(BeatFraction.HALF))
    elif I2CRead == 1:
        music.play_tone(415, music.beat(BeatFraction.HALF))
    elif I2CRead == 256:
        music.play_tone(262, music.beat(BeatFraction.HALF))
    elif I2CRead == 32768:
        music.play_tone(392, music.beat(BeatFraction.HALF))
    elif I2CRead == 16384:
        music.play_tone(370, music.beat(BeatFraction.HALF))
    elif I2CRead == 8192:
        music.play_tone(349, music.beat(BeatFraction.HALF))
    elif I2CRead == 4096:
        music.play_tone(330, music.beat(BeatFraction.HALF))
    elif I2CRead == 2048:
        music.play_tone(311, music.beat(BeatFraction.HALF))
    elif I2CRead == 1024:
        music.play_tone(294, music.beat(BeatFraction.HALF))
    elif I2CRead == 512:
        music.play_tone(277, music.beat(BeatFraction.HALF))
basic.forever(on_forever)
