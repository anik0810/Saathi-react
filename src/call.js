const accountSid = 'AC1d168435c9b36bcae5f05aeed1633bec'; 
const authToken = 'eda5715eec26a05451e8941373e747f3'; 
const client = require('twilio')(accountSid, authToken); 
 
client.messages 
      .create({ 
          body:"Help Me...",        
          to: '+918274087954',
          from:'+16072845388'
       }) 
      .then(message => console.log(message.sid)) 
      .done();