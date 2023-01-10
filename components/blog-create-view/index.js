import React from 'react'

import styles from './question-ask-view.module.css'

const BlogCreateView = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.topForm}>
          <h1>Create your Post here!!</h1>
        </div>
        {children}
      </div>
    </div>
  )
}

export default BlogCreateView
