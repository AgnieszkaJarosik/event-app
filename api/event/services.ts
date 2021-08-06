import yup from "yup";
import { IEvent, IEventDB, eventSchema } from "./models";
import mongoose from "mongoose";

export class EventService {
  static Event = mongoose.model<IEventDB>("event", eventSchema);

  constructor() {}

  async getEvents() {
    return EventService.Event.find();
  }

  async postEvent(event: IEvent) {
      const editedEvent = {
        ...event,
        firstName: this.capitalizeFirstLetter(event.firstName),
        lastName: this.capitalizeFirstLetter(event.lastName),
      };
      const eventModel = new EventService.Event(editedEvent);
      return eventModel.save();
  }


  async countRecords() {
    return EventService.Event.countDocuments();
  }

  capitalizeFirstLetter(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}
