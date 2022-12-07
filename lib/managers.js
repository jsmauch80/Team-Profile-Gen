// importing employee constructor
const employees = require('./employees');

// manager constructor extends employee constructor
class managers extends employees {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Managers";
    }
}

// exporting manager
module.exports = managers;