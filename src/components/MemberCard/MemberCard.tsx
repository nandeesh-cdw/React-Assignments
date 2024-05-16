import { useSelector } from 'react-redux'
import classNames from 'classnames'
import styles from './MemberCard.module.scss'
import Image from '../Image/Image'
import { MemberCardProps, RootState } from '../../models/models'

function MemberCard(props: MemberCardProps) {
    const darkMode = useSelector((state: RootState) => state.navbar.darkMode)
    const nameStyles = classNames(styles.name, {
        [styles.light_text]: darkMode
    })
    const locationStyles = classNames(styles.location, {
        [styles.light_text]: darkMode
    })
    return (
        <div className={styles.card_wrapper} data-testid="member-card">
            <div className={styles.image_wrapper}>
                <Image src={props.member.photo} alt={props.member.name} isMemberImage={true}></Image>
            </div>
            <div className={styles.name_wrapper}>
                <div className={nameStyles}>
                    {props.member.name}
                </div>
            </div>
            <div className={styles.location_wrapper}>
                <div className={locationStyles}>
                    {props.member.address.city}
                </div>
            </div>
        </div>
    )
}

export default MemberCard