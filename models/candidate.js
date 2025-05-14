module.exports = (sequelize, DataTypes) => {
    const Candidate = sequelize.define('Candidate', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      phno: {
        type: DataTypes.STRING,
        allowNull: false
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    return Candidate;
  };
  