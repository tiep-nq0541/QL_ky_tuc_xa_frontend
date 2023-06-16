import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import Button from '~/components/Button/Button';
import Success from '~/components/Success/Success';

import * as roomManagerService from '~/services/roomManagerService';

function EditRoom() {
    const { id } = useParams();

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
            id: id,
            tenPhong: tenPhong,
            toaNha: toaNha,
            soLuong: soLuong,
        };

        try {
            await roomManagerService.put(id, data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const fetchApi = async () => {
            const result = await roomManagerService.edit(id);
            setTenPhong(result.tenPhong);
            setToaNha(result.toaNha);
            setSoLuong(result.soLuong);
        };

        fetchApi();
    }, [id]);

    const onclick = () => {
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 3000);
    };
    return (
        <div>
            {showMessage && <Success message="Lưu thông tin thành công" />}
            <form onSubmit={handleFormSubmit}>
                <input type="text" value={tenPhong} onChange={handleTenPhongChange} />
                <input type="text" value={toaNha} onChange={handleToaNhaChange} />
                <input type="text" value={soLuong} onChange={handleSoLuongChange} />
                <Button type="submit" onClick={onclick}>
                    Luu
                </Button>
            </form>
        </div>
    );
}

export default EditRoom;
