const mysql = require('mysql2')

const pool = mysql.createPool({
    host: '172.17.0.2',
    user: 'root',
    password: 'root',
    database: 'exam',
    waitForConnections: true,
    connectionLimit: 30,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
})

module.exports = pool