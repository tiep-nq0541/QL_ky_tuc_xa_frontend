import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import * as roomManagerService from '~/services/roomManagerService';

function InfoRoom() {
    const { id } = useParams();

    const [room, setRoom] = useState('');

    useEffect(() => {
        const fetchApi = async () => {
            const result = await roomManagerService.getRoomInfo(id);
            setRoom(result);
        };

        fetchApi();
    }, [id]);

    return (
        <div>
            <div>{room.tenPhong}</div>
            <div>{room.toaNha}</div>
            <div>{room.soLuong}</div>
        </div>
    );
}

export default InfoRoom;
