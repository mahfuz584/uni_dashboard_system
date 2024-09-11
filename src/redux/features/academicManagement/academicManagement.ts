import { baseApi } from "redux/api/baseApi";

//semset list & create semester
 const AcademicSemesterListApi = baseApi.injectEndpoints({
    endpoints : (builder) =>({
        getSemesterList : builder.query({
            query : () => ({
                url : "/academic-semesters",
                method : "GET"
            }),
    
        })
    })
})

const CreateAcademicSemesterApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        createSemester : builder.mutation({
            query : (body) =>({
                url : "/academic-semesters/create-academic-semester",
                method : "POST",
                body
            })
        })
    })
})

export const {useCreateSemesterMutation} = CreateAcademicSemesterApi
export const {useGetSemesterListQuery} = AcademicSemesterListApi