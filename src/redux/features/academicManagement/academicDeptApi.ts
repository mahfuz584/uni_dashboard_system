import { baseApi } from "redux/api/baseApi";

const academicDeptApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDept: builder.query({
      query: () => {
        return {
          url: "/academic-departments",
          method: "GET",
        };
      },
      providesTags: ["DeptList"],
      transformResponse: (response: any) => {
        return {
          data: response?.data,
        };
      },
    }),

    getSingleDept: builder.query({
      query: (id) => {
        return {
          url: `/academic-departments/${id}`,
          method: "GET",
        };
      },
    }),

    createDept: builder.mutation({
      query: (body) => {
        return {
          url: "/academic-departments/create-academic-department",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["DeptList"],
    }),
  }),
});

export const {
  useCreateDeptMutation,
  useGetAllDeptQuery,
  useGetSingleDeptQuery,
} = academicDeptApi;
