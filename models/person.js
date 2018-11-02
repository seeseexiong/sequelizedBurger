module.exports = function(sequelize, DataTypes) {
  var Person = sequelize.define("Person", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING
  });

  Person.associate = function(models) {
    // Associating Author with Burger
    // When an Author is deleted, also delete any associated Posts
    Person.hasMany(models.Person, {
      onDelete: "cascade"
    });
  };

  return Person;
};
