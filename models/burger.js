module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Burger", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Burger.associate = function(models) {
    // We're saying that a Burger should belong to a Person
    // A Burger can't be created without a Person due to the foreign key constraint
    Post.belongsTo(models.Person, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};
