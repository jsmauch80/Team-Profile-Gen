// importing employee constructor
const employees = require('./employees');

// intern constructor extends employee constructor
class interns extends employees {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Interns";
    }
}

// exporting intern
module.exports = interns;