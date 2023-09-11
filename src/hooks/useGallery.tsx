import { useEffect } from "react"
import { useDispatch } from "react-redux"

import useAxios from "./useAxios"

export function useGallery(url: any) {
  const dispatch = useDispatch()
  const { response, error, loading, data } = useAxios(url)

  useEffect(() => {
    const asyncFetchGalleries = async () => {
      if (response.data.success) {
      }
    }
    asyncFetchGalleries()
  }, [response.data.data, dispatch])

  return { data, loading, error }
}
