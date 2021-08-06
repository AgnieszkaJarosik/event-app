export interface Event {
  firstName: string;
  lastName: string;
  email: string;
  eventDate: string;
};

export type ListResp = {
  events: Event[];
  totalRecords: number;
}