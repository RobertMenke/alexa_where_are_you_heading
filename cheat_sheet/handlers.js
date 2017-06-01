"use strict";


/**
 * This file include a list of handlers for requests.
 */
module.exports = {
    'HELLO_WORLD' : function() {
        this.emit(":tell", "Hello world")
    }
}