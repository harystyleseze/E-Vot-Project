const bcrypt = require("bcryptjs");

const hashedNin = (nin) => {
    try {
        const salt = bcrypt.genSaltSync(12); // asynchronous salt generation
        return bcrypt.hashSync(nin, salt); // hashing
    } catch (error) {
        console.error(error);
        throw error; // Pass error for better debugging
    }
};


//Writing code for decrypting nin in the database and comparing it to user raw password
const comparedNin = (nin, hashedNin) => {
    try {
        return bcrypt.compareSync(nin, hashedNin); // Asynchronous with `await`
    } catch (error) {
        console.error(error);
        return false;
    }
};


// module.exports = hashedPassword;
module.exports = {comparedNin, hashedNin};

