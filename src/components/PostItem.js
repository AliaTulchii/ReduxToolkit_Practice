import React from 'react'

const PostItem = ({post}) => {
    return (
        <div className='flex w-full bg-purple-500 hover:bg-purple-300 transition-all py-1 px-2 text-white rounded-sm cursor-pointer mt-4'>
            {/* {post.title} */}
            Post title
        </div>
    )
}

export default PostItem