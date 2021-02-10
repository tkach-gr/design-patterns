class UserRequest {
    constructor(url, login, request) {
        this.url = url;
        this.login = login;
        this.request = request;
    }
}

class HandlerInterfase {
    setNext(handler) {}
    handle(request) {}
}

class BaseHandler extends HandlerInterfase {
    setNext(handler) {
        this.next = handler;
    }
}

class UrlHanler extends BaseHandler {
    handle(request) {
        if(request.url.length < 20) {
            console.log("UrlHandler passed");
            this.next?.handle(request);
        } else {
            console.log("UrlHandler not passed");
        }
    }
}

class LoginHandler extends BaseHandler {
    handle(request) {
        if(request.login === "admin") {
            console.log("LoginHandler passed");
            this.next?.handle(request);
        } else {
            console.log("LoginHandler not passed");
        }
    }
}

class RequestHandler extends BaseHandler {
    handle(request) {
        if(request.request === "update-info") {
            console.log("RequestHandler passed");
            this.next?.handle(request);
        } else {
            console.log("RequestHandler not passed");
        }
    }
}

let urlHandler = new UrlHanler();
let loginHandler = new LoginHandler();
let requestHandler = new RequestHandler();

urlHandler.setNext(loginHandler);
loginHandler.setNext(requestHandler);

let request = new UserRequest("/", "admin", "update-info");
urlHandler.handle(request);
console.log("");

let newRequest = new UserRequest("/", "default-user", "supdate-info");
urlHandler.handle(newRequest);