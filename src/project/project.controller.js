import {
  addProject,
  deleteProject,
  getProjects,
  updateProject,
} from './project.service.js';

export async function httpAddProject(req, res) {
  res.status(201).json(await addProject(req.body));
}

export async function httpGetProjects(_, res) {
  res.status(200).json(await getProjects());
}

export async function httpUpdateProject(req, res) {
  res.status(200).json(await updateProject(req.params.id, req.body));
}

export async function httpDeleteProject(req, res) {
  res.status(200).json(await deleteProject(req.params.id));
}
