module.exports = (sequelize, DataType) => {

    const Technology = sequelize.define('Technology', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        note: {
            type: DataType.STRING,
            defaultValue: null
        }
    }, {
        classMethods: {
            associate: (models) => {
                Technology.belongsTo(models.User);
            }
        }
    });

    return Technology;

};