import classNames from 'classnames'
import styles from './Input.module.scss'
function Input(props:any) {
  const classnames = classNames({
    [styles.default] : props.isLogin,
    [styles.lottery] : props.isLottery
  })
  return (
    <input className={classnames} type={props.type} placeholder={props.placeholder} onChange={(event)=> props.onChange(event.target.value)}  value={props.value}/>
  )
}

export default Input