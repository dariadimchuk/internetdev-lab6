const Pool = require('pg').Pool;



const pool = new Pool({  
    host: 'ec2-52-45-14-227.compute-1.amazonaws.com',  
    user: 'epagupynpixfzy',  
    database: 'dep6krvenjdjrr',  
    password: '800f53a88181f6fb30c4e1cbb650da363db10e6c9dfab75799bf750ffa00a928',
    port: 5432,
    ssl: false
});  

module.exports = pool;