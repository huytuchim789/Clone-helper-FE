import React, { useState, useEffect, useContext } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { publicFetch } from '../util/fetcher'

import Layout from '../components/layout'
import QuestionWrapper from '../components/question/question-wrapper'
import QuestionStats from '../components/question/question-stats'
import QuestionSummary from '../components/question/question-summary'
import PageTitle from '../components/page-title'
import ButtonGroup from '../components/button-group'
import { Spinner } from '../components/icons'
import { Button, Pagination } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { AuthContext } from '../store/auth'

const HomePage = () => {
  const router = useRouter()

  const [questions, setQuestions] = useState(null)
  const [sortType, setSortType] = useState('Highest Vote')
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [checked, setChecked] = useState(false)
  const { authState } = useContext(AuthContext)

  useEffect(() => {
    const fetchQuestion = async () => {
      setLoading(true)
      try {
        const res = await publicFetch.get(
          `/question?page=${page}&${
            checked ? 'exp=' + authState?.userInfo?.exp : ''
          }`
        )
        const {
          data: { questions },
          total: totalQuestions
        } = await res.data

        setTotal(totalQuestions)
        setQuestions(questions)
      } catch (error) {
        console.log(error)
      }
    }

    const fetchQuestionByTag = async () => {
      const { data } = await publicFetch.get(`/questions/${router.query.tag}`)
      setQuestions(data)
    }
    console.log('here')

    if (router.query.tag) {
      fetchQuestionByTag()
    } else {
      fetchQuestion()
    }
    setLoading(false)
  }, [router.query.tag, page, checked])

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
          {router.query.tag ? router.query.tag : 'Questions'} - CodingHelper
        </title>
      </Head>

      <PageTitle
        title={
          router.query.tag
            ? `Questions tagged [${router.query.tag}]`
            : 'All Questions'
        }
        button
        borderBottom={false}
      />

      <ButtonGroup
        borderBottom
        buttons={['Newest', 'Oldest', 'Highest Vote', 'Highest View']}
        selected={sortType}
        setPage={setPage}
        setSelected={setSortType}
        checked={checked}
        setChecked={setChecked}
        yourComunity={authState?.userInfo?.exp}
      />

      {loading && (
        <div className="loading">
          <Spinner />
        </div>
      )}

      {questions
        ?.sort(handleSorting())
        .filter((a) => !a?.isBlocked)
        .map(
          ({
            _id: id,
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

export default HomePage
