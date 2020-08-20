input.onButtonPressed(Button.A, function () {
    basic.showNumber(Sensor.tempC(AnalogPin.P1))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Sensor.lightLevel(AnalogPin.P2))
})
basic.showString("1t 2l")
basic.forever(function () {
    led.plotBarGraph(
    Sensor.soundLevel(AnalogPin.P0),
    100
    )
})
