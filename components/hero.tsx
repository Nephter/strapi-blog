import React from 'react'
import Image from 'next/image'
import { Card, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { format } from 'date-fns';

const renderHeroBlog = ({ blog }: { blog: any }) => {
  const formattedDate = format(new Date(blog.attributes.publishedAt), 'dd MMMM, yyyy');
  const url = `http://localhost:1337${blog.attributes.featuredImage.data?.attributes.url}`;

  return (
    < >
      <div className="absolute bottom-10 p-4 w-full flex justify-between">
        {blog &&
          <Card className="bg-transparent text-white border-none p-2 ">
            <Badge className="h-8 bg-white bg-opacity-70 text-black">
              {blog.attributes.category}
            </Badge>
            <p className=" text-white font-medium text-sm py-2">{formattedDate}</p>
            <CardHeader className="p-0">
              <CardTitle>
                {blog.attributes.title}
              </CardTitle>
              <div className="max-w-96">
                {blog.attributes.summary}
              </div>
            </CardHeader>
          </Card>}
      </div >

      <div className="w-full h-[98vh] relative -z-10 -top-[55px]">
        {
          url !== 'http://localhost:1337undefined' ? (
            <Image
              key={blog.id}
              src={url}
              alt={blog.attributes.title || "Blog image"}
              fill
              className="rounded-lg"
              quality={100}
            />
          ) : <p>Image not available</p>
        }
      </div>

    </>
  )
}

const Hero = ({ blogs }: { blogs: any }) => {

  return (
    <div className="p-2">
      <div >
        {blogs && renderHeroBlog({ blog: blogs.data[0] })}
      </div>
    </div>
  )
}

export default Hero