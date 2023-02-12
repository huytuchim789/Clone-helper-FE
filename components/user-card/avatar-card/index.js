import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import { ExclamationCircleOutlined } from '@ant-design/icons'

import { publicFetch } from '../../../util/fetcher'

import { Spinner } from '../../icons'

import styles from './avatar-card.module.css'
import { AuthContext } from '../../../store/auth'
import Button from '../../button'
import { Space, Typography, message } from 'antd'
import { FetchContext } from '../../../store/fetch'
import { Modal } from 'antd'

const { Paragraph } = Typography
const UserAvatar = ({ username }) => {
  const [userInfo, setUserInfo] = useState(null)
  const [isFollow, setIsFollow] = useState(false)
  const { authState, isAuthenticated } = useContext(AuthContext)
  const { authAxios } = useContext(FetchContext)
  console.log(authState)
  useEffect(() => {
    if (userInfo?.id)
      authAxios
        .get(`/is-follow`, { params: { followee: userInfo?.id } })
        .then((res) => {
          setIsFollow(res.data.isFollow)
        })
        .catch(() => {})
  }, [userInfo])
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
  const follow = async () => {
    authAxios
      .post(`/follow`, {
        followee: userInfo.id
      })
      .then((res) => {
        console.log(res)
        setIsFollow(res?.data?.isFollow)
        message.success(res?.data?.msg)
      })
      .catch(() => {
        message.error('Failed')
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
                    style={{ width: '100%' }}
                    src={userInfo.profilePhoto}
                    alt={username}
                  />
                </a>
              </Link>
            </div>
          )}
          <h2 className={styles.username}>{username}</h2>
          <h2 className={styles.username}>
            {userInfo?.displayName ? `(${userInfo?.displayName})` : ''}
          </h2>

          {!userInfo ? (
            <div className="loading">
              <Spinner />
            </div>
          ) : (
            <Space direction="vertical" style={{ marginTop: '20px' }}>
              <Paragraph
                ellipsis={{
                  rows: 2,
                  expandable: false,
                  tooltip: userInfo?.profile
                }}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: userInfo?.profile }}
                ></div>
              </Paragraph>
              <div className={styles.created}>
                <p>
                  Created:{' '}
                  <span>
                    {formatDistanceToNowStrict(new Date(userInfo.created), {
                      addSuffix: true
                    })}
                  </span>
                </p>
                {authState?.userInfo?.id !== userInfo?.id &&
                  Object.keys(authState).length > 0 && (
                    <>
                      {' '}
                      {authState?.userInfo?.role === 'admin' && (
                        <Button
                          style={{ backgroundColor: 'red' }}
                          primary
                          onClick={blockUser}
                        >
                          Block
                        </Button>
                      )}
                      <Button
                        style={{
                          backgroundColor: 'orange',
                          marginLeft: '15px'
                        }}
                        primary
                        onClick={follow}
                      >
                        {`${isFollow ? 'Unfollow' : 'Follow'}`}
                      </Button>
                    </>
                  )}
              </div>
            </Space>
          )}
        </div>
      )}
    </div>
  )
}

export default UserAvatar
