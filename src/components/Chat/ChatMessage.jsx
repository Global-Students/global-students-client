import React from "react";

export default function ChatMessage({receiverId, userId, text, creatAt, status}) {
    let messageStyle = 'max-w-[223px] px-6 py-3.5 shadow-message ';
    messageStyle += receiverId === userId ? ' bg-gray-scale-8 rounded-l-[30px] ' : 'bg-orange-4 rounded-r-[30px] ';
    if (status === 'SINGLE') {
      // single message
      messageStyle += receiverId === userId ? 'rounded-r-[30px]' : 'rounded-l-[30px]';
      return (
        <div className="flex w-[340px] gap-2">
          <div className={messageStyle}>
            <p className="text-sm text-gray-scale-1">
              {text}
            </p>
          </div>
          <p className="text-xs text-left text-gray-scale-4 self-end">{creatAt}</p>
        </div>
      );
    // eslint-disable-next-line no-else-return
    } else if (status === 'FIRST') {
      // first message
      messageStyle += receiverId === userId ? 'rounded-tr-[30px] rounded-br-md' : 'rounded-tl-[30px] rounded-bl-md';
      return (
        <div className="flex w-[340px] gap-2">
          <div className={messageStyle}>
            <p className="text-sm text-gray-scale-1">
              {text}
            </p>
          </div>
          <p className="text-xs text-left text-gray-scale-4 self-end">{creatAt}</p>
        </div>
      );
    } else if (status === 'MIDDLE') {
      // middle message
      messageStyle += receiverId === userId ? 'rounded-r-md' : 'rounded-l-md';
      return (
        <div className="flex w-[340px] gap-2">
          <div className={messageStyle}>
            <p className="text-sm text-gray-scale-1">
              {text}
            </p>
          </div>
          <p className="text-xs text-left text-gray-scale-4 self-end">{creatAt}</p>
        </div>
      );
    } else {
      // last message
      messageStyle += receiverId === userId ? 'rounded-tr-md rounded-br-[30px]' : 'rounded-tl-md rounded-bl-[30px]';
      return (
        <div className="flex w-[340px] gap-2">
          <div className={messageStyle}>
            <p className="text-sm text-gray-scale-1">
              {text}
            </p>
          </div>
          <p className="text-xs text-left text-gray-scale-4 self-end">{creatAt}</p>
        </div>
      );
    }
  }