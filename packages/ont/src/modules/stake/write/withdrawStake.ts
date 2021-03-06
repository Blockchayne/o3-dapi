import { sendMessage } from '../../../messaging';
import { StakeCommand } from '../constants';

interface WithdrawStakeInput {
  network: string;
  nodePublicKey: string;
  amount: number;
  gasPrice?: number;
  gasLimit?: number;
  broadcastOverride?: boolean;
}

interface WithdrawStakeOutput {
  txid: string;
  nodeUrl: string;
}

export function withdrawStake(data: WithdrawStakeInput): Promise<WithdrawStakeOutput> {
  return sendMessage({
    command: StakeCommand.withdrawStake,
    data,
  });
}
