input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
basic.forever(function () {
    basic.showNumber(input.temperature())
})
