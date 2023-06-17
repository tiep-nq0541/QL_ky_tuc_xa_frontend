import { useEffect, useState } from 'react';
import Button from '~/components/Button';
import * as roomManagerService from '~/services/roomManagerService';

import config from '~/config';
import Success from '~/components/Success/Success';
import ModalBtn from '~/components/Modal';

function RoomManager() {
    const [rooms, setRooms] = useState([]);
    const [message, setMessage] = useState('');
    const [deleteRoomId, setDeleteRoomId] = useState(null);

    const handleClose = () => setDeleteRoomId(null);
    const handleShow = (roomId) => setDeleteRoomId(roomId);

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

                    <Button to={`/admin/quan-ly-phong/${room.id}/edit`}>Sửa</Button>
                    {/* <Button onClick={() => deleteRoom(room.id)}>Xoa</Button> */}
                    <Button onClick={() => handleShow(room.id)}>Xóa</Button>
                    <ModalBtn
                        show={deleteRoomId === room.id}
                        textHeader="Xoá phòng?"
                        textBody="Hành động này không thể khôi phục. Bạn chắc chắn muốn xóa phòng này?"
                        textFooter="Xác nhận"
                        handleClose={handleClose}
                        handleDelete={() => {
                            setDeleteRoomId(null);
                            deleteRoom(room.id);
                        }}
                    />
                </li>
            ))}
        </div>
    );
}

export default RoomManager;
