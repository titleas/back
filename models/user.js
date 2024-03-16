const db = require('../util/database');

module.exports = class User {
    constructor(avatar, name, email, password) {
        this.avatar = avatar;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static find(email) {
        return db.execute('SELECT * FROM account WHERE email = ?',[email]);
    }

    static save(user) {
        return db.execute(
            'INSERT INTO account (avatar, name, email, password) VALUES (?, ?, ?, ?)',
            [user.avatar, user.name, user.email, user.password]
        )
    }
};

