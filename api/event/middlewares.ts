import { ObjectSchema } from "yup";
import {Request, Response, NextFunction} from "express";

type Schema = ObjectSchema<{
  firstName: string;
  lastName: string;
  email: string;
  eventDate: string;
}>;

export const validation = (schema: any) => 
  async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    try {
      await schema.validate(body);
      next();
    } catch (error) {
      return res.status(400).send({type: error.type, message: error.message});
    }
}