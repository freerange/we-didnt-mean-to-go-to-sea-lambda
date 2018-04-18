'use strict';
const Alexa = require('alexa-sdk');
const https = require('https');

const APP_ID = 'amzn1.ask.skill.e12f9983-ae2b-4fd7-a040-26ce6d38024b';

const handlers = {
  'LaunchRequest': function() {
    var url = 'https://we-didnt-mean-to-go-to-sea.herokuapp.com/';
    https.get(url, (resp) => {
      let data = '';

      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        var parsedOutput = JSON.parse(data)
        var text = parsedOutput.ack;
        this.response.speak(text);
        this.attributes.state = parsedOutput.state;
        this.response.shouldEndSession(false);
        this.emit(':responseReady');
      });

    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });
  },
  'Listen': function() {
    this.response.speak('Listen intent');
    this.emit(':responseReady');
  },
  'Move': function() {
    this.response.speak('Move intent');
    this.emit(':responseReady');
  }
}

module.exports.game = (event, context, callback) => {
  const alexa = Alexa.handler(event, context, callback);
  alexa.APP_ID = APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};
