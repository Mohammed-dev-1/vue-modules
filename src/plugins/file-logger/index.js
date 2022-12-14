import fs from 'fs'
// const fs = require("fs")
const {keys} = Object
const {Console} = console

/**
 * Redirect console to a file.  Call without path or with false-y
 * value to restore original behavior.
 * @param {string} [path]
 */
function file(path) {
    const con = path ? new Console(fs.createWriteStream(path)) : null

    keys(Console.prototype).forEach(key => {
        if (path) {
            this[key] = (...args) => con[key](...args)
        } else {
            delete this[key]
        }
    })
}

// patch global console object and export
console.file = file

const logger = console.file

export { logger }