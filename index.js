const server=require('./src/app')
const {sequelize}=require('./src/db');
const PORT=process.env.SERVER_PORT || 3001

sequelize.sync({force:true}).then(()=>{
    server.listen(PORT,()=>{
        console.log(`server listenign at ${PORT}`);
    })
})