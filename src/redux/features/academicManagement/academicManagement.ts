import { baseApi } from "redux/api/baseApi";

//semset list & create semester
const AcademicSemesterListApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSemesterList: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((arg : any) => {
            params.append(arg.name, arg.value);
          });
        }

        return {
          url: "/academic-semesters",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["Semester"],
      transformResponse: (response: any) => {
        return {
          semseterList: response?.data,
          pagination: response?.pagination,
        };
      },
    }),
  }),
});

const singleAcademicSemesterApi = baseApi.injectEndpoints({
  endpoints : (builder) => ({
    getSingleSemester : builder.query({
      query : (id) => ({
        url : `/academic-semesters/${id}`,
        method : "GET",
      })
    })
  })
})

const CreateAcademicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSemester: builder.mutation({
      query: (body) => ({
        url: "/academic-semesters/create-academic-semester",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Semester"],
    }),
  }),
});

export const { useCreateSemesterMutation } = CreateAcademicSemesterApi;
export const { useGetSemesterListQuery } = AcademicSemesterListApi;
export const { useGetSingleSemesterQuery } = singleAcademicSemesterApi;
