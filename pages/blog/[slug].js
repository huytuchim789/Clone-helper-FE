import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import { publicFetch } from '../../util/fetcher'

import Layout from '../../components/layout'
import PageTitle from '../../components/page-title'
import DetailPageContainer from '../../components/detail-page-container'
import PostWrapper from '../../components/post/post-wrapper'
import PostVote from '../../components/post/post-vote'
import PostSummary from '../../components/post/post-summary'
import CommentList from '../../components/post/comment-list'
import CommentItem from '../../components/post/comment-list/comment-item'
import AnswerContainer from '../../components/answer-container'
import AddAnswer from '../../components/add-answer'
import { Spinner } from '../../components/icons'
import { Result } from 'antd'

const BlogDetail = ({ questionId, title }) => {
    const [question, setQuestion] = useState(null)
    const [answerSortType, setAnswersSortType] = useState('Votes')
  
    useEffect(() => {
      const fetchQuestion = async () => {
        const { data } = await publicFetch.get(`/blog-by-id/?id=${questionId}`)
        setQuestion(data)
      }
  
      fetchQuestion()
    }, [])
  
    const isClient = typeof window === 'object'
    return (
      <Layout extra={false}>
        <Head>
          <title>{title}</title>
          <link rel="canonical" href={isClient && window.location.href}></link>
        </Head>
  
        {question ? (
          <>
            <PageTitle title={title} button isBlog={true} question={question} />
  
            <DetailPageContainer>
              {!question && (
                <div className="loading">
                  <Spinner />
                </div>
              )}
  
              {question && (
                <>
                  <PostWrapper borderBottom={false}>
                    {/* <PostVote
                      score={question.score}
                      votes={question.votes}
                      questionId={questionId}
                      setQuestion={setQuestion}
                    /> */}
                    <PostSummary
                      tags={question.tags}
                      author={question.author}
                      created={question.created}
                      questionId={questionId}
                    >
                      {question.text}
                    </PostSummary>
                    <CommentList
                      questionId={questionId}
                      setQuestion={setQuestion}
                    >
                      {question.comments.map(({ id, author, created, body }) => (
                        <CommentItem
                          key={id}
                          commentId={id}
                          questionId={questionId}
                          author={author.username}
                          isOwner={author.username === question.author.username}
                          created={created}
                          setQuestion={setQuestion}
                        >
                          {body}
                        </CommentItem>
                      ))}
                    </CommentList>
                  </PostWrapper>
  
                  {question.answers.length > 0 && (
                    <AnswerContainer
                      answersCount={question.answers.length}
                      answerSortType={answerSortType}
                      setAnswerSortType={setAnswersSortType}
                    >
                      {question.answers.sort(handleSorting()).map((answer) => (
                        <PostWrapper key={answer.id}>
                          <PostVote
                            score={answer.score}
                            votes={answer.votes}
                            answerId={answer.id}
                            questionId={questionId}
                            setQuestion={setQuestion}
                          />
                          <PostSummary
                            author={answer.author}
                            created={answer.created}
                            questionId={questionId}
                            answerId={answer.id}
                            setQuestion={setQuestion}
                          >
                            {answer.text}
                          </PostSummary>
                          <CommentList
                            questionId={questionId}
                            answerId={answer.id}
                            setQuestion={setQuestion}
                          >
                            {answer.comments.map(
                              ({ id, author, created, body }) => (
                                <CommentItem
                                  key={id}
                                  commentId={id}
                                  questionId={questionId}
                                  answerId={answer.id}
                                  author={author.username}
                                  isOwner={
                                    author.username === question.author.username
                                  }
                                  created={created}
                                  setQuestion={setQuestion}
                                >
                                  {body}
                                </CommentItem>
                              )
                            )}
                          </CommentList>
                        </PostWrapper>
                      ))}
                    </AnswerContainer>
                  )}
  
                  <AddAnswer
                    tags={question.tags}
                    id={questionId}
                    setQuestion={setQuestion}
                  />
                </>
              )}
            </DetailPageContainer>
          </>
        ) : (
          <Result
            status="500"
            title="500"
            subTitle="Sorry, something went wrong."
          />
        )}
      </Layout>
    )
  }
  
  export async function getServerSideProps(context) {
    const slug = context.params.slug
    const questionId = slug.split('-').shift()
    const title = slug
      ?.substr(slug.indexOf('-') + 1)
      .split('-')
      .join(' ')
  
    return {
      props: {
        questionId,
        title
      }
    }
  }
  
  export default BlogDetail
  