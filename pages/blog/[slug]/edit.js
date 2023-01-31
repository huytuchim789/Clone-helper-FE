import React from 'react';
import Head from 'next/head'

import { publicFetch } from '../../../util/fetcher'
import Header from '../../../components/layout/header'
import QuestionForm from '../../../components/question-ask-view/question-form'
import { useRouter } from 'next/router';
import BlogEditView from '../../../components/blog-edit-view';
import BlogForm from '../../../components/blog-edit-view/blog-form';
import { useState } from 'react';
import { useEffect } from 'react';

const Edit = ({ questionId, title }) => {
    const [question, setQuestion] = useState(null)
    const [blogTitle, setBlogTitle] = useState('')
    const [blogText, setBlogText] = useState('')

    useEffect(() => {
        const fetchQuestion = async () => {
          const { data } = await publicFetch.get(`/blog-by-id/?id=${questionId}`)
          // console.log('data>>>',data.title, data.text);
          setQuestion(data)
          setBlogTitle(data.title)
          setBlogText(data.text)
        }
    
        fetchQuestion()
      }, [])
  return (
    <div>
      <Header />
        <Head>
          <title>Edit a Blog - CodingHepler</title>
        </Head>
      <Header />
      {question && 
      <BlogEditView>
       <BlogForm blog={question} questionId={questionId} />
      </BlogEditView>}
    </div>
  )
}

export async function getServerSideProps(context) {
    const slug = context.params.slug
    const questionId = slug.split('-').shift()
    const title = slug
      ?.substr(slug.indexOf('-') + 1)
      .split('-')
      .join(' ');
    return {
      props: {
        questionId,
        title
      }
    }
  }

export default Edit
