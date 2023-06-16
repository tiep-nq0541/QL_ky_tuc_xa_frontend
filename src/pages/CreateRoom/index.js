import { useState } from 'react';
import Button from '~/components/Button';
import * as roomManagerService from '~/services/roomManagerService';

function CreateRoom() {
    const [tenPhong, setTenPhong] = useState('');
    const [toaNha, setToaNha] = useState('');
    const [soLuong, setSoLuong] = useState('');

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
    };
    return (
        <div>
            <input type="text" value={tenPhong} onChange={handleTenPhongChange} />
            <input type="text" value={toaNha} onChange={handleToaNhaChange} />
            <input type="text" value={soLuong} onChange={handleSoLuongChange} />
            <Button onClick={handleFormSubmit}>Them</Button>
        </div>
    );
}

export default CreateRoom;
