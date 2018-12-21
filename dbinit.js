// This file only gets run once to create the database table.
// This should be expanded when new models get added.

// Import Sequelize stuff
const Sequelize = require('sequelize');

// Set up new db connection
const sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: 'database.sqlite',
	operatorsAliases: false,
});

// Import model
const Shop = sequelize.import('models/Users');

// Establish arguments for sequelize sync
const force = process.argv.includes('--force') || process.argv.includes('-f');

// Sync
sequelize.sync({ force }).then(async () => {

	console.log('Database synced');
	sequelize.close();

}).catch(console.error);