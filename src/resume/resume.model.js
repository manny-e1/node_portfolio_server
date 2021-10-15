import mongoose from 'mongoose';

const resumeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const ResumeModel = mongoose.model('Resume', resumeSchema);

export default ResumeModel;
