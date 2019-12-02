import { Injectable } from '@nestjs/common';
const rp = require('request-promise');

@Injectable()
export class AppService {
  sendMessage(data) {
    let options = {
      method: 'POST',
      uri:
        'https://kanal.kata.ai/receive_message/48d8b0f1-6839-48f2-8aeb-111a98e76dac',
      json: true,
      body: [
        {
          "type": data.messages[0].type,
          "content": data.messages[0].content,
        },
      ],
    };

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
