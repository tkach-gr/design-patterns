class HDMonitor {
    constructor() { this.resolution = "1920x1080"; }
    getInfo() { return this.info; }
}

class UltraHDMonitor {
    constructor() { this.resolution = "3840×2160"; }
    getInfo() { return this.info; }
}

class UltraWideMonitor {
    constructor() { this.resolution = "2520x1080"; }
    getInfo() { return this.info; }
}

class CommonUsersHDMonitor extends HDMonitor {
    constructor() {
        super();
        this.info = "Common user's HD monitor";
    }
}

class CommonUsersUltraHDMonitor extends UltraHDMonitor {
    constructor() {
        super();
        this.info = "Common user's UltraHD monitor";
    }
}

class CommonUsersUltraWideMonitor extends UltraWideMonitor {
    constructor() {
        super();
        this.info = "Common user's Ultra Wide monitor";
    }
}

class ArtistsHDMonitor extends HDMonitor {
    constructor() {
        super();
        this.info = "Artist's HD monitor";
    }
}

class ArtistsUltraHDMonitor extends UltraHDMonitor {
    constructor() {
        super();
        this.info = "Artist's UltraHD monitor";
    }
}

class ArtistsUltraWideMonitor extends UltraWideMonitor {
    constructor() {
        super();
        this.info = "Artist's Ultra Wide monitor";
    }
}

class MonitorFactory {
    createHDMonitor() {}
    createUltraHDMonitor() {}
    createUltraWideMonitor() {}
}

class CommonUsersMonitorsFactory extends MonitorFactory {
    createHDMonitor() {
        return new CommonUsersHDMonitor();
    }
    createUltraHDMonitor() {
        return new CommonUsersUltraHDMonitor();
    }
    createUltraWideMonitor() {
        return new CommonUsersUltraWideMonitor();
    }
}

class ArtistsMonitorsFactory extends MonitorFactory {
    createHDMonitor() {
        return new ArtistsHDMonitor();
    }
    createUltraHDMonitor() {
        return new ArtistsUltraHDMonitor();
    }
    createUltraWideMonitor() {
        return new ArtistsUltraWideMonitor();
    }
}


// let monitorFactory = new CommonUsersMonitorsFactory();
let monitorFactory = new ArtistsMonitorsFactory();

let hdMonitor = monitorFactory.createHDMonitor();
let ultraHDMonitor = monitorFactory.createUltraHDMonitor();
let ultraWideMonitor = monitorFactory.createUltraWideMonitor();

console.log(`${hdMonitor.getInfo()}, resolution: ${hdMonitor.resolution}`);
console.log(`${ultraHDMonitor.getInfo()}, resolution: ${ultraHDMonitor.resolution}`);
console.log(`${ultraWideMonitor.getInfo()}, resolution: ${ultraWideMonitor.resolution}`);