import { DependencyList, useCallback, useEffect, } from 'react';

const useDebouncedEffect = (func: () => void, delay: number, deps: DependencyList) => {
  const callback = useCallback(func, deps)

  useEffect(() => {
    const timer = setTimeout(() => {
      callback()
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [callback, delay])
}

export default useDebouncedEffect
