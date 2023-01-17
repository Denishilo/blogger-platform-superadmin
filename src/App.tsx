import React from 'react';
import './App.css';
import {Header} from "./components/header/header";
import {Navigation} from "./components/navigation/navigation";
import {Blogs} from "./components/blogs/blogs";
import {Posts} from "./components/posts/posts";
import {Navigate, Route, Routes} from "react-router-dom";
import {useAppSelector} from "./redux/store";
import {Blog} from "./components/blog/blog";
import {Post} from "./components/posts/post/post";
import {AddBlog} from "./components/addBlog/addBlog";

function App() {
    const isPageBlogsActive = useAppSelector<boolean>(state => state.app.isShowBlogs)

    return (
        <>
            <Header/>
            <section className='sectionWrapper'>
                <Navigation/>
                <div className='contentWrapper'>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/blogs'}/>}/>
                        <Route path={'/blogs'} element={isPageBlogsActive ? <Blogs/> : <Navigate to={'/posts'}/>}/>
                        <Route path={`/blog/:id`} element={<Blog/>}/>
                        <Route path={`/post/:id`} element={<Post/>}/>
                        <Route path={'/posts'} element={<Posts/>}/>
                        <Route path={'/blogs/add'} element={<AddBlog/>}/>
                    </Routes>
                </div>
            </section>
        </>
    );
}

export default App;
