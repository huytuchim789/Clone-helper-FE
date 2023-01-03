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
  borderBottom = true,
  question,
  children
}) => {
  const { isAuthenticated, isAdmin } = useContext(AuthContext)
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
              {isAdmin && question?.id && (
                <Button
                  onClick={blockQuestion}
                  style={{ backgroundColor: 'red' }}
                  primary
                >
                  Block
                </Button>
              )}
              <Button
                href={isAuthenticated() ? '/questions/ask' : '/auth'}
                primary
              >
                Ask Question
              </Button>
            </Space>
          )}
        </div>
      </div>
      {children && <p className={styles.summary}>{children}</p>}
    </div>
  )
}

export default PageTitle
