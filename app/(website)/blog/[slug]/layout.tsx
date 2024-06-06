import { fetchBySlug } from '@/lib/strapi/fetch';
import React from 'react'
import BlogPage from "./page"

const BlogLayout = async ({ params }: { params: any }) => {
  const blogData = await fetchBySlug(params.slug);

  return (
    <div className="flex">
      <BlogPage blogData={blogData} />
      <div>asdf</div>
    </div>
  )
}

export default BlogLayout

