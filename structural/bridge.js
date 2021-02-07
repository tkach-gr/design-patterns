class DocumentCoderInterface {
    encode() {}
    decode() {}
    getString(number) {}
    setString(number, str) {}
    archive() {}
}

class DocumentCoder extends DocumentCoderInterface {
    encode() {
        console.log("Encode document");
    }

    decode() {
        console.log("Decode document");
    }

    getString(number) {
        return `String number: ${number}`;
    }

    setString() {
        console.log(`String number: ${number} was changed to`);
    }

    archive() {
        console.log("Document was archived");
    }
}

class DocumentViewer {
    constructor()
}