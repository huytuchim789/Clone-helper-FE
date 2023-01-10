import React from 'react';
import Head from 'next/head'

import QuestionAskView from '../../components/question-ask-view'
import Header from '../../components/layout/header'
import QuestionForm from '../../components/question-ask-view/question-form'
import BlogCreateView from '../../components/blog-create-view';
import BlogForm from '../../components/blog-create-view/blog-form';

const Ask = () => {
  return (
    <div>
      <Header />
        <Head>
          <title>Create a Blog - CodingHepler</title>
        </Head>
      <Header />
      <BlogCreateView>
        <BlogForm />
      </BlogCreateView>
    </div>
  )
}

export default Ask
