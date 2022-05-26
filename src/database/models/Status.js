module.exports =(sequelize,dataTypes)=>{
    const alias= 'Status';
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
        }
    }; 
    const config={
        tableName: 'Status',
        timestamps: false
    }
    const Status=sequelize.define(alias,cols,config);
   Status.associate=function(models){
       
        Status.hasMany(models.Tarea, { 
            as: "status",
            foreignKey: "idStatus"
        })
    }
    return Status;
}