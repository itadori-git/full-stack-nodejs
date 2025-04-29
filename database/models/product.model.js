const bookModel = (sequelize, DataTypes) => {
  const Product = sequelize.define("product",
    {
      productName:{
        type: DataTypes.STRING,
        allowNull: false,
      },
        productPrice:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        productImage:{
            type: DataTypes.STRING,
            allowNull: false,
        },

    }
  );
  return Product;
      }

module.exports = bookModel