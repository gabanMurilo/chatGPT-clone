import React from "react";
import "./ChatMessage";
import Avatar from "../../assets/avatar";


export const ChatMessage = ({message}) => {
    return (
        <div className={`chat-message ${message.user === 'gpt'} && "chatgpt"`}
        >
            <div>
                <div className="chat-message-center">
                    <div className={
                        `avatar ${message.user === 'gpt'} && "chatgpt"`}>
                        <div className="message">
                            {message.user === 'gpt'} && (
                            <Avatar></Avatar>
                            )
                        </div>
                    </div>
                </div>

                );
            </div>
            );
        </div>
    );
}
export default ChatMessage;