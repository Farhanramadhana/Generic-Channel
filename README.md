# Generic-Channel

Here is the example of generic channel app build with NestJS framework.

We want to integrate our chatBot (made with kata.ai platform https://platform.kata.ai/)

Source code below is the Controller ***/message*** that have 2 function.

1. /message/retrieveMessage endpoint with POST method is to retrieve data from chatBot
2. /message/sendMessage endpoint with POST method is to send data to chatBot

```typescript
@Controller('message')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('retrieveMessage')
  retrieveMessage(@Req() request: Request) {
    console.log(request.body);
  }

  @Post('sendMessage')
  sendMessage(@Req() request: Request) {
    let data = request.body;
    return this.appService.sendMessage(data);
  }
}
```

sendMessage() function will send user message to chatBot.

```typescript
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
```
