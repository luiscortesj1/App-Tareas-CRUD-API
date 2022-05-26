module.exports =(sequelize,dataTypes)=>{
    const alias= 'Usuario';
    const cols={
        id:{
            type: dataTypes.INTEGER(11),
            primaryKey: true, 
            allowNull: false,
            autoIncrement: true
        },
        nombre:{
            type: dataTypes.STRING(255),
            allowNull: false
        },
        mail:{
            type: dataTypes.STRING(255),
            allowNull: false
        },
        password:{
            type: dataTypes.STRING(255),
            allowNull: false
        }
    }; 
    const config={
        tableName: 'usuarios',
        timestamps: false
    }
    const Usuario=sequelize.define(alias,cols,config);

    
    return Usuario;
};