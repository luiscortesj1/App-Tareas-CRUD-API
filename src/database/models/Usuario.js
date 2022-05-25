module.exports =(sequelize,dataTypes)=>{
    const alias= 'Tarea';
    const cols={
        id:{
            type: dataTypes.BIGINT(20),
            primaryKey: true, 
            allowNull: false,
            autoIncrement: true
        },
        nombre:{
            type: dataTypes.STRING(255),
            allowNull: false
        },
        informacion:{
            type: dataTypes.STRING(255),
            allowNull: false
        },
        fechaCreacion:{
            type: dataTypes.DATETIME(255),
            allowNull: false
        },
        fechaModificacion:{
            type: dataTypes.DATETIME(255),
            allowNull: false
        },idPrioridad:{
            type: dataTypes.INTEGER(11)
        },
        idStatus:{
            type: dataTypes.INTEGER(11)
        }
    }; 
    const config={
        tableName: 'tareas',
        timestamps: false
    }
    const Tarea=sequelize.define(alias,cols,config);
    Tarea.associate=function(models){
        Tarea.belongsTo(models.Prioridad,{
            as:'prioridad',
            foreignKey:'idPrioridad'
        })
        Tarea.belongsTo(models.Status,{
            as:'status',
            foreignKey:'idStatus'
        })
        
    }
   
    return Tarea;
    
}