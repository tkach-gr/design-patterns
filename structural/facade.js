class DbConnector {
    connect() {
        console.log("Connect to DB;");
        return new DbDataManager(); 
    }

    disconnect() {
        console.log("Disconnect from DB;");
    }
}

class DbDataManager {
    send(data) {
        console.log("Sending to db, data: " + data + ";");
    }
}

class InfoChecker {
    check(data) {
        console.log("Check data;");
        
        if(data.length < 30) {
            console.log("Data is correct;");
            return true;
        }

        console.log("Data isn't correct;");
        return false;
    }
}

class DbFacade {
    sendData(data) {
        let checker = new InfoChecker();

        if(!checker.check(data)) { return; }

        let connector = new DbConnector();
        let dataManager = connector.connect();

        dataManager.send(data);
        connector.disconnect();
    }
}

let db = new DbFacade();
db.sendData("some info for server");