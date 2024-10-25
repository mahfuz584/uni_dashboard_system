import { baseApi } from "./baseApi";

const genericApi = () => {
  return baseApi.injectEndpoints({
    endpoints: (builder) => ({
      listApi: builder.query({
        query: ({ url, params }) => {
          const queryParams = new URLSearchParams();

          if (params) {
            params.forEach(
              ({ name, value }: { name: string; value: string }) => {
                queryParams.append(name, value);
              }
            );
          }

          const fullUrl = queryParams.toString()
            ? `${url}?${queryParams}`
            : url;

          return {
            url: fullUrl,
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
