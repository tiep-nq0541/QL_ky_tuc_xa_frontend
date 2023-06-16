import { useEffect, useState } from 'react';
import Button from '~/components/Button';
import * as roomManagerService from '~/services/roomManagerService';

import config from '~/config';
import Success from '~/components/Success/Success';

function RoomManager() {
    const [rooms, setRooms] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchRooms();
    }, []);

    const fetchRooms = async () => {
        const result = await roomManagerService.getRoom();
        setRooms(result);
        setTimeout(() => {
            setMessage('');
        }, 3000);
    };

    const deleteRoom = async (id) => {
        try {
            const mess = await roomManagerService.remove(id);
            setMessage(mess);
            fetchRooms();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            {!!message && <Success message={message} />}
            <Button to={config.routes.createRoom}>Them</Button>
            {rooms.map((room) => (
                <li key={room.id}>
                    <div>{room.tenPhong}</div>
                    <div>{room.toaNha}</div>
                    <div>{room.soLuong}</div>
                    <Button to={`/admin/quan-ly-phong/${room.id}/edit`}>Sua</Button>
                    <Button onClick={() => deleteRoom(room.id)}>Xoa</Button>
                </li>
            ))}
        </div>
    );
}

export default RoomManager;
