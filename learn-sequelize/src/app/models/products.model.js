const sequelize = require('../../libs/database/connect.mysql');
const { DataTypes } = require('sequelize'); // Import the built-in data types

// định nghĩa ra một bảng user gồm các trường id, name, address ...
const Products = sequelize.define(
  'Products',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL(),
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

Products.sync().then(() => {
  console.log('oke ss');
});

module.exports = Products;
