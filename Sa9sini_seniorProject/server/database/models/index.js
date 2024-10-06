module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    // userid: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   allowNull: false,
    //   autoIncrement: true,
    // },

    UserName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // lastName: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // role: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },

    // adress: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // status: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
  });
  return User;
};
