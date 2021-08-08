export interface Event {
  firstName: string;
  lastName: string;
  email: string;
  eventDate: string;
  _id: string;
};

export type ListResp = {
  data: {
    events: Event[];
    totalRecords: number;
  }
}