import jwt from 'jsonwebtoken';

import User from '../models/User.js';

class UserController {
  static async login(req, res) {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email: email });
      if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Email or password is incorrect.' });
      }

      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });

      res.cookie('token', token, {
        httpOnly: true,
        // secure: process.env.NODE_ENV === 'production', (HTTPS??)
        secure: false,
        expires: new Date(Date.now() + 3600000),
      });
      res.json({ message: 'success', user: user });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Błąd serwera.' });
    }
  }

  static async register(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        if (err.code === 11000) {
          let errorField = Object.keys(err.keyValue)[0];
          res.status(409).json({ message: `The ${errorField} is already in use.` });
        } else {
          res.status(500).json({ message: 'Internal server error' });
        }
      });
  }

  static async getUserInfo(req, res) {
    try {
      const user = await User.findById(req.userId).select('userName email');
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ userName: user.userName, email: user.email });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async changePassword(req, res) {
    const { currentPassword, newPassword } = req.body;
    try {
      const user = await User.findById(req.userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      if (user.password !== currentPassword) {
        return res.status(401).json({ message: 'Current password is incorrect' });
      }
      user.password = newPassword;
      await user.save();
      res.json({ message: 'Password changed successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server erros' });
    }
  }

  static async checkAuth(req, res) {
    try {
      const user = await User.findById(req.userId);
      if (!user) {
        return res.status(401).send({ isLoggedIn: false });
      }
      return res.send({ isLoggedIn: true, user: user });
    } catch (error) {
      return res.status(500).send({ error: 'Internal server error' });
    }
  }

  static async logout(req, res) {
    res.clearCookie('token');
    res.send({ message: 'Logged out successfully' });
  }
}

export default UserController;
