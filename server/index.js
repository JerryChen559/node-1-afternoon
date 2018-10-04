const express = require("express");
const { json } = require("body-parser");
const mc = require("./controllers/messagesCtrl");

const app = express();

app.use(json());
app.use(express.static(__dirname + "/../public/build"));

// app.get("/api/messages", mc.readMessages);
// app.post("/api/messages", mc.createMessages);
// app.put("/api/messages/:id", mc.updateMessages);
// app.delete("/api/messages/:id", mc.deleteMessages);

const messagesBaseUrl = "/api/messages";
app.post(messagesBaseUrl, mc.createMessages);
app.get(messagesBaseUrl, mc.readMessages);
app.put(`${messagesBaseUrl}/:id`, mc.updateMessages);
app.delete(`${messagesBaseUrl}/:id`, mc.deleteMessages);

const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
