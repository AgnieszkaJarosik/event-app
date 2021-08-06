import axios from "axios";
import { Event, ListResp } from "./types";

export const fetchEventList: () => Promise<ListResp> = async () => {
  return axios.get("http://localhost:8080/event");
}

export const addEvent = async (data: Event) => {
  return axios.post("http://localhost:8080/event", data)
}