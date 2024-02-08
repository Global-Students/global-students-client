import React from "react";
import ChatMessage from "./ChatMessage";

export default function ChatContent({receiverId}) {
    // test data
    const testData = {
      "result": {
        "messages":[
          {
            "userId": "100",
            "sendYn": "Y",
            "text": "안녕하세요~ 저는 이윤주입니다",
            "createAt": "2024-01-16 14:44"		
          },
          {
            "userId": "200",
            "sendYn": "N",
            "text": "넵 안녕하세요 ㅎㅎ",
            "createAt": "2024-01-16 14:45"
          },
          {
            "userId": "100",
            "sendYn": "Y",
            "text": "전송 메세지..",
            "createAt": "2024-01-16 14:48"
          },
        ]
      }
    };
  
    const cmessages = testData.result.messages;
  
    let count = 0;
    let status = '';
    let prvuserid = cmessages[0].userId;
    // eslint-disable-next-line no-unused-vars
    let prevtext = cmessages[0].text;
    // eslint-disable-next-line no-unused-vars
    let prevcreateAt = cmessages[0].createAt;
  
    const ChatMessages = cmessages.map((message) => {
      const { userId, text, createAt } = message;
      if (prvuserid === userId) {
        status = count === 0 ? 'FIRST' : 'MIDDLE';
        count += 1;
      } else {
        status = count === 0 ? 'SINGLE' : 'LAST';
        count = 0;
      }
      return <ChatMessage receiverId={receiverId} userId={prvuserid} text={prevtext} creatAt={prevcreateAt} status={status}/>;

      
      // eslint-disable-next-line no-unreachable
      prvuserid = userId;
      prevtext = text;
      prevcreateAt = createAt;
    });
  
    status = count === 0 ? 'SINGLE' : 'LAST';
    ChatMessages.push(<ChatMessage receiverId={receiverId} userId={prvuserid} text={prevtext} creatAt={prevcreateAt} status={status}/>);
  }