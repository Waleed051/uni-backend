const mongoose = require("mongoose");
const connectDb = async () => {
  console.log("url", process.env.MONGO_URI);
  try {
    var url =
      "mongodb+srv://Huzaifa:Hanzala12@cluster0.n82wf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
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
