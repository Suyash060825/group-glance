import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, default: "In Progress" }
});

export default mongoose.model('Project', ProjectSchema);
