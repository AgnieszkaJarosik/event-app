import {Request, Response} from "express";
import { EventService } from "./services";
import { validation } from "./middlewares";
import { eventFormSchema } from "./models";

const express = require('express');
const router = express.Router();
const eventService = new EventService();

router.get('/', async (req: Request, res: Response) => {
  try {
    const events = await eventService.getEvents();
    const count = await eventService.countRecords();
    res.status(200).send({
      events,
      totalRecords: count,
    });
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.post('/', validation(eventFormSchema), async (req: Request, res: Response) => {
  try {
    const event = await eventService.postEvent(req.body);
    res.status(201).send(event);
  } catch(e) {
    console.log(e);
    res.status(400).send(`error: ${e.message}`);
  }
});

export {
  router
}
