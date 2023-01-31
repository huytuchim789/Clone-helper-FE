import { ContentState, convertToRaw, EditorState } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
// import htmlToDraft from 'html-to-draftjs'
import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const htmlToDraft =
  typeof window === 'object' && require('html-to-draftjs').default

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
)
const CustomEditor = ({
  onChange,
  value,
  placeholder,
  className,
  label,
  setFieldValue
}) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [updated, setUpdated] = useState(false)

  useEffect(() => {
    if (!updated) {
      const defaultValue = value ? value : ''
      const blocksFromHtml = htmlToDraft(defaultValue)
      const contentState = ContentState.createFromBlockArray(
        blocksFromHtml.contentBlocks,
        blocksFromHtml.entityMap
      )
      const newEditorState = EditorState.createWithContent(contentState)
      setEditorState(newEditorState)
    }
  }, [value])

  const onEditorStateChange = (editorState) => {
    setUpdated(true)
    setEditorState(editorState)
    setFieldValue(
      'profile',
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    )
    return onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())))
  }

  return (
    <React.Fragment>
      <div className={className}>
        <h2 style={{ fontWeight: 'bold' }}>{label}</h2>
        <Editor
          placeholder={placeholder}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          spellCheck
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
        />
      </div>
    </React.Fragment>
  )
}

export default CustomEditor
