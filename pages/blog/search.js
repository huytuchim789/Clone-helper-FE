import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { publicFetch } from '../../util/fetcher'

import Layout from '../../components/layout'
import QuestionWrapper from '../../components/question/question-wrapper'
import QuestionStats from '../../components/question/question-stats'
import QuestionSummary from '../../components/question/question-summary'
import PageTitle from '../../components/page-title'
import ButtonGroup from '../../components/button-group'
import NotFound from '../../components/not-found-result'
import { Spinner } from '../../components/icons'
import { Pagination } from 'antd'
import SearchInput from '../../components/search-input'

const SearchBlog = () => {
  const router = useRouter()

  const [questions, setQuestions] = useState(null)
  const [sortType, setSortType] = useState('Highest Vote')
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchQuestion = async () => {
      setLoading(true)

      try {
        const res = await publicFetch.get(
          `/blog?key=${router.query.key}&&page=${page}`
        )
        const { data, total: totalQuestions } = await res.data

        setQuestions(data)
        setTotal(totalQuestions)
      } catch (error) {
        console.log(error)
      }
    }

    const fetchQuestionByTag = async () => {
      const { data } = await publicFetch.get(`/blog/${router.query.tag}`)
      setQuestions(data)
    }

    if (router.query.tag) {
      fetchQuestionByTag()
    } else {
      fetchQuestion()
    }
    setLoading(false)
  }, [router.query.tag, page, router.query.key])

  const handelChange = (page) => {
    setPage(page)
  }

  const handleSorting = () => {
    switch (sortType) {
      case 'Highest Vote':
        return (a, b) => b.score - a.score
      case 'Highest View':
        return (a, b) => b.views - a.views
      case 'Newest':
        return (a, b) => new Date(b.created) - new Date(a.created)
      case 'Oldest':
        return (a, b) => new Date(a.created) - new Date(b.created)
      default:
        break
    }
  }

  return (
    <Layout extra={false}>
      <Head>
        <title>
          {router.query.tag ? router.query.tag : 'Blogs'} - CodingHelper
        </title>
      </Head>

      <PageTitle
        title={`Search Blog result for [${router.query.key}]`}
        button
        borderBottom={false}
        isBlog={true}
      />

      <ButtonGroup
        borderBottom
        buttons={['Newest', 'Oldest', 'Highest Vote', 'Highest View']}
        selected={sortType}
        isFilter={false}
        setPage={setPage}
        setSelected={setSortType}
      />

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

      {loading && (
        <div className="loading">
          <Spinner />
        </div>
      )}

      {questions
        ?.sort(handleSorting())
        .map(
          ({
            id,
            votes,
            answers,
            views,
            title,
            text,
            tags,
            author,
            created
          }) => (
            <QuestionWrapper key={id}>
              <QuestionStats
                voteCount={votes.length}
                answerCount={answers.length}
                view={views}
              />
              <QuestionSummary
                id={id}
                title={title}
                tags={tags}
                author={author}
                createdTime={created}
              >
                {text}
              </QuestionSummary>
            </QuestionWrapper>
          )
        )}
      {total != 0 ? (
        <Pagination
          pageSize={6}
          current={page}
          total={total}
          onChange={handelChange}
          style={{ textAlign: 'center', margin: 20 }}
        />
      ) : (
        <NotFound />
      )}
    </Layout>
  )
}

export default SearchBlog
