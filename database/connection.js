//hami yaha database connection ko code /logic lekhxum
const {Sequelize,DataTypes} = require('sequelize')
// const sequelize = require('sequelize')
// const sequelize = sequelize.Sequelize
// const DataTypes = sequelize.DataTypes

// const bookModel = require('./models/book.model.js')
// bookModel()
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

db.books = require("./models/book.model.js")(sequelize,DataTypes)
db.users = require("./models/user.model.js")(sequelize,DataTypes)
db.products = require("./models/product.model.js")(sequelize,DataTypes)
//migrate garnne code chaiyo 
sequelize.sync({alter : true})
.then(()=>{
    console.log("table created successfully")
})
module.exports = db