## API Reference

#### Send message using method GET

```http
  GET /send-message
```

| Parameter | Type     | Description                                |
| :-------- | :------- | :----------------------------------------- |
| `message` | `string` | **Required**. The message you want to send |
| `number`  | `string` | **Required**. Recipient's phone number     |

#### Example

```http
  GET /send-message?number=62812345678&message=This+is+a+test+message
```

Make sure if the message is a string that has been urlencoded

&nbsp;

#### Send message using method POST (Recommended)

```http
  POST /send-message
```

| body      | Type     | Description                                |
| :-------- | :------- | :----------------------------------------- |
| `message` | `string` | **Required**. The message you want to send |
| `number`  | `string` | **Required**. Recipient's phone number     |

#### Example

```http
  POST /send-message
```

##### Request body

```json
{
  "message": "This is example message",
  "number": "628123456789"
}
```
