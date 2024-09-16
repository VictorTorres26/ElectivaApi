import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database";

const Role = sequelize.define("roles", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    active: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1
    }
}, {
    timestamps: true
});

export default Role