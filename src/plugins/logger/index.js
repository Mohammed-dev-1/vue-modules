/**
 * Configurations of logger.
 */

import * as winston from "winston";
import winstonRotator from 'winston-daily-rotate-file';
import BrowserConsole from 'winston-transport-browserconsole';

const level = "debug";
winston.configure({
    transports: [
        new BrowserConsole(
            {
                format: winston.format.simple(),
                level,
            },
        ),
    ],
});

winston.debug("DEBUG ", {a: 1, b: "two"});

const consoleConfig = [
    new winston.transports.Console({
        'colorize': true
    })
];
 
const createLogger = new winston.Logger({
    'transports': consoleConfig
});
 
const successLogger = createLogger;
successLogger.add(winstonRotator, {
    'name': 'access-file',
    'level': 'info',
    'filename': '../logs/access.log',
    'json': false,
    'datePattern': 'yyyy-MM-dd-',
    'prepend': true
});
 
const errorLogger = createLogger;
errorLogger.add(winstonRotator, {
    'name': 'error-file',
    'level': 'error',
    'filename': '../logs/error.log',
    'json': false,
    'datePattern': 'yyyy-MM-dd-',
    'prepend': true
});
 
export {
    successLogger,
    errorLogger
};