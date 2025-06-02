"use strict";
class User {
    _username;
    constructor(username) {
        this.username = username;
    }
    get username() {
        return this._username;
    }
    set username(user) {
        if (user.length < 3) {
            throw new Error('Username must be at least 3 characters long!');
        }
        this._username = user;
    }
}
const user = new User("Martin");
user.username = "Do";
//# sourceMappingURL=getterSetter.js.map