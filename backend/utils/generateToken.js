const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET

console.log(jwtSecret);  // Debug to check if the key is correctly loaded

const generateToken = (user) => {
  // if (!jwtSecret) {
  //   throw new Error('JWT Secret is not defined');
  // }
  
  const token = jwt.sign(
    { id: user.id, name: user.firsft_name, email: user.email, wallet: user.wallet },
    //The token that will be generated will come from user id, name, email and role
    jwtSecret,
    { expiresIn: "2d" }
    
  );
  return token; //It will return token
};

module.exports = generateToken;