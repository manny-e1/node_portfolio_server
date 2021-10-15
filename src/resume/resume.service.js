import ResumeModel from './resume.model.js';

export async function addResume(body) {
  return ResumeModel.create({ ...body });
}

export async function getResumes() {
  return ResumeModel.find();
}

export async function updateResume(id, body) {
  if (body.isActive)
    await ResumeModel.updateMany({ isActive: true }, { isActive: false });
  return ResumeModel.updateOne({ _id: id }, body);
}

export async function deleteResume(id) {
  return ResumeModel.findByIdAndDelete(id);
}
