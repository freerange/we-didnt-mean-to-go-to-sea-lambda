'use strict';
const Alexa = require('alexa-sdk');

const APP_ID = 'amzn1.ask.skill.e12f9983-ae2b-4fd7-a040-26ce6d38024b';

const handlers = {
  'LaunchRequest': function() {
    this.response.speak('LaunchRequest intent');
    this.emit(':responseReady');
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
