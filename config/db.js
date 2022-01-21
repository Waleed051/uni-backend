const mongoose = require("mongoose");
const connectDb = async () => {
  console.log("url", process.env.MONGO_URI);
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://Huzaifa:ecommerce12@ecommerce.fwsfb.mongodb.net/proshop?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );
    console.log(
      `Mongoose Connected ======> ${conn.connection.host}`.cyan.underline
    );
  } catch (err) {
    console.log(
      `Mongoose Connect Failed ======> ${err.message}`.red.underline.bold
    );
  }
};
module.exports = connectDb;
