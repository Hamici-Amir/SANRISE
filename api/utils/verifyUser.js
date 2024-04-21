import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';

export const verifyToken = (req, res, next) => {
  const token = req.cookies.jwt;
  
  if (!token) {
    return next(errorHandler(401, 'Unauthorized'));
  }
  
  jwt.verify(token, process.env.Jwt_SECRET, (err, user) => {
    if (err) {
      return next(errorHandler(401, 'Unauthorized'));
    }
    req.user = user;
    next();
    
  });
};