import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ isLoggedIn: false });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ isLoggedIn: false });
    }
    req.userId = decoded.userId;
    next();
  });
};

export default authenticateToken;
