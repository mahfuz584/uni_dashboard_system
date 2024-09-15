import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { Modal } from "antd";
import { logout, setUser } from "redux/features/auth/authSlice";
import { RootState } from "redux/store";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",
  //for including the cookies in the request.as js cant access the cookies by default.if credentials is set to include then the cookies are included in the request
  credentials: "include",
  //for authorizing the request
  //here getState is used to get the current state of the store
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    //setting the token the headers so in each request the token is sent to the server and not to show 401 unauthorized error
    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});

//custom base query for the refresh token
//for this custom base query we need to declare three arguments must
const customBaseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);
  //if the status is 401 then we need to request for the refresh the token for new access token.here we cant use redux base api as it is initially in the base api so we need to use fetch api manually
  if (result?.error?.status === 401) {
    const refreshResult = await fetch(
      "http://localhost:5000/api/v1/auth/refresh-token",
      {
        method: "POST",
        credentials: "include",
      }
    );
    const data = await refreshResult.json();
    const regenratedAccessToken = data?.data?.accessToken;
    if (regenratedAccessToken) {
      const user = (api.getState() as RootState).auth.user;
      api.dispatch(setUser({ user: user, token: regenratedAccessToken }));
    } else {
      Modal.warning({
        title: "Session Expired",
        content: "Your session has expired. Please log in again.",
        okText: "OK",
        onOk: () => {
          api.dispatch(logout());
        },
      });
    }
    return (result = await baseQuery(args, api, extraOptions));
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: customBaseQueryWithRefreshToken,
  // refetchOnMountOrArgChange : true,
  keepUnusedDataFor: 10 * 24 * 60 * 60,
  tagTypes: ["SemesterList", "FacultyList", "DeptList"],
  //baseQuery noraml look
  //baseQuery : fetchBaseQuery({
  //baseUrl : "http://localhost:5000/api/v1/",
  //credentials : "include"
  //})
  endpoints: () => ({}),
});
