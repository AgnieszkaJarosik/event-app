import axios from "axios";
import { ListResp } from "./types";

export type EventData = {
  firstName: string;
  lastName: string;
  email: string;
  eventDate: string;
}

export const fetchEventList: () => Promise<ListResp> = async () => {
  return axios.get("http://localhost:8080/event");
}

export const addEvent = async (data: EventData) => {
  return axios.post("http://localhost:8080/event", data)
}