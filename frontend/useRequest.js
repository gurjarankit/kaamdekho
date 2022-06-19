import useSWR from "swr"

const fetcher = url => fetch(url).then(res => res.json())
const baseUrl = "https://3820-2402-8100-3861-fa1-f49d-78b1-8867-15cc.ngrok.io"

export const useGetPosts = path => {
  if (!path) {
    throw new Error("Path is required")
  }

  const url = baseUrl + path

  const { data: posts, error } = useSWR(url, fetcher)

  return { posts, error }
}