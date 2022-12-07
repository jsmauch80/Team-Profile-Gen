// importing employee constructor
const employees = require('./employees');

// engineer constructer extends employee constructor
class engineers extends employees {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineers";
    }
}

// exporting engineer
module.exports = engineers;