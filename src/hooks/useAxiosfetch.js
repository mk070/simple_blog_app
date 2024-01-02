import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useAxiosfetch = (dataUrl) => {
    const [data, setdata] = useState([])
    const [fetcherror, setfetcherror] = useState(null)
    const [isloading, setisloading] =useState(false)

    useEffect (() =>{
        let isMounted = true
        const source = axios.CancelToken.source()

        const fetchdata = async (url) =>{
            setisloading (true)
            try {
                const response = await axios.get(url , {
                    CancelToken: source.token
                })
                if (isMounted){
                    setdata(response.data)
                    setfetcherror(null)
                }
            }catch(err){
                if(isMounted){
                    setfetcherror(err.message)
                    setdata([])
                }
            }finally{
                isMounted && setisloading(false)
            }
        }

        fetchdata(dataUrl)

        const cleanup =() =>{
            isMounted =false
            source.cancel()
        }

        return cleanup
    }, [dataUrl])
  return {data, fetcherror, isloading}
}

export default useAxiosfetch