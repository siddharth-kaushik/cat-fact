/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"

const useIntersectionObserver = (
  ref,
  callback,
  options = { threshold: 0.1, rootMargin: "0px" }
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(callback, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    const copy = ref.current

    return () => {
      observer.unobserve(copy)
    }
  }, [])
}

export default useIntersectionObserver
