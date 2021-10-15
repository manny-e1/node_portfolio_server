import { ErrorResponse } from '../helpers/errorResponse.js';
import HomepageModel from './homepage.model.js';

export async function addHomepage(body) {
  if (body.projects.length > 3)
    throw new ErrorResponse("Can't add more than 3 projects", 400);
  await HomepageModel.create({ ...body });
  return { message: 'New homepage added' };
}

export async function getHomepages() {
  return HomepageModel.find();
}

export async function getHomepage(id) {
  return HomepageModel.findById(id);
}

export async function updateHomepage(id, body) {
  const homepage = await getHomepage(id);
  if (body.projects) {
    const { projects } = body;
    if (homepage.projects.length === 3)
      throw new ErrorResponse("Can't add more than 3 projects", 400);
    const projectExist = homepage.projects?.some(
      (project) =>
        project.title === projects[0].title &&
        project.description === projects[0].description
    );
    if (projectExist)
      throw new ErrorResponse(
        `Project with title ${projects[0].title} is already in homepage`
      );
    homepage.projects = [...homepage.projects, ...projects];
  }
  if (body.isActive)
    await HomepageModel.updateMany({ isActive: true }, { isActive: false });

  const { name, talent, isActive, phone, email, image } = body;
  homepage.name = name ?? homepage.name;
  homepage.isActive = isActive ?? homepage.isActive;
  homepage.talent = talent ?? homepage.talent;
  homepage.phone = phone ?? homepage.phone;
  homepage.email = email ?? homepage.email;
  homepage.image = image ?? homepage.image;

  return homepage.save();
}

export async function removeProjectFromHomepage(homepageId, projectId) {
  const homepage = await getHomepage({ _id: homepageId });
  const projectIndex = homepage.projects?.findIndex(
    (project) => project._id.toString() === projectId
  );
  if (projectIndex === -1)
    throw new ErrorResponse('Project not found in homepage', 404);
  homepage.projects?.splice(projectIndex, 1);
  return homepage.save();
}

export async function deleteHomepage(id) {
  return HomepageModel.findByIdAndDelete(id);
}
