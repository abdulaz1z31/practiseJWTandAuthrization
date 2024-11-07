import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    password: {type:String, required:true}
  },
  { timestamps: true }
);

export const Admin = mongoose.model("Admin", adminSchema);



const superAdminSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    password: {type:String, required:true},
    email: { type: String, required: true }
  },
  { timestamps: true }
);

export const SuperAdmin = mongoose.model("superadmins", superAdminSchema);
