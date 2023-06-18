import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles); // Tạo một hàm bind classNames với file CSS module

function AccountItem({ data }) {
    return (
        // tạo đường dẫn đến data.nickname
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            {/* hiển thị hình ảnh */}
            <Image className={cx('avartar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{data.nickname}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>}
                </p>
                <span className={cx('username')}>{data.full_name}</span>
            </div>
        </Link>
    );
}
// kiểu trả về của data là obj
AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
