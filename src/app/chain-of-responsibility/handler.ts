export abstract class Handler {
    public successor: Handler;
    public rezult: string;
    public abstract handleRequest(request: number): void;
}
