import jwt from "jsonwebtoken";
import process from "process";

const generateToken = (userName) => {
    return jwt.sign(
        { id: userName },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRES_IN,
        }
    );
};

export default generateToken;