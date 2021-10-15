import {
  addBlog,
  deleteBlog,
  getBlog,
  getBlogs,
  updateBlog,
} from './blog.service.js';

export async function httpAddBlog(req, res) {
  res.status(201).json(await addBlog(req.body));
}

export async function httpGetBlogs(_, res) {
  res.status(200).json(await getBlogs());
}

export async function httpGetBlog(req, res) {
  res.status(200).json(await getBlog(req.params.id));
}

export async function httpUpdateBlog(req, res) {
  res.status(200).json(await updateBlog(req.params.id, req.body));
}

export async function httpDeleteBlog(req, res) {
  res.status(200).json(await deleteBlog(req.params.id));
}
