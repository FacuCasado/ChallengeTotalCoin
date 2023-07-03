const {DataTypes}=require('sequelize');

module.exports=(sequelize)=>{
    sequelize.define(
        "Button",
        {
            id:{
                type:DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            counter:{
                type:DataTypes.INTEGER,
                allowNull:false,
                defaultValue: 0,
                validate:{
                    min: 0
                }
            },
            name:{
                type:DataTypes.INTEGER,
                allowNull:false,
                unique:true
            }
        },
        {timestamps:false}
    )
}