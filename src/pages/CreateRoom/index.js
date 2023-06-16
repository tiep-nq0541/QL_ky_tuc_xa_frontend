import { useState } from 'react';
import Button from '~/components/Button';
import Success from '~/components/Success/Success';
import config from '~/config';
import * as roomManagerService from '~/services/roomManagerService';

function CreateRoom() {
    const [tenPhong, setTenPhong] = useState('');
    const [toaNha, setToaNha] = useState('');
    const [soLuong, setSoLuong] = useState('');

    const [showMessage, setShowMessage] = useState(false);

    const handleTenPhongChange = (event) => {
        setTenPhong(event.target.value);
    };

    const handleToaNhaChange = (event) => {
        setToaNha(event.target.value);
    };

    const handleSoLuongChange = (event) => {
        setSoLuong(event.target.value);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const data = {
            tenPhong: tenPhong,
            toaNha: toaNha,
            soLuong: soLuong,
        };

        try {
            await roomManagerService.post(data);
        } catch (error) {
            console.error(error);
        }

        setTenPhong('');
        setToaNha('');
        setSoLuong('');

        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 3000);
    };
    return (
        <div>
            {showMessage && <Success message="Thêm phòng thành công" />}
            <input type="text" value={tenPhong} onChange={handleTenPhongChange} />
            <input type="text" value={toaNha} onChange={handleToaNhaChange} />
            <input type="text" value={soLuong} onChange={handleSoLuongChange} />
            <Button onClick={handleFormSubmit} to={config.routes.roomManager}>
                Them
            </Button>
        </div>
    );
}

export default CreateRoom;
