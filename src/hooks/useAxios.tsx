import { useState, useEffect } from "react"
import axios from "axios"

axios.defaults.baseURL = "https://api.imgur.com/3"

const useAxios = (url: string) => {
  const [response, setResponse] = useState<any>(null)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const config = {
    method: "get",
    url,
    headers: {
      Authorization: `Client-ID ${import.meta.env.VITE_IMGUR_V3_CLIENT_ID}`,
    },
  }

  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await axios(config)
      setResponse(res)
      setData(res.data.data)
      setError(null)
    } catch (err: any) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [url])

  return { response, error, loading, data }
}

export default useAxios
