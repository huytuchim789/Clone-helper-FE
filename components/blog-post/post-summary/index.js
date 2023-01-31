import React, { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

import { AuthContext } from '../../../store/auth'
import { FetchContext } from '../../../store/fetch'
import { Space } from 'antd'

import Tag from '../../tag'

import styles from './post-summary.module.css'
import * as Yup from 'yup'
import { Formik } from 'formik'
import TextArea from '../../textarea'
import Button from '../../button'

const PostSummary = ({
  tags,
  author,
  created,
  questionId,
  answerId,
  setQuestion,
  children,
  button
}) => {
  const { authState, isAdmin } = useContext(AuthContext)
  const { authAxios } = useContext(FetchContext)
  const router = useRouter()
  const [editMode, setEditMode] = useState(false)

  const handleDeleteComment = async () => {
    const res = window.confirm('Are you sure delete your post?')
    if (res) {
      const { data } = await authAxios.delete(
        answerId
          ? `/answer/${questionId}/${answerId}`
          : `/question/${questionId}`
      )

      if (answerId) {
        setQuestion(data)
      } else {
        router.push('/')
      }
    }
  }
  const hadnleEditComment = () => {
    setEditMode(true)
  }
  return (
    <div className={styles.postCell}>
      {!editMode ? (
        <div className={styles.text}>{children}</div>
      ) : (
        <Formik
          initialValues={{ text: children }}
          onSubmit={async (values, { setStatus, resetForm }) => {
            try {
              const { data } = await authAxios.put(
                answerId
                  ? `/answer/${questionId}/${answerId}`
                  : `/answer/${questionId}/${questionId}`,
                values
              )
              setQuestion(data)
              resetForm({})
              setEditMode(false)
            } catch (error) {
              setStatus(error.response.data.message)
            }
          }}
          validationSchema={Yup.object({
            text: Yup.string()
              .required('text is missing.')
              .min(30, 'text must be at least 30 characters.')
              .max(1000, 'text cannot be longer than 1000 characters.')
          })}
        >
          {({
            values,
            errors,
            touched,
            status,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <form className={styles.container} onSubmit={handleSubmit}>
              <TextArea
                name="text"
                autoComplete="off"
                value={values.text}
                onChange={handleChange}
                onBlur={handleBlur}
                hasError={touched.text && errors.text}
                errorMessage={errors.text && errors.text}
              />
              <p className={styles.status}>{status}</p>
              <Space>
                <Button
                  className={styles.button}
                  type="submit"
                  primary
                  disabled={isSubmitting}
                >
                  Edit Answer
                </Button>
                <Button
                  onClick={() => {
                    setEditMode(false)
                  }}
                  type="text"
                  className={styles.delete}
                >
                  Cancel
                </Button>
              </Space>
            </form>
          )}
        </Formik>
      )}

      <div className={styles.footer}>
        <div className={styles.row}>
          <div className={styles.tagContainer}>
            {tags?.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          <div className={styles.userDetails}>
            <Link href="/users/[user]" as={`/users/${author.username}`}>
              <a>
                <img
                  src={`https://secure.gravatar.com/avatar/${author.id}?s=32&d=identicon`}
                  alt={author.username}
                />
              </a>
            </Link>
            <div className={styles.info}>
              <span>
                {tags ? 'asked' : 'answered'}{' '}
                {formatDistanceToNowStrict(new Date(created), {
                  addSuffix: true
                })}
              </span>
              <Link href="/users/[user]" as={`/users/${author.username}`}>
                <a>{author.username}</a>
              </Link>
            </div>
          </div>
        </div>
        {editMode ? (
          <></>
        ) : (
          (authState.userInfo?.id === author.id || isAdmin()) && (
            <>
              <Space size="large">
                <a
                  className={styles.delete}
                  onClick={() => handleDeleteComment()}
                >
                  Delete
                </a>
                {answerId ? (
                  <a onClick={() => hadnleEditComment()}>edit</a>
                ) : (
                  <></>
                )}
              </Space>

            </>


          )
        )}
      </div>
    </div>
  )
}

export default PostSummary
