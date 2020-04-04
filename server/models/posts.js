mongoose = requere("mongoose");

const { Schema } = mongoose;

const postsSchema = new Schema({
  userId: { type: number, require: true },
  id: { type: number, require: true },
  title: { type: String, require: true },
  body: { type: String, require: true },
});

module.exports = mongoose.model("Post", postsSchema);
