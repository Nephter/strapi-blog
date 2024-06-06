import config from "../config";

export const fetchFeaturedBlogs = async () => {
  const reqOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.API_TOKEN}`,
      cache: 'no-store'
    },
  };

  const request = await fetch(`${config.api}/api/blogs?filters[isFeatured][$eq]=true&populate=featuredImage`, reqOptions);
  const response = await request.json();

  return response;
}

export const fetchBySlug = async (slug: string) => {
  const reqOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.API_TOKEN}`,
      cache: 'no-store'
    },
  };

  const request = await fetch(`${config.api}/api/blogs?filters[slug][$eq]=${slug}&populate=featuredImage`, reqOptions);
  const response = await request.json();
  // console.log('--------------RES------------', response.data[0].attributes)
  return response.data[0].attributes;
}

export const fetchAllBlogs = async () => {
  const reqOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.API_TOKEN}`,
      cache: 'no-store'
    }
  };

  const request = await fetch(`${config.api}/api/blogs?populate=featuredImage`, reqOptions);
  const response = await request.json();

  return response;
}