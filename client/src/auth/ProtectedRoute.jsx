import React, { useEffect } from 'react'
import {useUserContext} from '../../context/UserContext'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({children}) {
  const {user, setUser} = useUserContext()

  const getUser = async ()=>{
    try {
      const res = await axios.post(
        'http://localhost:8080/api/v1/user/get-user',{
          token: localStorage.getItem('token')
        },{
          headers:{
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      )
      if(res.data.success){
        setUser(res.data.data)
      }else{
        <Navigate to={'/login'} />
        localStorage.clear()
      }
    } catch (error) {
      localStorage.clear()
      console.log(error)
    }
  }

  useEffect(()=>{
    if(!user){
      getUser()
    }
  }, [user])

  if(localStorage.getItem('token')){
    return children
  }else{
    return <Navigate to={'/login'} />
  }
}

export default ProtectedRoute