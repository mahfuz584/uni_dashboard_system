import { baseApi } from "./baseApi";

const genericApi = () => {
  return baseApi.injectEndpoints({
    endpoints: (builder) => ({
      listApi: builder.query({
        query: ({ url }) => {
          return {
            url: url,
            method: "GET",
          };
        },
        providesTags: ["List"],
      }),

      retrieveApi: builder.query({
        query: ({ url, id }) => {
          return {
            url: `${url}/${id}`,
            method: "GET",
          };
        },
      }),
      postAPi: builder.mutation({
        query: ({ url, body }) => {
          return {
            url: url,
            method: "POST",
            body,
          };
        },
        invalidatesTags: ["List"],
      }),
      updateApi: builder.mutation({
        query: ({ url, id, body }) => {
          return {
            url: `${url}/${id}`,
            method: "PUT",
            body,
          };
        },
      }),
    }),
  });
};

export const {
  useListApiQuery,
  usePostAPiMutation,
  useRetrieveApiQuery,
  useUpdateApiMutation,
} = genericApi();
