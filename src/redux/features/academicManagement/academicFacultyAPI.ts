import { baseApi } from "redux/api/baseApi";

const academicFacultyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFaculty: builder.query({
      query: () => {
        return {
          url: "/academic-faculties",
          method: "GET",
        };
      },
      providesTags: ["FacultyList"],
      transformResponse: (response: any) => {
        return {
          data: response?.data,
          pagination: response?.meta,
        };
      },
    }),
    getSingleFaculty: builder.query({
      query: (id) => {
        return {
          url: `/academic-faculties/${id}`,
          method: "GET",
        };
      },
    }),
    createFaculty: builder.mutation({
      query: (body) => {
        return {
          url: "/academic-faculties/create-academic-faculty",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["FacultyList"],
    }),
    updateFaculty: builder.mutation({
      query: (body) => {
        return {
          url: "/academic-faculties/update-academic-faculty",
          method: "PUT",
          body,
        };
      },
    }),
  }),
});

export const {
  useUpdateFacultyMutation,
  useCreateFacultyMutation,
  useGetAllFacultyQuery,
  useGetSingleFacultyQuery,
} = academicFacultyApi;
