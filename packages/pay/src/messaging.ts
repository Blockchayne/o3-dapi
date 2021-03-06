import { BLOCKCHAIN, VERSION } from './constants';

interface SendMessageArgs {
  command: string;
  data?: any;
  network?: string;
  timeout?: number;
}

interface InternalSendMessageArgs extends SendMessageArgs {
  blockchain: string;
  version: string;
}

export let _sendMessage = (args: InternalSendMessageArgs): Promise<any> => Promise.reject(new Error('o3-dapi-pay plugin not instanciated.'));

export function sendMessage(args: SendMessageArgs): Promise<any> {
  return _sendMessage({
    ...args,
    blockchain: BLOCKCHAIN,
    version: VERSION,
  });
}

export function initMessaging(sendMessageMethod) {
  _sendMessage = sendMessageMethod;
}
