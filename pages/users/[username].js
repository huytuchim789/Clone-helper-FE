import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import { publicFetch } from '../../util/fetcher'

import Layout from '../../components/layout'
import UserCard from '../../components/user-card'
import AvatarCard from '../../components/user-card/avatar-card'
import PostList from '../../components/user-card/post-list'
import PostItem from '../../components/user-card/post-list/post-item'
import { Spinner } from '../../components/icons'
import { Image, Table } from 'antd'
import Link from 'next/link'

const columns = [
  {
    title: 'User Name',
    dataIndex: 'username',
    key: 'name',
    render: (text) => {
      return <Link href={`/users/${text}`}>{text}</Link>
    }
  },
  {
    title: 'Avatar',
    dataIndex: 'profilePhoto',
    key: 'age',
    render: (_, record) => {
      return <Image src={record.profilePhoto} />
    }
  },
  {
    title: 'Experience',
    dataIndex: 'exp',
    key: 'exp',
    render: (text) => {
      return <p>{`${text} years`}</p>
    }
  }
]
const UserDetail = ({ username }) => {
  const [posts, setPosts] = useState([])
  const [blogs, setBlogs] = useState([])
  const [follows, setFollows] = useState([])
  const [postType, setPostType] = useState('Questions')

  useEffect(() => {
    const fetchQuestions = async () => {
      const { data } = await publicFetch.get(`/question/user/${username}`)
      const { data: data1 } = await publicFetch.get(`/blog/user/${username}`)
      const { data: data2 } = await publicFetch.get(`/${username}/follow-list`)
      setPosts(data)
      setBlogs(data1)
      setFollows(data2)
    }
    fetchQuestions()
  }, [postType, username])

  return (
    <Layout extra={false}>
      <Head>
        <title>Users {username} - CodingHepler</title>
      </Head>

      <UserCard>
        <AvatarCard username={username} />

        <div
          style={{ display: 'flex', flexDirection: 'column', rowGap: '50px' }}
        >
          {' '}
          <PostList
            postType={postType}
            setPostType={setPostType}
            filter={false}
          >
            {!posts && (
              <div className="loading">
                <Spinner />
              </div>
            )}

            {posts?.map(({ id, title, score, created }) => (
              <PostItem
                key={id}
                title={title}
                vote={score}
                created={created}
                id={id}
              />
            ))}

            {posts?.length == 0 && (
              <p className="not-found-questions">
                Don&apos;t have any questions yet.
              </p>
            )}
          </PostList>
          <PostList
            postType={postType}
            setPostType={setPostType}
            title={'Lastest Blogs'}
            filter={false}
          >
            {!blogs && (
              <div className="loading">
                <Spinner />
              </div>
            )}

            {blogs?.map(({ id, title, score, created }) => (
              <PostItem
                key={id}
                title={title}
                vote={score}
                created={created}
                id={id}
              />
            ))}

            {blogs?.length == 0 && (
              <p className="not-found-questions">
                Don&apos;t have any blogs yet.
              </p>
            )}
          </PostList>
          <h2 style={{ fontWeight: 'bold', fontSize: '15px' }}>Following</h2>
          <Table dataSource={follows} columns={columns} pagination={false} />;
        </div>
      </UserCard>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const username = context.params.username
  return {
    props: {
      username
    }
  }
}

export default UserDetail
