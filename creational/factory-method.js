class InputDevice {
    constructor(name) {
        this.name = name;
    }

    input() {
        throw new Error("Abstract method!");
    }
}

class ComputerMouse extends InputDevice {
    input() {
        return "Left mouse button was pressed.";
    }
}

class Keyboard extends InputDevice {
    input() {
        return "Key 'A' was pressed on keyboard.";
    }
}

class Webcamera extends InputDevice {
    input() {
        return "Webcamera is sending a video.";
    }
}

class InputDeviceFactory {
    create(requestedDevice) {
        let createdDevice = null;

        if(requestedDevice === "mouse") {
            createdDevice = new ComputerMouse("ComputerMouse");
        } else if(requestedDevice === "keyboard") {
            createdDevice = new Keyboard("Keyboard");
        } else if(requestedDevice === "webcamera") {
            createdDevice = new Webcamera("Webcamera");
        }

        return createdDevice;
    }
}

let inputDeviceFactory = new InputDeviceFactory();

let mouse = inputDeviceFactory.create("mouse");
let webcamera = inputDeviceFactory.create("webcamera");
let keyboard = inputDeviceFactory.create("keyboard");

console.log(`${mouse.name}:`);
console.log(`  ${mouse.input()}\n`);

console.log(`${webcamera.name}:`);
console.log(`  ${webcamera.input()}\n`);

console.log(`${keyboard.name}:`);
console.log(`  ${keyboard.input()}\n`);