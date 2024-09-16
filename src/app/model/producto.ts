import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database";
import  Role  from "./role";

const Producto = sequelize.define("productos", {
    codigo: {
        type: DataTypes.STRING(8),
        primaryKey: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    stockmax: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    srockmin: {
        type: DataTypes.DOUBLE,
        defaultValue: 1,
        allowNull: false
    },
    precio: {
        type: DataTypes.DOUBLE,
        defaultValue: 1,
        allowNull: false
    },
    codcat: {
        type: DataTypes.STRING(100),
        defaultValue: 1,
        allowNull: false
    }
}, {
    timestamps: false
});

// User.hasOne(Role, {
//     foreignKey: "id_role",
//     sourceKey: "id"
// });

// Role.belongsTo(User, {
//     foreignKey: "id",
//     targetKey: "id"
// });



// export async function sycronize() {
//     await User.sync();
//     await Role.sync();
// }

// sycronize();


export default Producto
