import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IFilters } from "./filterSlice"
import { ISearchFilters } from "./searchFilterSlice"

const imgurUrl = "https://api.imgur.com/3"

export const galleryApi = createApi({
  reducerPath: "galleryApi",
  tagTypes: ["Gallery"],
  baseQuery: fetchBaseQuery({
    baseUrl: imgurUrl,
    headers: {
      Authorization: `Client-ID d7c5207abe0dfc3`,
    },
  }),
  endpoints: (builder) => ({
    getAllGalleries: builder.query({
      query: ({ filters, page }: { filters: IFilters; page: number }) =>
        `gallery/${filters.section}/${filters.sort}/${filters.window}/${page}?showViral=${filters.showViral}`,
    }),
    getSingleGallery: builder.query({
      query: (galleryId?: string) => `gallery/${galleryId}`,
    }),
    getGalleryComments: builder.query({
      query: (galleryId?: string) => `gallery/${galleryId}/comments/best`,
    }),
    searchGalleries: builder.query({
      query: ({ filters, q }: { filters: ISearchFilters; q: string }) =>
        `/gallery/search/${filters.sort}/${filters.window}/${filters.page}?q=${q}`,
    }),
    getTags: builder.query({
      query: (tag: void) => "/tags",
    }),
  }),
})

export const {
  useGetAllGalleriesQuery,
  useGetGalleryCommentsQuery,
  useGetSingleGalleryQuery,
  useSearchGalleriesQuery,
  useGetTagsQuery,
} = galleryApi
