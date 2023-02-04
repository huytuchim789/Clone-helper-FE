import { message, Space } from 'antd'
import React, { useContext } from 'react'
import { AuthContext } from '../../../store/auth'
import { FetchContext } from '../../../store/fetch'

import ButtonGroup from '../../button-group'

import styles from './post-list.module.css'

const PostList = ({
  postType,
  setPostType,
  children,
  title,
  filter = true
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>{title ? title : 'Lastest Question'}</h2>
        {filter && (
          <Space>
            <ButtonGroup
              buttons={['Questions']}
              selected={postType}
              setSelected={setPostType}
            />
          </Space>
        )}
      </div>
      {children}
    </div>
  )
}

export default PostList
