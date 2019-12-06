import { Injectable } from '@nestjs/common';
const rp = require('request-promise');

@Injectable()
export class AppService {
  sendMessage(data) {
    let options = {
      method: 'POST',
      uri:
        '<enter_your_webhook_here>',
      json: true,
      body: {
        "userId": data.userId,
        "messages":[
          {
            "type": data.messages[0].type,
            "content": data.messages[0].content
          }
        ]
      }
    }
    
    return rp(options)
      .then(function (parsedBody){
          data = {
            "status" : "Success",
            "messages" : parsedBody
          }
          return data
      })
      .catch(function(err) {
          data = {
            "status" : "error",
            "messages" : err
          }
          return data
      }) 
  }
}
