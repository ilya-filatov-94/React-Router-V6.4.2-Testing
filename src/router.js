import { 
    createBrowserRouter, 
    createRoutesFromElements,
    Route,
    Navigate
} from "react-router-dom";

import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import {BlogPage, blogLoader} from './pages/BlogPage/BlogPage';
import {SinglePage, postLoader} from './pages/SinglePage/SinglePage';
import {CreatePost, createPostAction} from './pages/CreatePost/CreatePost';
import {EditPost, updatePostAction} from './pages/EditPost/EditPost';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ErrorPage from './pages/ErorrPage/ErrorPage';

import RequireAuth from './hoc/RequireAuth/RequireAuth';


const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} >
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />}>
          <Route path="contacts" element={<p>Our contacts</p>} />
          <Route path="team" element={<p>Our team</p>} />
        </Route>
        <Route path="about-us" element={<Navigate to="/about" replace />} />
        <Route path="posts" element={<BlogPage />} loader={blogLoader} errorElement={<ErrorPage />}/>
        <Route path="posts/:id" element={<SinglePage />} loader={postLoader}/>
        <Route
          path="posts/new"
          element={
            <RequireAuth>
              <CreatePost />
            </RequireAuth>
            } action={createPostAction} />
        <Route path="posts/:id/edit" element={<EditPost />} loader={postLoader} action={updatePostAction}/>
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
);

export default router;