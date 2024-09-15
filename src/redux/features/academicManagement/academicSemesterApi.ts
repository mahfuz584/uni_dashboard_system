import { baseApi } from "redux/api/baseApi";

const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSemesterList: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((arg: any) => {
            params.append(arg.name, arg.value);
          });
        }
        return {
          url: "/academic-semesters",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["SemesterList"],
      transformResponse: (response: any) => {
        return {
          semseterList: response?.data,
          meta: response?.meta,
        };
      },
    }),
    getSingleSemester: builder.query({
      query: (id) => ({
        url: `/academic-semesters/${id}`,
        method: "GET",
      }),
    }),
    createSemester: builder.mutation({
      query: (body) => ({
        url: "/academic-semesters/create-academic-semester",
        method: "POST",
        body,
      }),
      invalidatesTags: ["SemesterList"],
    }),
  }),
});

export const {
  useGetSemesterListQuery,
  useGetSingleSemesterQuery,
  useCreateSemesterMutation,
} = academicSemesterApi;
