import express from "express";
import cors from "cors"
import { emailService } from "./sendEmail.js";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/sendemail", async (request, response) => {
  const { from_name, email, text } = request.body;

  const template = emailService.createEmailTemplate(from_name, email, text);
  await emailService.sendEmail(template);

  return response.status(200).json({ message: "E-mail sent successfully." });
});

app.listen(4000, () => {
  console.log("Server is running.");
});