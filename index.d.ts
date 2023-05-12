export interface EchoLogOption {
    eventId?: string; // 上一个事件id
    eventKey: string;
    userId?: string;
    eventVal?: any;
}
export interface EchoLogConfig {
    key: string;
    api: string;
}
export class EchoLog {
    constructor(config?: EchoLogConfig);
    $emit(option: EchoLogOption): Promise<string>;
}