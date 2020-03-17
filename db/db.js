const Pool = require('pg').Pool;



const pool = new Pool({  
    host: 'ec2-52-23-14-156.compute-1.amazonaws.com',  
    user: 'byxgmdwxzxjysn',  
    database: 'deg4s4b3pla68a',  
    password: '7272f2e9b425f779fe4495ae5aa0f391fb3ad9dcc44629e442bb642dd4ea82d4',
    port: 5432,
    ssl: false
});  

module.exports = pool;