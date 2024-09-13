import jwt from "jsonwebtoken";
const secretKey = process.env.JWT_KEY || "secret";

export const signJwt = (username) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { username },
      secretKey,
      { expiresIn: "1h" },
      function (err, token) {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
};

export const verifyJwt = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) reject(err);
      resolve(decoded);
    });
  });
};
