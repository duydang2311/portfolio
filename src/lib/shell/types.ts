export interface LogCommand {
    type: 'command';
}

export interface LogResult {
    type: 'result';
}

export type LogText = {
    text: string;
    snippet?: never;
    args?: never;
};

export type LogSnippet = {
    text?: never;
    snippet: string;
    props?: Record<PropertyKey, unknown>;
};

export type LogItem = {
    id: number;
    timestamp: number;
} & (LogCommand | LogResult) &
    (LogText | LogSnippet);

export interface CommandHandler {
    (cmd: string, param: string): boolean;
}
