### install guide 

```
npm i event-log
```

### demo

#### init and emit event log
```js
const {EchoLog} = require('../dist/index');
const log = new EchoLog({key: "", api: "https://xxx.com/event/push"});
log.$emit({
    eventKey: "OPEN_AD",
    userId: "xx",
}).then((val) => {
    console.log("event id:",val);
}).catch((err) => {
    
});
```