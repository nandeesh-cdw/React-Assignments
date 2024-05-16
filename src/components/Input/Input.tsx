import classNames from 'classnames'
import styles from './Input.module.scss'
import { InputProps, RootState } from '../../models/models'
import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
function Input(props: InputProps) {
  const darkMode = useSelector((state: RootState) => state.navbar.darkMode);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputStyles = classNames({
    [styles.blog_title]: props.blogTitle,
    [styles.blog_details]: props.blogDetail,
    [styles.search]: props.search,
    [styles.light_text]: darkMode,
    [styles.input_dark]: props.search && darkMode
  });

  useEffect(()=>{
    if(props.focus){
      inputRef.current.focus();
    }
  },[props.focus]);

  return (
    <input className={inputStyles} type={props.type} placeholder={props.placeholder} onChange={(event) => props.onChange(event.target.value)} value={props.value} ref={inputRef}/>
  )
}

export default Input