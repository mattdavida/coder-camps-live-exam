import * as mongoose from "mongoose";

export interface IMovie extends mongoose.Document{
  name: String
}

let MovieSchema = new mongoose.Schema({
  name:String
});

export default mongoose.model<IMovie>("Movie", MovieSchema);
