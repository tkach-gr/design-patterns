class DocumentCoderInterface {
    encode() {}
    decode() {}
    getString(number) {}
    setString(number, str) {}
    archive() {}
}

class DocumentCoder extends DocumentCoderInterface {
    encode() {
        console.log("Getting data");
        console.log("Checking data");
        console.log("Encode document");
        console.log("Sending result\n");
    }

    decode() {
        console.log("Getting data");
        console.log("Decode document");
        console.log("Checking result\n");
    }

    getString(number) {
        console.log("Opening document");
        console.log("Starting reading document");
        console.log("Go to string number " + number);
        console.log("Returning result\n");
        return `String number: ${number}`;
    }

    setString(number, str) {
        console.log("Opening document");
        console.log("Starting reading document");
        console.log("Go to string number " + number);
        console.log("Replacing string by new value");
        console.log(`String number ${number} was changed to "${str}"\n`);
    }

    archive() {
        console.log("Getting data");
        console.log("Archiving document\n");
    }
}

class DocumentViewer {
    constructor(coder) {
        this.coder = coder;
    }

    showDocument() {
        console.log("Showing document\n");
    }

    encode() {
        this.coder.encode();
    }

    decode() {
        this.coder.decode();
    }

    getString(number) {
        this.coder.getString(number);
    }

    setString(number, str) {
        this.coder.setString(number, str);
    }

    archive() {
        this.coder.archive();
    }
}

let documentCoder = new DocumentCoder();
let documentViewer = new DocumentViewer(documentCoder);

documentViewer.decode();
documentViewer.encode();
documentViewer.getString(55);
documentViewer.setString(31, "new string");
documentViewer.archive();
documentViewer.showDocument();