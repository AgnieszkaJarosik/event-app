import mongoose, { Schema, Document } from "mongoose";
import * as yup from 'yup';

export interface IEvent {
  firstName: string;
  lastName: string;
  email: string;
  date: string;
}

export const eventSchema: Schema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  eventDate: {
    type: String,
    required: true
  },
});

export const eventFormSchema = yup.object({
  firstName: yup.string().min(2).max(30).required(),
  lastName: yup.string().min(2).max(30).required(),
  email: yup.string().email().required(),
  eventDate: yup.string().required(),
})

export interface IEventDB extends Document, IEvent {}