class VGAMonitor {
    getAnalogSignal(signal) {
        if(signal === "analog") {
            console.log("is working");
        } else {
            console.log("ERROR: incorrect signal");
        }
    }
}

class Computer {
    sendDigitalSignal(digitalMonitor) {
        digitalMonitor.getDigitalSignal("digital");
    }
}

class DigitalMonitorInterface {
    getDigitalSignal(signal) {}
}

class VGAMonitorAdapter extends DigitalMonitorInterface {
    constructor(vgaMonitor) {
        super();
        this.monitor = vgaMonitor;
    }

    converSignal(signal) {
        signal = "analog";
        return signal;
    }

    getDigitalSignal(signal) {
        signal = this.converSignal(signal);
        this.monitor.getAnalogSignal(signal);
    }
}

let computer = new Computer();
let vgaMonitor = new VGAMonitor();
let vgaMonitorAdapter = new VGAMonitorAdapter(vgaMonitor);

computer.sendDigitalSignal(vgaMonitorAdapter);