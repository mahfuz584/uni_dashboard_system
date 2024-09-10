import { baseApi } from "redux/api/baseApi";

const CreateAcademicSemesterApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        createSemester : builder.mutation({
            query : (body) =>({
                url : "academic-semesters/create-academic-semester",
                method : "POST",
                body
            })
        })
    })
})

export const {useCreateSemesterMutation} = CreateAcademicSemesterApi