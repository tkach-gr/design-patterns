class Database {
    constructor() {
        if(typeof Database.instance === "object") {
            return Database.instance;
        }

        this.requestsCount = 0;
        Database.instance = this;
    }

    sendData() {
        console.log("request");
        this.requestsCount++;
    }
}

let db1 = new Database();
let db2 = new Database();

db1.sendData();
db1.sendData();
db1.sendData();

db2.sendData();
db2.sendData();

console.log(`Requests by db1: ${db1.requestsCount}`); // 5
console.log(`Requests by db2: ${db2.requestsCount}`); // 5