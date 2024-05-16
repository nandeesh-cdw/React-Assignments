import classNames from 'classnames'
import React, { useEffect, useRef } from 'react'
import styles from './Textarea.module.scss'
import { useSelector } from 'react-redux'
import { RootState, TextareaProps } from '../../models/models'
function Textarea(props: TextareaProps) {
  const darkMode = useSelector((state: RootState) => state.navbar.darkMode)
  const editable = props?.editable;
  const titleTextareaRef = useRef<HTMLTextAreaElement>(null);
  console.log("Focus" +props.focus);
  useEffect(() => {
    console.log("Focus" +props.focus);
    
    if(props.focus) {

      titleTextareaRef.current.focus()
    }
  },[props.focus])
  const textStyles = classNames({
    [styles.blog_title]: props.blogTitle,
    [styles.blog_description]: props.blogDescription,
    [styles.blog_details]: props.blogDetail,
    [styles.light_text]: darkMode
  })
  return (
    <textarea className={textStyles} readOnly={!editable} onChange={(event) => props.onChange(event.target.value)} value={props.value} placeholder={props.placeholder} ref={titleTextareaRef}>

    </textarea>
  )
}

export default Textarea