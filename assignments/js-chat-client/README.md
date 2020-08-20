# JavaScript Chat Client

## Description

Build a chat client (like Slack) using JavaScript

## Objectives

After completing this assignment, you should…

- understand how to use `fetch`

## Assignment

Using HTML, CSS and JavaScript, build a chat client like slack. Users should be able to choose a
username and send messages to other users who have the chat client open in their browser. You may
use the [CodeFriends chat API](https://github.com/alarner/chat-server) to send and receive messages.
Read the documentation carefully to understand how you can interact with the API.

Think about how you will show new messages from other users. Hint: you may need to periodically
check with the server to see if there are new messages.

## Client Bonus

1. Add support for markdown so that users can make their messages bold, italic, underlined, etc. (hint: you may be able to use [marked](https://github.com/markedjs/marked))
1. Add an emoji picker (like the one in Slack) so that users can add emojis to their message content. (hint: you may be able to use [emoji-button](https://github.com/joeattardi/emoji-button))

## Server Bonus

Clone the [server code](https://github.com/alarner/chat-server) and add a new API endpoint to
support adding emoji reactions to messages. The server currently returns messages in the following
format:

```
{
   "id": 1,
   "user": "aaron",
   "message": "hello world!",
   "createdAt": "2020-08-20T18:16:05.822Z"
}
```

You should add a new field in the response of each message called `reactions`. This new field should
contain an array of objects that look like this:

```
{
   "user": "aaron",
   "reaction": "😊",
   "createdAt": "2020-08-20T18:16:05.822Z"
}
```

The same user should not be able to add the same reaction more than once, but different users should
be able to add the same reaction. Your new endpoint should be a `POST` request (not `GET`) to
`/message/:id/reaction` with a body that contains the `user` and `reaction` fields.

Hint: You can use [Insomnia](https://updates.insomnia.rest/downloads/mac/latest?app=com.insomnia.app) to test your new API endpoint.

## Notes

- [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
- [chat server](https://github.com/alarner/chat-server)
- [marked](https://github.com/markedjs/marked)
- [emoji button](https://github.com/joeattardi/emoji-button)
- [Insomnia](https://insomnia.rest/)
