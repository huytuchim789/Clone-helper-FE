import { message, Space } from 'antd'
import React, { useContext } from 'react'
import { AuthContext } from '../../../store/auth'
import { FetchContext } from '../../../store/fetch'
import Button from '../../button'

import ButtonGroup from '../../button-group'

import styles from './post-list.module.css'

const PostList = ({ postType, setPostType, children }) => {
  
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Last Questions</h2>
        <Space>
          <ButtonGroup
            buttons={['Questions']}
            selected={postType}
            setSelected={setPostType}
          />
        </Space>
      </div>
      {children}
    </div>
  )
}

export default PostList
