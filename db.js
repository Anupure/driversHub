const mongoose = require("mongoose");
const { string, number } = require("zod");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    email: {type: String, unique: true},
    password: String,
    firstname: String,
    lastName: String,
})

const adminSchema = new Schema({
    email: {type: String, unique: true},
    password: String,
    firstname: String,
    lastName: String,
})

const courseSchema = new Schema({
    title: String,
    description: String,
    price:Number,
    imageUrl:String,
    creatorId: Schema.ObjectId
})

const purchaseSchema = new Schema ({
    userId: ObjectId,
    courseId: ObjectId
})

const userModel = mongoose.model("user", userSchema)
const courseModel = mongoose.model("course", courseSchema)
const adminModel = mongoose.model("admin", adminSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);


module.exports = {
    userModel,
    courseModel,
    adminModel,
    purchaseModel
}

