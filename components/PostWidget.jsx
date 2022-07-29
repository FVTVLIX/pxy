import React, { useState, useEffect } from 'react'
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../services';



const PostWidget = ({ categories, slug }) => {

    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        if (slug) {
            getSimilarPosts(categories, slug)
                .then((result) => setRelatedPosts(result))
        } else {
            getRecentPosts()
                .then((result) => setRelatedPosts(result))
        }
    }, [slug])

    console.log(relatedPosts)

    return (
        <div className='bg-white shadow-lg rounded-sm p-8 mb-8'>
            <h3 className='text-xl mb-8 font-semibold border-b pb-4 banner-title'>
                {slug ? 'Related Posts' : 'Recent Posts'}
            </h3>

            {relatedPosts.map((post) => (
                <div key={post.title} className='flex items-center w-full'>
                    <div className='w-16 flex-none'>
                        <img 
                            alt={post.title}
                            height='60px'
                            width='60px'
                            className='align-middle rounded-full mb-2 mt-2' 
                            src={post.featuredImage.url}
                        />
                    </div>
                    <div className='flex-grow ml-4'>
                        <p className='text-gray-500 font-xs related-title'>
                            {moment(post.createdAt).format('MMM DD, YYYY')}
                        </p>
                        <Link href={`/post/${post.slug}`} key={post.title} className='text-md'>
                            <p className='text-md title-font cursor-pointer'>{post.title}</p>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostWidget