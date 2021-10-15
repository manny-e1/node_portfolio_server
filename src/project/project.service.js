import ProjectModel from './project.model.js';

export async function addProject(body) {
  await ProjectModel.create({ ...body });
  return { message: 'New project has been added.' };
}

export async function getProjects() {
  return ProjectModel.find({});
}

export async function updateProject(id, body) {
  return ProjectModel.updateOne({ _id: id }, body);
}

export async function deleteProject(id) {
  return ProjectModel.findByIdAndDelete(id);
}
