import { EchoLogOption, EchoLogConfig} from '../index.d';
import { v4 as uuidv4 } from 'uuid';

export class EchoLog{
    constructor(config: EchoLogConfig){
        console.log('config:', config);
    }
    $emit (option: EchoLogOption): Promise<string> {
        return new Promise((resolve, reject) => {
            console.log('before evetnt id', option.eventId);
            const eventId = uuidv4();
            if (false) {
                reject(0);
            }
            resolve(eventId);
        });
    }
}
