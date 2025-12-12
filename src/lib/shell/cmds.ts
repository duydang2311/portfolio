import invariant from 'tiny-invariant';
import type { CommandHandler, LogItem, LogText } from './types';
import { type AddLog } from './logs';

const commandHandlers: CommandHandler[] = [];

export interface AddCommand {
    (log: LogText): LogItem;
}

export function addCommand(addLog: AddLog) {
    return ((log) => {
        const enrichedLog = addLog({
            type: 'command',
            text: log.text,
        } as LogItem);
        onCommandAdded(addLog)(enrichedLog);
        return enrichedLog;
    }) satisfies AddCommand;
}

export function addCommandHandler(handler: CommandHandler) {
    commandHandlers.push(handler);
}

function onCommandAdded(addLog: AddLog) {
    return (log: LogItem) => {
        invariant(log.type === 'command', 'log type must be "command"');
        invariant(log.text, 'log text must not be null');

        const [cmd, param] = log.text.split(' ');
        if (!commandHandlers.some((handler) => handler(cmd, param))) {
            addLog({
                type: 'result',
                snippet: 'CMD_UNKNOWN',
                props: {
                    command: log.text,
                },
            });
        }
    };
}

function cmdHandler(name: string, fn: () => void) {
    return ((cmd) => {
        if (cmd !== name) {
            return false;
        }
        fn();
        return true;
    }) satisfies CommandHandler;
}

export function cmdHelpHandler(addLog: AddLog) {
    return cmdHandler('help', () => {
        addLog({
            type: 'result',
            snippet: 'CMD_HELP',
        });
    });
}

export function cmdClearHandler(logs: LogItem[]) {
    return cmdHandler('clear', () => {
        logs.splice(0);
    });
}

export function cmdWhoAmIHandler(addLog: AddLog) {
    return cmdHandler('whoami', () => {
        addLog({
            type: 'result',
            snippet: 'CMD_WHO_AM_I',
        });
    });
}

export function cmdPfpHandler(addLog: AddLog) {
    return cmdHandler('pfp', () => {
        addLog({
            type: 'result',
            snippet: 'CMD_PFP',
        });
    });
}
