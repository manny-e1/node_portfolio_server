import {
  addResume,
  deleteResume,
  getResumes,
  updateResume,
} from './resume.service.js';

export async function httpAddResume(req, res) {
  res.status(201).json(await addResume(req.body));
}

export async function httpGetResumes(_, res) {
  res.status(200).json(await getResumes());
}

export async function httpUpdateResume(req, res) {
  res.status(200).json(await updateResume(req.params.id, req.body));
}
export async function httpDeleteResume(req, res) {
  res.status(200).json(await deleteResume(req.params.id));
}
