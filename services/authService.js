import jwt from "jsonwebtoken";

export const authService = {
  generateToken: (user) => {
    return jwt.sign({ id: user.id, email: user.email }, process.env.SECRET_KEY, { expiresIn: '1d' });
  },

  verifyToken: (token) => {
    return jwt.verify(token, process.env.SECRET_KEY);
  }
};
