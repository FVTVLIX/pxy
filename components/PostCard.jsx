import React from 'react'
import moment from 'moment';
import Link from 'next/link';


const PostCard = ({ post }) => {
    return (
        <div className='bg-white shadow-lg rounded-sm p-0 lg:p-8 pb-12 mb-8'>
            <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
                <img
                    src={post.featuredImage.url}
                    alt={post.title}
                    className='object-center absolute h-80 w-full object-cover shadow-lg rounded-t-sm lg:rounded-md'
                />
            </div>

            <h1 className='transition duration-500 text-center mb-8 cursor-pointer hover:text-pink-200 text-3xl font-semibold'>
                <Link href={`/post/${post.slug}`}>
                    {post.title}
                </Link>
            </h1>

            <div className='block lg:flex text-center items-center justify-center mb-8 w-full'>
                <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
                    <img 
                        alt={post.author.name}
                        height='30px'
                        width='30px'
                        className='align-middle rounded-full'
                        src={post.author.photo.url}
                    />
                    <p className='inline align-middle text-gray-700 ml-2 text-lg'>{post.author.name}</p>
                </div>

                <div className='font-medium text-gray-700'>
                    <span>
                        {moment(post.createdAt).format('MMM DD, YYYY')}
                    </span>
                </div>

            </div>
                <p className='text-center text-lg text-gray-800 font-normal px-4 lg:px-20 mb-8'>{post.excerpt}</p>

                <div className='text-center'>
                    <Link href={`/post/${post.slug}`}>
                        <span className='transition duration-200 transform hover:-translate-y-1 inline-block bg-pink-400 text-sm font-medium rounded-full text-white px-4 py-1 cursor-pointer'>
                            Read More
                        </span>
                    </Link>
                </div>
        </div>
    )
}

export default PostCard