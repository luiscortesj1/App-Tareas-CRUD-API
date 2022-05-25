module.exports =(sequelize,dataTypes)=>{
    const alias= 'Prioridad';
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
        }
    }; 
    const config={
        tableName: 'Prioridad',
        timestamps: false
    }
    const Prioridad=sequelize.define(alias,cols,config);
   Prioridad.associate=function(models){
       
        Prioridad.hasMany(models.Product, { 
            as: "prioridad",
            foreignKey: "idPrioridad"
        })
    }
    return Prioridad;
}