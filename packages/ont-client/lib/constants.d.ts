export declare enum ErrorMsg {
    NO_PROVIDER = "NO_PROVIDER",
    RPC_ERROR = "RPC_ERROR",
    MALFORMED_INPUT = "MALFORMED_INPUT",
    CANCELED = "CANCELED",
    INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS",
    UNKNOWN_ERROR = "UNKNOWN_ERROR",
    INVALID_NETWORK = "INVALID_NETWORK"
}
export declare type Asset = 'ONT' | 'ONG' | string;
export declare enum Network {
    MainNet = "MainNet",
    TestNet = "TestNet"
}
export declare enum TransactionType {
    BookKeeper = 2,
    Claim = 3,
    Deploy = 208,
    Invoke = 209,
    Enrollment = 4,
    Vote = 5
}
export interface TxSignature {
    PubKeys: string[];
    M: number;
    SigData: string[];
}
export interface Transaction {
    Version: number;
    Nonce: number;
    GasPrice: number;
    GasLimit: number;
    Payer: string;
    TxType: TransactionType;
    Payload: any;
    Attributes: any[];
    Sigs: TxSignature[];
    Hash: string;
    Height: number;
}
export declare const TEMP_NODE_NAME_MAP: {
    '02bcdd278a27e4969d48de95d6b7b086b65b8d1d4ff6509e7a9eab364a76115af7': string;
    '0251f06bc247b1da94ec7d9fe25f5f913cedaecba8524140353b826cf9b1cbd9f4': string;
    '022e911fb5a20b4b2e4f917f10eb92f27d17cad16b916bce8fd2dd8c11ac2878c0': string;
    '0253719ac66d7cafa1fe49a64f73bd864a346da92d908c19577a003a8a4160b7fa': string;
    '022bf80145bd448d993abffa237f4cd06d9df13eaad37afce5cb71d80c47b03feb': string;
    '02765d98bb092962734e365bd436bdc80c5b5991dcf22b28dbb02d3b3cf74d6444': string;
    '03c8f63775536eb420c96228cdccc9de7d80e87f1b562a6eb93c0838064350aa53': string;
    '038602b1b03637be0de5305639756db44da31b5241acde4cff86f2a181f76d9fee': string;
    '03ee9fd0557e56dab1eb7d9720e749d581fb0ebfd0a15f31bc973834c36e0b9c46': string;
    '0244c959ed3bcd0f96da35d4c615bcf99c8a2d7ddb875142fa8f731bbf681eee44': string;
    '025222dc49b168d47c12a77aa9ae3370f6319cfe97eab4f92b0e7f61597ebcc158': string;
    '03a0cf8494ef9901c7a78df98abb9a8a245961da77c157cb3f31e67db0325f070c': string;
    '02872b863b9bee7a1bd15692330af591603bc3db3444272c00e51997a74ac1756c': string;
    '02584b9aa8d871017ff7d19fb8c7c934eeffbdc6b7de5501855e11c65ffbb67774': string;
    '036f29e06e57f36432ad6bb89dbfd8f81d12e42e7a1a5d454c322ac8e3b94a4bf0': string;
    '026dd0e7b95843181e0f986ecb292f32a2165261ca62d097bba8c54195d527f73f': string;
    '031554b64b4145fb33e83f686081e9148188c2176aaf6a55c874b38fd093e1bc0c': string;
    '033ad721e2443998bc036710b0415ac6ae67e2d490307ba9f4f8f41af62726f34d': string;
    '03c793b05687137803952cb0327aaed8cfb1a7199badd23a34b2fa8417f614faae': string;
    '034a7069c3ba649a762191b62e29992f6b4ba4b670d6502259e15597199cea17d2': string;
    '035e470667371300f87090c3410cfbb24a4b40c6955574ed7dd053644f94922632': string;
    '0349a0e3e018d275a09bb6d4237cb95ee199cf38c81c9a1228ecb72f2c6ab8fdfe': string;
    '02da86115d1c2450eb5780da3ffd21c0e68c9094f990f3c7c489e0c5d50b72ec43': string;
    '02b9000043dba3a3c91185a963babbb975daf73ebfc4f07ab7cb80dc7172145c3d': string;
    '034b87ac6f457e44a33284fcd60d2b2f6ea2a508e553462bba5bf526a0dd285300': string;
    '02a0ca41d2544cdea25fe98102157ea9ca051ac1e565e43847c3f006c9caedc297': string;
    '037acf1bb88200138b44f5d645d0e0c063043addc30db0102eea508db2585f9171': string;
    '03e96d1b80bfa4895763d640e6278c3e31323ba395cb32c9c578d54374e092e134': string;
    '0292c695bb734f849d17ee65977d048ff8a9efae8317ee40589a944eb2bbcd9998': string;
    '0280d0bfde8e6b73e48c15ee062728f890e41f125339d5f36ed8a29430d41c6d57': string;
    '035960c0a6b07532e149fd8e92d19f4670732735df5c0a419a9d79c1a06df8fc23': string;
    '0287fe995c6f27ad0c1a7640f9cc6c2537ed47126cc430e738d96f0390583ac2d2': string;
};
export declare const NODE_DETAIL_URL = "https://explorer.ont.io/nodes/detail/";
//# sourceMappingURL=constants.d.ts.map