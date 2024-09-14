import { baseApi } from "redux/api/baseApi";


const GetAllAcademicFacultyApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        getAllFaculty : builder.query({
            query : () => {
                return {
                    url : "/academic-faculties",
                    method : "GET",
                }
            },
            providesTags : ["Faculty"],
            transformResponse : (response : any) => {
                return {
                    data : response?.data,
                    pagination : response?.meta,
                }
            }
        })
    })
})

const GetSingleFacultyApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        getSingleFaculty : builder.query({
            query : (id) => {
                return {
                    url : `/academic-faculties/${id}`,
                    method : "GET",
                }
            }
        })
    })
})


const CreateAcademicFacultyApi =baseApi.injectEndpoints({
    endpoints : (builder) => ({
        createFaculty : builder.mutation({
            query : (body) => {
                return {
                    url : "/academic-faculties/create-academic-faculty",
                    method : "POST",
                    body,
                }
            },
            invalidatesTags : ["Faculty"],
        }),
    })
})

export const {useCreateFacultyMutation} = CreateAcademicFacultyApi;
export const {useGetAllFacultyQuery} = GetAllAcademicFacultyApi;
export const {useGetSingleFacultyQuery} = GetSingleFacultyApi;