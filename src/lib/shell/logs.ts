import type { LogCommand, LogResult, LogText, LogSnippet, LogItem } from './types';

let counter = 0;

export interface AddLog {
    (log: (LogCommand | LogResult) & (LogText | LogSnippet)): LogItem;
}

export function addLog(logs: LogItem[]) {
    return ((log) => {
        const enrichedLog = {
            id: ++counter,
            timestamp: Date.now(),
            ...log,
        };
        logs.push(enrichedLog as LogItem);
        return enrichedLog;
    }) satisfies AddLog;
}
