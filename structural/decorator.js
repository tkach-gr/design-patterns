class Tea {
    getPrice() {
        return this.price;
    }

    getName() {
        return this.name;
    }
}

class GreenTea extends Tea {
    constructor() {
        super();
        this.price = 15;
        this.name = "Green tea";
    }
}

class BlackTea extends Tea {
    constructor() {
        super();
        this.price = 18;
        this.name = "Black tea";
    }
}

class TeaDecorator extends Tea {
    constructor(tea) {
        super();
        this.source = tea;
    }

    getPrice() {
        return this.source.getPrice() + this.price;
    }

    getName() {
        return this.source.getName() + "\n" + this.name;
    }
}

class SugarDecorator extends TeaDecorator {
    constructor(tea, amount) {
        super(tea);
        this.price = amount * 1;
        this.name = "Additional ingredient \"sugar\", amount: " + amount;
    }
}

class LemonDecorator extends TeaDecorator {
    constructor(tea) {
        super(tea);
        this.price = 3;
        this.name = "Additional ingredient \"lemon\"";
    }
}

class IceDecorator extends TeaDecorator {
    constructor(tea) {
        super(tea);
        this.price = 5;
        this.name = "Additional ingredient \"ice\"";
    }
}

let tea1 = new BlackTea();
console.log("tea1: ");
console.log("name: " + tea1.getName());
console.log("price: " + tea1.getPrice() + "\n");

let tea2 = new GreenTea();
tea2 = new IceDecorator(tea2);
tea2 = new SugarDecorator(tea2, 3);
tea2 = new LemonDecorator(tea2);
console.log("tea2: ");
console.log("name: " + tea2.getName());
console.log("price: " + tea2.getPrice());