import mongoose from 'mongoose';

const projectSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
      unique: true,
    },
    githubLink: String,
    liveLink: String,
  },
  {
    timestamps: true,
  }
);

const ProjectModel = mongoose.model('Project', projectSchema);

export default ProjectModel;
