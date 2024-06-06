import Image from "next/image";
import config from "@/lib/config";
import Container from "@/components/container";
import CategoryLabel from "@/components/blog/category";
import Blog from "@/components/blog";
import Hero from "@/components/hero";
import { fetchAllBlogs, fetchFeaturedBlogs } from "@/lib/strapi/fetch";

const fetchBlogs = async () => {
  const reqOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.API_TOKEN}`
    }
  };

  const request = await fetch(`${config.api}/api/blogs?populate=featuredImage`, reqOptions);
  const response = await request.json();
  console.log('response', response);

  return response;
}

export default async function IndexPage() {
  const blogs = await fetchBlogs();

  // console.log('--------------------------------------------------------------------------blogs', blogs.data[0].attributes);

  const featuredBlogs = await fetchFeaturedBlogs();
  const allBlogs = await fetchAllBlogs();

  console.log('Featured blogs:', featuredBlogs.data);
  console.log('All blogs:', allBlogs.data);

  return (
    <>
      <Hero blogs={featuredBlogs} />
      <Container>
        <div className="grid grid-cols-2 gap-4 border">
          {blogs.data.slice(1).map((blog, index) => {
            const url = `http://localhost:1337${blog.attributes.featuredImage.data?.attributes.url}`;
            return (
              url !== 'http://localhost:1337undefined' ? (
                <Blog blog={blog} key={index} />
              ) : <p key={blog.id}>Image not available</p>
            );
          })}
        </div>
      </Container>
    </>
  )
}
