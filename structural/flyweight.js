class Emoji {
    constructor(name) {
        this.name = name;
    }
}

class EmojiFactory {
    constructor() {
        this.cache = {};
    }

    create(name) {
        let emoji = this.cache[name];
        if(emoji) return emoji;
        this.cache[name] = new Emoji(name);
        return this.cache[name];
    }
}

class Chat {
    constructor(emojiFactory) {
        this.emojiFactory = emojiFactory;
    }

    showEmoji(name) {
        this.emojiFactory.create(name);
    }
}

let emojiFactory = new EmojiFactory();
let chat = new Chat(emojiFactory);

chat.showEmoji("funny");
chat.showEmoji("angry");
chat.showEmoji("sleepy");
chat.showEmoji("sleepy");
chat.showEmoji("funny");
chat.showEmoji("funny");

console.log("Total cache capacity: " + Object.keys(emojiFactory.cache).length);