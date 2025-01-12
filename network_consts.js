/*jslint node: true */
"use strict";

var _conf			= require( './conf.js' );



/**
 *	exports
 */
exports.FORWARDING_TIMEOUT			= 10 * 1000;		//	don't forward if the joint was received more than FORWARDING_TIMEOUT ms ago
exports.STALLED_TIMEOUT				= 5000;			//	a request is treated as stalled if no response received within STALLED_TIMEOUT ms
exports.RESPONSE_TIMEOUT			= 300 * 1000;		//	after this timeout, the request is abandoned
exports.HEARTBEAT_TIMEOUT			= _conf.HEARTBEAT_TIMEOUT || 10 * 1000;
exports.HEARTBEAT_RESPONSE_TIMEOUT		= 60 * 1000;
exports.PAUSE_TIMEOUT				= 2 * exports.HEARTBEAT_TIMEOUT;
