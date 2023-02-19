const mongoose = require("mongoose")
// const {MONGOURI}=require("./config/keys")

const mongoURI = 'mongodb+srv://hungry:%40Jts952022@cluster0.cayv6ee.mongodb.net/hungry?retryWrites=true&w=majority'

const mongoDB = async () => {
    mongoose.set("strictQuery", false);

    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err)
            console.log("---", err)
        else {
            console.log("Connected to database successfully");
            const fetched_data = await mongoose.connection.db.collection("food_items")
            fetched_data.find({}).toArray(async function (err, data) {

                const foodCategory = await mongoose.connection.db.collection("foodCategory")
                foodCategory.find({}).toArray(function (err, catData) {
                    if (err) console.log(err)
                    else {
                        global.food_items = data;
                        global.foodCategory=catData
                    }

                })

                // if(err)console.log(err)
                // else{
                //     global.food_items=data;
                // }
            })
        }
    })

}

module.exports = mongoDB