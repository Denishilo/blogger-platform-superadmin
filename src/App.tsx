import React from 'react';
import './App.css';
import {Header} from "./components/header/header";
import {Navigation} from "./components/navigation/navigation";
import {Blogs} from "./components/blogs/blogs";
import {Posts} from "./components/posts/posts";
import {Navigate, Route, Routes} from "react-router-dom";
import {useAppSelector} from "./redux/store";

function App() {
    const isPageBlogsActive = useAppSelector<boolean>(state => state.app.isPageBlogsActive)
    return (
        <>
            <Header/>
            <section className='sectionWrapper'>
                <Navigation/>
                <div className='contentWrapper'>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/blogs'}/>}/>
                        <Route path={'/blogs'} element={isPageBlogsActive ? <Blogs/> : <Navigate to={'/posts'}/>}/>
                        <Route path={'/posts'} element={<Posts/>}/>
                    </Routes>
                </div>
            </section>
        </>
    );
}

export default App;
