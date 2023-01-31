import React from 'react'

import styles from './question-ask-view.module.css'

const BlogEditView = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.topForm}>
          <h1>Edit your post!</h1>
        </div>
        {children}
      </div>
    </div>
  )
}

export default BlogEditView
