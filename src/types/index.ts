export interface MockTransaction {
    hash: string;
    from: string;
    to: string;
    value: number;
    status: "pending" | "confirmed" | "failed";
    timestamp: Date;
    function: string;
}