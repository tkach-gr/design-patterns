class ServerInterface {
    getInfo() {}
    setInfo(newInfo) {}
    login(user) {}
}

class Server extends ServerInterface {
    getInfo() {
        console.log("Getting info from server");
    }

    setInfo(newInfo) {
        console.log(`Sending new info: "${newInfo}" to server`);
    }

    login(user) {
        console.log(`Login user: ${user}`);
    }
}

class ServerProxy extends ServerInterface {
    constructor(server) {
        super();
        this.server = server;
        this._logs = [];
    }

    getLogTime() {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let milliseconds = date.getMilliseconds();

        return `${hours}:${minutes}:${seconds}.${milliseconds}`;
    }

    getInfo() {
        this._logs.push("Called command \"getInfo\" at " + this.getLogTime());
        this.server.getInfo();
    }

    setInfo(newInfo) {
        this._logs.push(`Called command "setInfo" with value "${newInfo}" at ${this.getLogTime()}`);
        this.server.setInfo(newInfo);
    }

    login(user) {
        this._logs.push(`Called command "login" to user "${user}" at ${this.getLogTime()}`);
        this.server.login(user);
    }

    getLogs() {
        return this._logs;
    }
}

let server = new Server();
let serverProxy = new ServerProxy(server);

serverProxy.login("admin");
serverProxy.getInfo();
serverProxy.setInfo("some new info from admin");
serverProxy.login("common-user");
serverProxy.getInfo();
serverProxy.getInfo();

console.log("\n\nLogs:")
serverProxy.getLogs().forEach(item => console.log(item));
