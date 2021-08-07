import axios from "axios"
import { useCallback, useState } from "react"
import { User } from "../types/api/user"
import { useMessage } from "./useMessage"

export const useAllUsers=()=>{
    const {ShowMessage} = useMessage()
const[loading,setLoading]= useState<boolean>(false)
const[users,setUsers]= useState<Array<User>>([])

    const　getUsers=useCallback(()=>{
        setLoading(true)
        axios.get<Array<User>>("http://jsonplaceholder.typicode.com/users")
        .then((res)=> setUsers(res.data))
        .catch(()=>{
            ShowMessage({title: "ユーザー取得に失敗しました", status:"error"})
        }).finally(()=>{
            setLoading(false)
        })

        
    },[])
    return{getUsers,loading,users}
}