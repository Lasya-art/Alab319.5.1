import mongoose from "mongoose";

const gradeSchema = new mongoose.Schema({
  learner_id: { type: Number, required: true },
  class_id: { type: Number, required: true },
  scores: [{ type: Number, required: true }],
});

const Grade = mongoose.model("Grade", gradeSchema);

export default Grade;

