const {Sequelize} = require('sequelize');
// You can choose to connect to sqlite here if you wish to
// Also, if you are using mysql on your local machine you need to update the credentials below
const sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URLnpm || 'mysql://root:Thunderbird5@localhost/stocks-database', {logging: false});


// const sequelize = new Sequelize('mysql', 'project-4', 'password', {
//     'dialect': 'mysql',
//     'host': "localhost",
//     "port": "3306"
// });


//Make sure you run this: npm install sqlite3 --save
// const sequelize = new Sequelize({
//     dialect: 'sqlite',
//     storage: 'path/to/database.sqlite'
// });

module.exports = {sequelize};