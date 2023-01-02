import { message, Space } from 'antd'
import React, { useContext } from 'react'
import { AuthContext } from '../../../store/auth'
import { FetchContext } from '../../../store/fetch'
import Button from '../../button'

import ButtonGroup from '../../button-group'

import styles from './post-list.module.css'

const PostList = ({ postType, setPostType, children }) => {
  const { authAxios } = useContext(FetchContext)

  const blockUser = async () => {
    authAxios
      .put(`/blocked/${question?.id}`)
      .then((res) => {
        console.log(res)
        message.success('Successfully Blocked')
        history.back()
      })
      .catch(() => {
        message.error('Failed Blocked')
        history.back()
      })
  }
  const { isAdmin } = useContext(AuthContext)
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Last Questions</h2>
        <Space>
          {isAdmin && (
            <Button
              style={{ backgroundColor: 'red' }}
              primary
              onClick={blockUser}
            >
              Block
            </Button>
          )}
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
