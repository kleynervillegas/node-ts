import { Router, Request, Response } from 'express';
import express from "express";
import config from "../../config/config";
import * as jwt from 'jsonwebtoken';


export const authentication = express.Router(); 
authentication.use((req : Request, res: Response, next) => {
    const token : string = req.headers['access-token'] as string;
 
    if (token) {
      jwt.verify(token, config.jwtSecret, (err, decoded) => {      
        if (err) {
          return res.json({ mensaje: 'Token inválida' });    
        } else {
          next();
        }
      });
    } else {
      res.send({ 
          mensaje: 'Token no proveída.' 
      });
    }
 });