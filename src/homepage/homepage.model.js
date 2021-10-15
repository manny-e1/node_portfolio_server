import mongoose from 'mongoose';

const homepageSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    talent: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    projects: [
      {
        title: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        githubLink: String,
        liveLink: String,
      },
    ],
    isActive: { type: String, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

const HomepageModel = mongoose.model('Homepage', homepageSchema);

export default HomepageModel;
