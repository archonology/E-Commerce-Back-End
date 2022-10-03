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
  //this foreign key needs to refer to the child category, not the parent category (which would just be "id" - "category_id" is the name of the associated fields) -- maybe, but not sure
  foreignKey: "category_id",
  onDelete: "CASCADE",
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { through: ProductTag, 
  foreignKey: "product_id",
  onDelete: "CASCADE",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { through: ProductTag, 
  foreignKey: "tag_id",
  onDelete: "CASCADE",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
