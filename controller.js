const sendMessageGet = async (req, res, client) => {
  try {
    const { number, message } = req.query;

    const number_details = await client.getNumberId(number);
    client.sendMessage(number_details._serialized, message);

    res.send("Message sent!");
  } catch (error) {
    res.send(error);
  }
};

const sendMessagePost = async (req, res, client) => {
  try {
    const { number, message } = req.body;

    const number_details = await client.getNumberId(number);
    client.sendMessage(number_details._serialized, message);

    res.send("Message sent!");
  } catch (error) {
    res.send(error);
  }
};

module.exports = { sendMessageGet, sendMessagePost };
