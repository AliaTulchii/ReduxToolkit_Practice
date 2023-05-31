import React from 'react'
import PostItem from './PostItem'
import { useDispatch, useSelector, } from 'react-redux'
import { getPosts } from 'feature/post/postSlice'

const Posts = () => {
    const dispatch = useDispatch()
    // const post = useSelector((state) => state.post.posts)

    return (
        <div>
            <button
                type='submit'
                onClick={() => dispatch(getPosts())}
                className='bg-cyan-300  hover:bg-cyan-400 transition-all p-2 text-sm'
            >
                Get posts
            </button>

            {/* {post?.map((post) => (
                <PostItem key={post.title} post={post} />))} */}
            <PostItem/>
            
        </div>
    )
}

export default Posts
