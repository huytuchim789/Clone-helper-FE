import React, { useEffect, useState } from 'react'

import Head from 'next/head'
import { useRouter } from 'next/router'

import { publicFetch } from '../../util/fetcher'

import Layout from '../../components/layout'
import PageTitle from '../../components/page-title'
import BlogWrapper from '../../components/blog/blog-wrapper'
import BlogStats from '../../components/blog/blog-stats'
import BlogSummary from '../../components/blog/blog-summary'
import { Button, Pagination } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import SearchInput from '../../components/search-input'
import { Spinner } from '../../components/icons'

function Blog() {
  const router = useRouter()
  const [blogs, setBlogs] = useState(null)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true)
      try {
        const res = await publicFetch.get(`/blog?page=${page}`)
        const { data, total: totalQuestions } = await res.data

        setTotal(totalQuestions)
        setBlogs(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchBlog()
    setLoading(false)
  }, [])

  const handelChange = (page) => {
    setPage(page)
  }

  return (
    <Layout extra={false}>
      <Head>
        <title>Blog - CodingHelper</title>
      </Head>
      <PageTitle title="Blog" button isBlog={true} borderBottom={false} />
      {loading && (
        <div className="loading">
          <Spinner />
        </div>
      )}
      <SearchInput
        style={{ flex: 1, marginRight: 50, maxWidth: 700 }}
        placeholder="Search Blog ..."
        // isLoading={loading}
        isSearchBlog={true}
        autoFocus
        fullWidth={true}
        isKeyDown={true}
        autoComplete="off"
        type="text"
      />
      {blogs?.map(
        ({ id, votes, answers, views, title, text, tags, author, created }) => (
          <BlogWrapper key={id}>
            <BlogStats
              voteCount={votes.length}
              answerCount={answers.length}
              view={views}
            />
            <BlogSummary
              id={id}
              title={title}
              tags={tags}
              author={author}
              createdTime={created}
            >
              {text}
            </BlogSummary>
          </BlogWrapper>
        )
      )}
      <Pagination
        pageSize={10}
        current={page}
        total={total}
        onChange={handelChange}
        style={{ textAlign: 'center' }}
      />
    </Layout>
  )
}

export default Blog
