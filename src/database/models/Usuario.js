module.exports =(sequelize,dataTypes)=>{
    const alias= 'Usuario';
    const cols={
        id:{
            type: dataTypes.INTEGER(11),
            primaryKey: true, 
            allowNull: false,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING(255),
            allowNull: false
        },
        email:{
            type: dataTypes.STRING(255),
            allowNull: false
        },
        password:{
            type: dataTypes.STRING(255),
            allowNull: false
        }
    }; 
    const config={
        tableName: 'usuario',
        timestamps: false
    }
    const Usuario=sequelize.define(alias,cols,config);

    
    return Usuario;
};