import React, { useContext } from 'react'
import cn from 'classnames'

import { AuthContext } from '../../store/auth'

import Button from '../button'

import styles from './page-title.module.css'
import { message, Space } from 'antd'
import { FetchContext } from '../../store/fetch'

const PageTitle = ({
  title,
  button,
  isBlog = false,
  borderBottom = true,
  question,
  children,
  blogId
}) => {
  const { isAuthenticated, authState, isAdmin } = useContext(AuthContext)
  const { authAxios } = useContext(FetchContext)
  const blockQuestion = async () => {
    authAxios
      .put(`/blocked/question/${question?.id}`)
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
  return (
    <div className={cn(styles.container, borderBottom && styles.borderBottom)}>
      <div className={styles.title}>
        <h1>{title}</h1>
        <div className={styles.buttonContainer}>
          {button && (
            <Space>
              {isAdmin && !isBlog && question?.id && (
                <Button
                  onClick={blockQuestion}
                  style={{ backgroundColor: 'red' }}
                  primary
                >
                  Block
                </Button>
              )}
              {!isBlog && <Button
                href={isAuthenticated() ? '/questions/ask' : '/auth'}
                primary
              >
                Ask Question
              </Button>}
              {isBlog && <Button
                href={isAuthenticated() ? '/blog/create' : '/auth'}
                primary
              >
                Create my Blog
              </Button>}
              {isBlog && authState.userInfo?.username === question?.author?.username && <Button
                href={isAuthenticated() ? `/blog/${blogId}/edit` : '/auth'}
                secondary
              >
                Edit
              </Button>}
            </Space>
          )}
        </div>
      </div>
      {children && <p className={styles.summary}>{children}</p>}
    </div>
  )
}

export default PageTitle
