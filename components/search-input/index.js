import React, { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import cn from 'classnames'

import { Search } from '../icons'

import styles from './search-input.module.css'

const SearchInput = ({
  fullWidth,
  autoFocus,
  marginLeft = true,
  isKeyDown = false,
  isLoading = false,
  className,
  ...props
}) => {
  const ref = useRef(null)
  const router = useRouter()

  useEffect(() => {
    if (autoFocus) {
      ref.current.focus()
    }
  }, [ref])

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      router.push(`/search?key=${event.target.value}`)
      console.log('key', event.target.value)
    }
  };

  return (
    <div
      className={cn(
        styles.container,
        fullWidth && styles.fullWidth,
        marginLeft && styles.ml24,
        isLoading && styles.isLoading
      )}
    >
      <input
        ref={ref}
        className={cn(
          styles.input,
          isLoading && styles.paddingRight,
          className
        )}
        {...props}
        onKeyDown={isKeyDown && handleKeyDown}
      />
      <Search className={styles.search} />
    </div>
  )
}

export default SearchInput
