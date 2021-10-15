import e from 'express';
import BlogModel from './blog.model.js';

export async function addBlog(body) {
  await BlogModel.create({ ...body });
  return { message: 'New blog added' };
}

export async function getBlogs() {
  return BlogModel.find();
}

export async function getBlog(id) {
  return BlogModel.findById(id);
}

export async function updateBlog(id, body) {
  return BlogModel.updateOne({ _id: id }, body);
}

export async function deleteBlog(id) {
  return BlogModel.findByIdAndDelete(id);
}
