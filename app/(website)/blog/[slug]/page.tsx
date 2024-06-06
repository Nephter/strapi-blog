import React from 'react';
import Image from 'next/image';
import Container from '@/components/container';
import { notFound } from "next/navigation";
import { BlogBody } from '@/components/blog-body';
import { capitalizeFirstLetter, markdownToHtml } from '@/lib/utils';

const BlogPage = async ({ blogData }: { blogData: any }) => {

  if (!blogData) {
    return notFound();
  }

  const url = `http://localhost:1337${blogData?.featuredImage.data?.attributes.formats.large.url}`;

  const content = await markdownToHtml(blogData?.contents || "");

  return (
    <div className="mx-auto">


      {
        url !== 'http://localhost:1337undefined' ? (
          <div key={blogData?.id} className="flex justify-center items-center w-full h-auto">
            <Image
              src={url}
              alt={blogData.title || "Blog image"}
              width={1000}
              height={1000}
              className="rounded-lg"
            />
          </div>
        )
          :
          <p>No!</p>
      }
      <Container >
        <div className=" w-full">

          <div className="text-6xl font-semibold py-4">
            {capitalizeFirstLetter(blogData.title)}
          </div>

          <BlogBody content={content} />
        </div>

      </Container>
    </div>
  );
}

export default BlogPage;


