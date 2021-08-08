import axios from "axios";
import { fetchEventList, addEvent } from "./fetch";

jest.mock('axios');

describe("api calls", () => {
  test('fetches successfully data from an API', async () => {
    const data = {
        events: [
          {
            id: "mock :)",
            firstName: "John",
            lastName: "Doe",
            email: "jdoe@example.com",
            eventDate: "2021-01-08 09:11:46 AM",
        },
      ],
        totalReconrds: 1
    };

    axios.get.mockResolvedValue(data);

    return fetchEventList().then(resp => expect(resp).toEqual(data));
  });
 
  test('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';
 
    axios.get.mockRejectedValue(new Error(errorMessage));

    await expect(fetchEventList()).rejects.toThrow(errorMessage);
  });

  test('successfully add data to database', async () => {
    const event = {
      id: "mock :)",
      firstName: "John",
      lastName: "Doe",
      email: "jdoe@example.com",
      eventDate: "2021-01-08 09:11:46 AM",
    };

    axios.post.mockResolvedValue(event);
    return addEvent(event).then(data => expect(data).toEqual(event));
});
 
  test('error during adding data to api', async () => {
    const data = {
      id: "mock :)",
      firstName: "John",
      lastName: "Doe",
      email: "jdoe@example.com",
      eventDate: "2021-01-08 09:11:46 AM",
    }
    const errorMessage = 'Network Error';
 
    axios.post.mockRejectedValue(new Error(errorMessage));

    await expect(addEvent(data)).rejects.toThrow(errorMessage);
  });
})
