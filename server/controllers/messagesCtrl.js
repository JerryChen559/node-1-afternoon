let messages = [];
let id = 0;

module.exports = {
  readMessages: (req, res) => {
    res.status(200).json(messages);
  },

  createMessages: (req, res) => {
    const { text, time } = req.body;

    messages.push({ id, text, time });
    id++;
    res.status(200).json(messages);
  },

  updateMessages: (req, res) => {
    const { text } = req.body;
    const updateID = req.params.id;
    const messageIndex = messages.findIndex(message => message.id == updateID);
    let message = messages[messageIndex];

    messages[messageIndex] = {
      id: message.id,
      text: text || message.text,
      time: message.time
    };

    res.status(200).json(messages);
  },

  deleteMessages: (req, res) => {
    const deleteID = req.params.id;
    messageIndex = messages.findIndex(message => message.id == deleteID);
    messages.splice(messageIndex, 1);
    res.status(200).json(messages);
  }
};
