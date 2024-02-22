import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Header from './component/Header';
import Footer from './component/Footer';
import SideBar from './component/Sidebar';
import CreatePost from './component/CreatePost';
import PostList from './component/PostList';
import PostListProvider from './store/post-list-store';

function App() {
  const [selectedTab, setSelectedTab] = useState("Home")

  return (
    <PostListProvider>
      <div className='app-container'>
        <SideBar selectedTab = {selectedTab} setSelectedTab = {setSelectedTab}></SideBar>
        <div className='content'>
          <Header></Header>
          {selectedTab === "Home" ?( <PostList />) : (<CreatePost />)}
          <Footer></Footer>
        </div>
      </div>
      </PostListProvider>
  )
}

export default App
