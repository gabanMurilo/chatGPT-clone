import React from "react";
import Avatar from "../../assets/avatar";
import "./ChatMessage.css";

const ChatMessage = ({message}) =>{
    return(

        <div className={
            `chat-message ${message.user === 'gpt' && "chatgpt"}`}>

            <div className='chat-message-center'>

                <div className={
                    `avatar ${message.user === 'gpt' && "chatgpt"}`}
                >
                    {message.user === "gpt" &&
                        <Avatar></Avatar>
                    }
                </div>

                <div className='message'>
                    {message.message}
                </div>

            </div>
        </div>
    )
}
export {ChatMessage};