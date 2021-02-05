class Computer {
    constructor() {
        this.cpu = null;
        this.gpu = null;
        this.memory = null;
        this.hardDrives = [];
    }
}

class ComputerBuilder {
    constructor() {
        this.computer = new Computer();
    }

    setCPU(cpu) {
        this.computer.cpu = cpu;
        return this;
    }

    setGPU(gpu) {
        this.computer.gpu = gpu;
        return this;
    }

    setMemory(memory) {
        this.computer.memory = memory;
        return this;
    }

    addHardDrive(hardDrive) {
        this.computer.hardDrives.push(hardDrive);
        return this;
    }

    getResult() {
        return this.computer;
    }
}

let computerBuilder1 = new ComputerBuilder();
let computer1 = computerBuilder1
                    .setCPU("CPU v3")
                    .setGPU("GPU v3")
                    .setMemory("16GB")
                    .addHardDrive("1TB hard drive")
                    .addHardDrive("2TB hard drive")
                    .getResult();


let computerBuilder2 = new ComputerBuilder();
let computer2 = computerBuilder2
                    .setCPU("CPU v2")
                    .setGPU("GPU v1")
                    .setMemory("6GB")
                    .addHardDrive("500GB hard drive")
                    .getResult();

                    
console.log(computer1);
console.log(computer2);