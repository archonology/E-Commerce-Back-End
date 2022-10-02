// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "id",
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "id",
  onDelete: "CASCADE",
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  foreignKey: "tag_id", //is this the right foreign key: Should it be swapped with line 23 here?
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  foreignKey: "product_id", //right key? from ProductTag model
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
