import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const imgurUrl = "https://api.imgur.com/3/account"

export const usersApi = createApi({
  reducerPath: "usersApi",
  tagTypes: ["Users"],
  baseQuery: fetchBaseQuery({
    baseUrl: imgurUrl,
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_IMGUR_ACCESS_TOKEN}`,
    },
  }),
  endpoints: (builder) => ({
    getUserAvatar: builder.query({
      query: (username: string) => `/${username}/avatar?maxwidth=290`,
    }),
    getUserByUsername: builder.query({
      query: (username: string) => `/${username}`,
    }),
  }),
})

export const { useGetUserAvatarQuery, useGetUserByUsernameQuery } = usersApi
