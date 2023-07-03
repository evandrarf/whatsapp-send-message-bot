
# Send Message Bot using WhatsAppWeb.js and Express

Bot Whatsapp Created using Express and WaWebjs


## API Reference

#### Get all items

```http
  GET /send-message
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `message` | `string` | **Required**. The message you want to send |
| `number` | `string` | **Required**. Recipient's phone number|



#### Example

```http
  GET /send-message?number=62812345678&message=This+is+a+test+message
```
Make sure if the message is a string that has been urlencoded