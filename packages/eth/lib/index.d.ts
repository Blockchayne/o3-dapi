import { request, RequestArguments, Account } from './modules/read/request';
declare class O3DapiEth {
    static blockchain: string;
    private clientPlugin;
    request: typeof request;
    constructor(sendMessageMethod: any, addEventListenerMethod: any);
    setClientPlugin(plugin: any): void;
}
export default O3DapiEth;
export declare type request = (data: RequestArguments) => Promise<Account>;
//# sourceMappingURL=index.d.ts.map