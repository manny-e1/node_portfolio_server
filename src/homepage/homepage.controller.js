import {
  addHomepage,
  deleteHomepage,
  getHomepage,
  getHomepages,
  removeProjectFromHomepage,
  updateHomepage,
} from './homepage.service.js';

export async function httpAddHomepage(req, res) {
  res.status(201).json(await addHomepage(req.body));
}

export async function httpGetHomepages(_, res) {
  res.status(200).json(await getHomepages());
}

export async function httpGetHomepage(req, res) {
  res.status(200).json(await getHomepage(req.params.id));
}

export async function httpUpdateHomepage(req, res) {
  res.status(200).json(await updateHomepage(req.params.id, req.body));
}

export async function httpRemoveProductFromHomepage(req, res) {
  res
    .status(200)
    .json(
      await removeProjectFromHomepage(
        req.params.homepageId,
        req.params.projectId
      )
    );
}

export async function httpDeleteHomepage(req, res) {
  res.status(200).json(await deleteHomepage(req.params.id));
}
