import mongoose from "mongoose";

const db = {
  connect: function () {
    mongoose.connect(
      process.env.MONGODB_URL || "mongodb://localhost:27017/Visitors",
      { useNewUrlParser: true }
    );
    mongoose.connection.on("error", function (e) {
      console.error(e);
    });
  },
};

export default db;
