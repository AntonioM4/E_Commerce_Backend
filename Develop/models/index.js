// import models
const Product = require('./product');
const Category = require('./category');
const Tag = require('./tag');
const ProductTag = require('./product-tag');

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

Product.belongsTo(Category, {
  foreignKey: "category_id"
})

Category.hasMany(Product, {
  foreignKey: "category_id"
})

Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
  }
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};