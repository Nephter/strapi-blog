import React from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { format } from 'date-fns';
import Link from 'next/link';

const BlogImage = ({ blog }: { blog: any }) => {
  const url = `http://localhost:1337${blog.attributes.featuredImage.data?.attributes.url}`;

  return (
    <div>
      <div className="relative">
        <Image
          src={url}
          alt={blog.attributes.title || "Blog image"}
          width={500}
          height={500}
          className="rounded-lg"
        />
        <Badge className="absolute top-5 left-5 h-8 bg-white bg-opacity-70 text-black">{blog.attributes.category}</Badge>
      </div>

    </div>
  );
};

const Blog = ({ blog }: { blog: any }) => {
  const formattedDate = format(new Date(blog.attributes.publishedAt), 'dd MMMM, yyyy');
  console.log('---------------------------BLOG PAGE-------------------------------', blog)

  return (
    <Link href={`blog/${blog.attributes.slug}`}>
      <Card className=" ">
        <BlogImage blog={blog} />
        <p className=" text-gray-400 font-medium py-2">{formattedDate}</p>
        <CardHeader className="p-0">
          <CardTitle>{blog.attributes.title}</CardTitle>
          <p className=" text-gray-400 font-medium">{blog.attributes.summary}</p>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default Blog;
