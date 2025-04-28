//hami yaha database connection ko code /logic lekhxum
const {Sequelize,DataTypes} = require('sequelize')
// const sequelize = require('sequelize')
// const sequelize = sequelize.Sequelize
// const DataTypes = sequelize.DataTypes

const sequelize = new Sequelize("postgresql://postgres.iqubuoukzysjzbhzwiop:neymarlovesbrazil@aws-0-us-east-2.pooler.supabase.com:6543/postgres")
sequelize.authenticate()
.then(()=>{
    console.log("database connected successfully")
})
.catch((err)=>{
    console.log("Error ayo" + err)
})

const db ={}
db.Sequelize = Sequelize
db.sequelize = sequelize

module.exports = db