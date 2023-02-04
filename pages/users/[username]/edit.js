import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import { publicFetch } from '../../../util/fetcher'
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons'
import { Col, message, Row, Space, Upload } from 'antd'
import Layout from '../../../components/layout'

import Link from 'next/link'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { EditorState } from 'draft-js'

import { FetchContext } from '../../../store/fetch'
import { AuthContext } from '../../../store/auth'
import TextArea from '../../../components/textarea'
import styles from './edit.module.css'
import Button from '../../../components/button'
import CustomEditor from '../../../components/custom-editor'
import FormInput from '../../../components/form-input'
import { useContext } from 'react'
import { blobToBase64 } from '../../../util/blobToBase64'
import { useRouter } from 'next/router'
import { Select } from 'antd'

const getBase64 = (img, callback) => {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!')
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!')
  }
  return isJpgOrPng && isLt2M
}
const exps = [
  { value: '0-3', label: '0-3' },
  { value: '3-5', label: '3-5' },
  { value: '> 10', label: '> 10' }
]
const UserDetail = ({ username }) => {
  const [loading, setLoading] = useState(false)
  const [userInfo, setUserInfo] = useState(null)
  const [imageUrl, setImageUrl] = useState()
  const { authAxios } = useContext(FetchContext)
  const { isAuthenticated, authState } = useContext(AuthContext)
  const router = useRouter()
  const handleImageChange = (info, setFieldValue) => {
    // if (info.file.status === 'uploading') {
    //   setLoading(true)
    //   return
    // }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false)
        setImageUrl(url)
        setFieldValue('img', URL.createObjectURL(info.file.originFileObj))
      })
    }
  }

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8
        }}
      >
        Upload
      </div>
    </div>
  )
  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await publicFetch.get(`/user/${username}`)
      setUserInfo(data)
    }

    fetchUser()
  }, [username])
  return (
    <Layout extra={false}>
      <Head>
        <title>Users {username} - CodingHepler</title>
      </Head>
      <Formik
        initialValues={{
          displayName: userInfo?.displayName,
          profile: userInfo?.profile,
          img: userInfo?.profilePhoto,
          exp: userInfo?.exp
        }}
        onSubmit={async (values, { setStatus, resetForm }) => {
          setLoading(true)
          if (imageUrl) values.img = imageUrl
          // const img = blobToBase64(values.img)
          try {
            const { data } = await authAxios.post(`/user-edit`, values)
            setLoading(false)

            message.success('Edit Successfully')
          } catch (error) {
            message.error(error.response.data.message)
            setLoading(false)
          }
          // setLoading(false)
        }}
        enableReinitialize
        validationSchema={Yup.object({
          displayName: Yup.string()
            .required('Username is missing.')
            .min(1, 'Username must be at least 1 characters.')
            .max(300, 'Username cannot be longer than 300 characters.'),
          profile: Yup.string().max(
            30000,
            'profile cannot be longer than 30000 characters.'
          )
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
          isSubmitting,
          setFieldValue
        }) => (
          <form className={styles.container} onSubmit={handleSubmit}>
            <Row justify="center" align="middle" style={{ height: '100%' }}>
              <Col span={8}>
                <Upload
                  name="img"
                  listType="picture-card"
                  className={styles.upload}
                  showUploadList={false}
                  beforeUpload={beforeUpload}
                  onChange={(info) => {
                    handleImageChange(info, setFieldValue)
                  }}
                >
                  {values.img ? (
                    <img
                      src={values.img}
                      alt="avatar"
                      style={{
                        width: '100%'
                      }}
                    />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              </Col>
              <Col span={16}>
                <Space size={'large'} direction="vertical">
                  <FormInput
                    label="Display Name"
                    type="text"
                    name="displayName"
                    autoComplete="off"
                    value={values.displayName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    hasError={touched.displayName && errors.displayName}
                    errorMessage={errors.displayName && errors.displayName}
                  />
                  <CustomEditor
                    value={values.profile}
                    onChange={handleChange}
                    placeholder={''}
                    keyField="profile"
                    setFieldValue={setFieldValue}
                    label="Profile"
                    className={styles.editor}
                  />
                  <h2 style={{ fontWeight: 'bold' }}>Experience years</h2>

                  <Select
                    name="exp"
                    value={values.exp}
                    style={{ width: 120 }}
                    onChange={(value) => {
                      setFieldValue('exp', value)
                    }}
                    options={exps}
                  ></Select>
                  <p className={styles.status}>{status}</p>
                  <div className={styles.button}>
                    <Button
                      type="submit"
                      primary
                      isLoading={loading}
                      disabled={isSubmitting}
                    >
                      Save
                    </Button>
                  </div>
                </Space>
              </Col>
            </Row>
          </form>
        )}
      </Formik>
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
