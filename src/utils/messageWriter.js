import chalk from 'chalk';

const log = console.log;
/**
 * To show a message to the console
 *
 * @param {string} message - The message to be displayed
 */
export const info = message => {
    log(chalk.blue(message));
};

/**
 * To show a success message to the console
 *
 * @param {string} message - The message to be displayed
 */
export const success = message => {
    log(chalk.black.bgGreen(message));
};

/**
 * To show an error message to the console
 *
 * @param {string} message - The message to be displayed
 */
export const error = message => {
    log(chalk.white.bgRed(message));
};