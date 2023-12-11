import axios from "axios";
import { useQuery } from "@tanstack/react-query";

type Variables = {
    userId: string | number
}

type QueryParams = {
    variables : Variables
}



const getBlogsByUserId = async (userId: string | number) => {
    console.log('getBlogsByUserId',userId);
    return axios({
        method: 'GET',
        url: `/b/${process.env.NEXT_PUBLIC_JSONBIN_BIN_ID}`,
    })
}

export const useGetBlogsByUserId = (params: QueryParams) => {
    return useQuery({
        queryKey: ['get_Blogs_By_User_Id', params?.variables?.userId],  // the key used to cache data, must be unique per request
        queryFn : () => getBlogsByUserId(params?.variables?.userId)
    })
}