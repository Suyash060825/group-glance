import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  assignee: { type: String },
  dueDate: { type: Date },
  status: { type: String, enum: ["To-Do","In Progress","Done"], default: "To-Do" },
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true }
});

export default mongoose.model('Task', TaskSchema);
