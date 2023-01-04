import axios from 'axios'
import { useCallback } from 'react'

interface Props {
    url: string,
    method: "head" | "options" | "put" | "post" | "patch" | "delete" | "get"
}



export const useAxios = () =>{

    const request = async ({url,method}: Props) =>{
        const response = await axios[method]('https://jsonplaceholder.typicode.com/'+url,{},{withCredentials: true})
        return response.data
    }

    return {request}
    
}