const {Sequelize, DataTypes, Model} = require('sequelize');
const {sequelize} = require('../lib/db');


class Portfolio extends Model {

}

Portfolio.init ({
    symbol: {
        type: DataTypes.STRING,
    },
    quantity: {
        type: DataTypes.INTEGER,

    },
    price: {
        type: DataTypes.STRING,
    },
}, {
    sequelize, 
    modelName: 'Portfolio', 
});

class Wallet extends Model {

}

Wallet.init ({
    value: {
        type: DataTypes.STRING,
    }

}, {
    sequelize, 
    modelName: 'Wallet',
});

// const seedTheWallet = async () => {
//     let wallet = await Wallet.findOne({});
//     if(!wallet){
//         await Wallet.create({value: 1000000});
//     }
// };
// seedTheWallet();

sequelize.sync({alter: true});

module.exports = {
    Portfolio, Wallet
};