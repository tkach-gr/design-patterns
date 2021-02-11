class CommandInterface {
    execute() {}
}

class EditCommand extends CommandInterface {
    execute() {
        console.log("Edit command executed");
    }
}

class SaveCommand extends CommandInterface {
    execute() {
        console.log("Save command executed");
    }
}

class Button {
    constructor(command) {
        this.command = command;
    }

    press() {
        this.command.execute();
    }
}

let editCommand = new EditCommand();
let saveCommand = new SaveCommand();

let editButton1 = new Button(editCommand);
let saveButton1 = new Button(saveCommand);
let saveButton2 = new Button(saveCommand);

editButton1.press();
saveButton1.press();
saveButton2.press();