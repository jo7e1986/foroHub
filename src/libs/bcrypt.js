import bcrypt from "bcryptjs";

export const encryptPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, function (err, hash) {
        if (err) reject(err);
        resolve(hash);
      });
    });
  });
};

export const checkPassword = (password, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};
