import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import { ExclamationCircleOutlined } from '@ant-design/icons'

import { publicFetch } from '../../../util/fetcher'

import { Spinner } from '../../icons'

import styles from './avatar-card.module.css'
import { AuthContext } from '../../../store/auth'
import Button from '../../button'
import { message } from 'antd'
import { FetchContext } from '../../../store/fetch'
import { Modal } from 'antd'

const { error } = Modal
const UserAvatar = ({ username }) => {
  const [userInfo, setUserInfo] = useState(null)
  const { isAdmin } = useContext(AuthContext)
  const { authAxios } = useContext(FetchContext)

  const blockUser = async () => {
    authAxios
      .put(`/blocked/user/${userInfo?.id}`)
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
  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await publicFetch.get(`/user/${username}`)
      setUserInfo(data)
    }

    fetchUser()
  }, [username])
 
  return (
    <div>
      {userInfo?.isBlocked ? (
        <Modal
          style={{ height: '500px' }}
          open
          icon=<ExclamationCircleOutlined />
          footer={null}
        >
          <p>user are being blocked</p>
        </Modal>
      ) : (
        <div className={styles.avatarCard}>
          {!userInfo ? (
            <div className="loading">
              <Spinner />
            </div>
          ) : (
            <div className={styles.avatar}>
              <Link href="/users/[username]" as={`/users/${username}`}>
                <a>
                  <img
                    src={`https://secure.gravatar.com/avatar/${userInfo.id}?s=164&d=identicon`}
                    alt={username}
                  />
                </a>
              </Link>
            </div>
          )}
          <h2 className={styles.username}>{username}</h2>
          {!userInfo ? (
            <div className="loading">
              <Spinner />
            </div>
          ) : (
            <div className={styles.created}>
              <p>
                Created:{' '}
                <span>
                  {formatDistanceToNowStrict(new Date(userInfo.created), {
                    addSuffix: true
                  })}
                </span>
              </p>
              {isAdmin && (
                <Button
                  style={{ backgroundColor: 'red' }}
                  primary
                  onClick={blockUser}
                >
                  Block
                </Button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default UserAvatar
