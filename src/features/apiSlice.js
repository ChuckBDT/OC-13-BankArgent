import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:3001/api/v1/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.details.body.token;
      headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUserDetails: builder.query({
      query: () => ({
        url: "user/profile",
        method: "POST",
      }),
    }),
  }),
});

export const { useGetUserDetailsQuery } = profileApi;
