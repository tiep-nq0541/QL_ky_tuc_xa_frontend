import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';

import styles from './Success.module.scss';

const cx = classNames.bind(styles);

function Success({ message }) {
    return (
        <div className={cx('message')}>
            <FontAwesomeIcon icon={faCheckCircle} />
            <p>{message}</p>
        </div>
    );
}

Success.propTypes = {
    message: PropTypes.string,
};

export default Success;
