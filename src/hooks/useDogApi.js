import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'


const useDogApi = () => {
  const location = useLocation()
  const { filter } = useParams()
  const [url, setUrl] = useState(`api/dog/next/${filter}/0`)
  const [dog, setDog] = useState({})
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState(null)

  const next = () => setUrl(createUrl('next', dog.id, filter))
  const prev = () => setUrl(createUrl('prev', dog.id, filter))
  const setLiked = () => changeStatus('liked')
  const setDisliked = () => changeStatus('disliked')
  const setUndecided = () => changeStatus('undecided')

  const createUrl = (type, id, filter = undefined) => {
    setLoading(true)
    const urls = {
      next: `api/dog/next/${filter}/${id}`,
      prev: `api/dog/prev/${filter}/${id}`,
      changeStatus: `api/dog/${filter}/${id}`,
      deleteDog: `api/dog/delete/${id}`,
    }
    return urls[type]
  }

  const changeStatus = (status) => {
    axios
    .put(createUrl('changeStatus', dog.id, status))
      .then(() => next())
      .catch((error) => {
        console.log(error.response)
      })
  }

  useEffect(() => {
    setUrl(`api/dog/next/${filter}/0`)
  }, [location, filter])

  useEffect(() => {
    let isCancelled = false

    axios
      .get(url)
      .then((res) => {
        if (!isCancelled) {
          setDog(res.data)
          setLoading(false)
          setMessage(null)
        }
      })
      .catch((err) => {
        if (!isCancelled) {
          let message

          switch (err.response?.data?.detail) {
            case 'Last Entry':
              message = `You have no more ${filter} dogs.`
              break
            case 'No Results':
              message = 'No dogs matched your preferences.'
              break
            default:
              message = "An unexpected error occurred. We're working on it."
          }
          setLoading(false)
          setMessage(message)
        }
      })

    return () => {
      isCancelled = true
      setLoading(true)
    }
  }, [url, filter])
  const api = { next, prev, setLiked, setDisliked, setUndecided }
  return { dog, loading, message, api }
}

export { useDogApi }
