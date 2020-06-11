import React from "react";
import classes from "./Posts.module.css";
import Post from "./Post/Post";



const Posts = (props) => {

  let myRef = React.createRef();
  const clickHandler = () => {
    let text = myRef.current.value;
    props.addPost()

 }

 let postsItems = props.posts.map(
  (post) => {
    return <Post name={post.name} likesCounter={post.likesCounter} ava={post.ava} />
  }
);
 const changeHandler = (event) => {
   let text = myRef.current.value;
  props.updateNewPostText(text) }
  return (
      <div>
        <textarea ref={myRef} value={props.newPostText} onChange={changeHandler}></textarea>
        <button onClick={clickHandler} >Add Post</button>
        <button>Remove</button>
        <div>
          <div>Posts</div>
        </div>
        <div>
          {postsItems}
        </div>
      </div>

    )
}

export default Posts;

