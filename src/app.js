import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDatabase from './config/db.js';

// import userRoutes from './user/user.route.js';
import projectRoutes from './project/project.route.js';
import resumeRoutes from './resume/resume.route.js';
import blogRoutes from './blog/blog.route.js';
import contactRoutes from './contact/contact.route.js';
import homepageRoutes from './homepage/homepage.route.js';

import { errorHandler, notFound } from './middleware/error.js';

dotenv.config();

connectDatabase();

const app = express();

app.use(cors());
app.use(express.json());

// app.use('/users', userRoutes);
app.use('/projects', projectRoutes);
app.use('/resumes', resumeRoutes);
app.use('/blogs', blogRoutes);
app.use('/contacts', contactRoutes);
app.use('/homepages', homepageRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
