radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showArrow(ArrowNames.North)
        hummingbird.setRotationServo(FourPort.One, 50)
        hummingbird.setRotationServo(FourPort.Two, -50)
    } else if (receivedNumber == 1) {
        basic.showArrow(ArrowNames.South)
        hummingbird.setRotationServo(FourPort.One, -50)
        hummingbird.setRotationServo(FourPort.Two, -50)
    } else if (receivedNumber == 2) {
        basic.showArrow(ArrowNames.West)
        hummingbird.setRotationServo(FourPort.One, 50)
        hummingbird.setRotationServo(FourPort.Two, 50)
    } else if (receivedNumber == 3) {
        basic.showArrow(ArrowNames.East)
        hummingbird.setRotationServo(FourPort.One, -50)
        hummingbird.setRotationServo(FourPort.Two, 50)
    } else if (receivedNumber == 4) {
        basic.showIcon(IconNames.No)
        hummingbird.setRotationServo(FourPort.One, 0)
        hummingbird.setRotationServo(FourPort.Two, 0)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(4)
})
hummingbird.startHummingbird()
basic.showIcon(IconNames.Yes)
radio.setGroup(1)
basic.forever(function () {
    if (input.isGesture(Gesture.LogoUp)) {
        basic.showArrow(ArrowNames.North)
        radio.sendNumber(0)
    } else if (input.isGesture(Gesture.LogoDown)) {
        basic.showArrow(ArrowNames.South)
        radio.sendNumber(1)
    } else if (input.isGesture(Gesture.TiltLeft)) {
        basic.showArrow(ArrowNames.West)
        radio.sendNumber(2)
    } else if (input.isGesture(Gesture.TiltRight)) {
        basic.showArrow(ArrowNames.East)
        radio.sendNumber(3)
    } else {
        basic.showIcon(IconNames.No)
        radio.sendNumber(4)
    }
})
