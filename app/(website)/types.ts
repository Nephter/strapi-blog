export type PostsProps = {
  data: [{
    id: number,
    attributes: {
      Title: string,
      Category: string,
      Summary: string,
      isFeatured: boolean,
      Content: [{
        type: string,
        children: [{
          type: string,
          text: string
        }]
      }],
      createAt: string,
      updatedAt: string,
      publishedAt: string,
      slug: string,
      Thumbnail: {
        name: string;
        alternativeText: string | null;
        caption: string | null;
        width: number;
        height: number;
        formats: {};
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: string | null;
        provider: string;
        provider_metadata: any | null;
        createdAt: string;
        updatedAt: string;
      },
      FeaturedImage: {
        name: string;
        alternativeText: string | null;
        caption: string | null;
        width: number;
        height: number;
        formats: {};
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: string | null;
        provider: string;
        provider_metadata: any | null;
        createdAt: string;
        updatedAt: string;
      },
    },
  }],
  meta: {
    pagination: {
      page: number,
      pageSize: number,
      pageCount: number,
      total: number
    }
  }
}