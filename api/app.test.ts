import request from 'supertest';
import app, { server } from "./index";
import mongoose from "mongoose";
import { dropAllCollections } from "./test-setup";

describe("POST /event", () => {
  test("should respond with a 201 status code", async () => {
    const data = {
      firstName: "John",
      lastName: "Doe",
      email: "jdoe@test.com",
      eventDate: "2021-01-08 09:11:46 AM",
    };
    const resp = await request(app).post("/event").send(data);
    expect(resp.statusCode).toBe(201);
  })

  test("should validate email", async () => {
    const data = {
      firstName: "John",
      lastName: "Doe",
      email: "jdoe.com",
      eventDate: "2021-01-08 09:11:46 AM",
    };
    const response = await request(app).post("/event").send(data)    
    expect(response.statusCode).toBe(400);
    expect(response.text).toBe(JSON.stringify({ type: "email", message: "email must be a valid email" }))
  })

  test("response body should contain event object", async () => {
    const data = {
      firstName: "John",
      lastName: "Doe",
      email: "jdoe@test.com",
      eventDate: "2021-01-08 09:11:46 AM",
    };
    const response = await request(app).post("/event").send(data)
    expect(response.body).toHaveProperty("firstName", "John");
    expect(response.body).toHaveProperty("lastName", "Doe");
    expect(response.body).toHaveProperty("email", "jdoe@test.com");
    expect(response.body).toHaveProperty("eventDate", "2021-01-08 09:11:46 AM");
  })

  test("should respond with a status code of 400", async () => {
    const data = {
      firstName: "",
      lastName: "",
      email: "",
      eventDate: "",
    };
      const response = await request(app).post("/event").send(data)
      expect(response.statusCode).toBe(400)
  })

  afterAll(async () => {
    dropAllCollections();
    mongoose.disconnect();
    server.close();
  });
})
