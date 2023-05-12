"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EchoLog = void 0;
const uuid_1 = require("uuid");
class EchoLog {
    constructor(config) {
        console.log('config:', config);
    }
    $emit(option) {
        return new Promise((resolve, reject) => {
            console.log('before evetnt id', option.eventId);
            const eventId = (0, uuid_1.v4)();
            if (false) {
                reject(0);
            }
            resolve(eventId);
        });
    }
}
exports.EchoLog = EchoLog;
//# sourceMappingURL=index.js.map