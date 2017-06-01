'use strict';

const Alexa    = require('alexa-sdk');
const handlers = require("./handlers");
const config   = require("./config");

exports.handler = function (event, context) {
    const alexa     = Alexa.handler(event, context)
    alexa.appId     = config.APP_ID
    alexa.registerHandlers(handlers)
    alexa.execute()
}