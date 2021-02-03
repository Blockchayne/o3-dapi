export interface DeployArgs {
    network?: any;
    name: string;
    version: string;
    author: string;
    email: string;
    description: string;
    needsStorage?: boolean;
    dynamicInvoke?: boolean;
    isPayable?: boolean;
    parameterList: string;
    returnType: string;
    code: string;
    networkFee?: string;
    broadcastOverride?: boolean;
}
export interface DeployOutput {
    txid: string;
    nodeUrl: string;
}
//# sourceMappingURL=deploy.d.ts.map