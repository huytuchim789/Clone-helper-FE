import React, { useContext, useState } from 'react'
import Link from 'next/link'
import format from 'date-fns/format'

import { AuthContext } from '../../../../store/auth'
import { FetchContext } from '../../../../store/fetch'

import styles from './comment-item.module.css'
import { Space } from 'antd'
import { Formik } from 'formik'
import * as Yup from 'yup'
import TextArea from '../../../textarea'
import Button from '../../../button'

const CommentItem = ({
  author,
  created,
  isOwner,
  answerId,
  questionId,
  commentId,
  setQuestion,
  children
}) => {
  const { authState, isAdmin } = useContext(AuthContext)
  const { authAxios } = useContext(FetchContext)
  const [editMode, setEditMode] = useState(false)

  const handleDeleteComment = async () => {
    const res = window.confirm('Are you sure delete your comment?')
    if (res) {
      const { data } = await authAxios.delete(
        answerId
          ? `/comment/${questionId}/${answerId}/${commentId}`
          : `/comment/${questionId}/${commentId}`
      )

      setQuestion(data)
    }
  }
  const handleEditComment = async () => {
    setEditMode(true)
  }
  return (
    <div className={styles.commentContainer}>
      {!editMode ? (
        <>
          <p>{children} –</p> &nbsp;
        </>
      ) : (
        <Formik
          initialValues={{ comment: children }}
          onSubmit={async (values, { setStatus, resetForm }) => {
            try {
              const { data } = await authAxios.put(
                answerId
                  ? `/comment/${questionId}/${answerId}/${commentId}`
                  : `/comment/${questionId}/${commentId}`,
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
            comment: Yup.string()
              .required('comment is missing.')
              .min(6, 'comment must be at least 6 characters.')
              .max(1000, 'comment cannot be longer than 1000 characters.')
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
                name="comment"
                autoComplete="off"
                value={values.comment}
                onChange={handleChange}
                onBlur={handleBlur}
                hasError={touched.comment && errors.comment}
                errorMessage={errors.comment && errors.comment}
              />
              <p className={styles.status}>{status}</p>
              <Space>
                <Button
                  className={styles.button}
                  type="submit"
                  primary
                  disabled={isSubmitting}
                >
                  Edit Comment
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
      <Link href="/users/[user]" as={`/users/${author}`}>
        <a className={isOwner ? styles.owner : undefined}>{author}</a>
      </Link>
      &nbsp;
      <p className={styles.dateText}>
        {format(new Date(created), "MMM dd'`'yy 'at' k':'mm")}{' '}
      </p>
      {(authState.userInfo?.username === author || isAdmin()) && !editMode && (
        <Space>
          <a className={styles.delete} onClick={() => handleDeleteComment()}>
            delete
          </a>
          <a onClick={() => handleEditComment()}>edit</a>
        </Space>
      )}
    </div>
  )
}

export default CommentItem
