// Send message using GET
const sendMessageGet = async (req, res, client) => {
  try {
    const { number, message } = req.query;

    const number_details = await client.getNumberId(number);
    client.sendMessage(number_details._serialized, message);

    res.json({
      status: "success",
      message: "Message sent!",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: "Invalid request",
    });
  }
};

// Send message using POST
const sendMessagePost = async (req, res, client) => {
  try {
    const { number, message } = req.body;

    const number_details = await client.getNumberId(number);
    client.sendMessage(number_details._serialized, message);

    res.json({
      status: "success",
      message: "Message sent!",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: "Invalid request",
    });
  }
};

module.exports = { sendMessageGet, sendMessagePost };
