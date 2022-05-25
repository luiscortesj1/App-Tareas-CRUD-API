module.exports =(sequelize,dataTypes)=>{
    const alias= 'User';
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
        lastname:{
            type: dataTypes.STRING(255)
        },
        email:{
            type: dataTypes.STRING(255),
            allowNull: false
        },
        password:{
            type: dataTypes.STRING(255),
            allowNull: false
        },
        cellphone:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        address:{
            type: dataTypes.STRING(255),
            allowNull: false
        },
        image:{
            type:dataTypes.STRING(255),
        },
        idRol:{
            type: dataTypes.INTEGER(11)
        }
    }; 
    const config={
        tableName: 'users',
        timestamps: false
    }
    const User=sequelize.define(alias,cols,config);

    User.associate=function(models){
        User.belongsTo(models.Rol,{
            as:'rol',
            foreignKey:'idRol'
        })
    }
    return User;
    
}