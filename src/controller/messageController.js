import { Conversation } from "../model/conversationModel.js"
import { Message } from "../model/messageModel.js"
const sendMessage = async (req, res) => {
  try {
    const {message} = req.body
    const {id: receiverId} = req.params
    const senderId = req.user._id

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] }
    })

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId]
      })
    }
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    })
    if (newMessage) {
      conversation.messages.push(newMessage._id)
    }
    // await conversation.save()
    // await newMessage.save()

    // this will run in parallel
    await Promise.all([conversation.save(), newMessage.save()])
    res.status(201).json(newMessage)
  } catch (error) {
    console.log("Error in sendMessage controller: ", error.message);
    res.status(500).json({error: "Internal server error"})
  }
}

export const messageController = {
    sendMessage
}