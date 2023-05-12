const {EchoLog} = require('../dist/index');
test("test emit", async () => {
    const log = new EchoLog({key: "", api: ""});
    log.$emit({
        eventKey: "OPEN_AD",
        userId: "xx",
        eventVal: ''
    }).then((val) => {
        console.log("event id:",val);
    }).catch((err) => {
        expect(e).toMatch('error');
    });
})