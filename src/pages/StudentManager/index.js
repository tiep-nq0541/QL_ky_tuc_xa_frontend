import { useState, useEffect } from 'react';
import * as studentManagerService from '~/services/studentManagerService';

import Button from '~/components/Button/Button';
import Success from '~/components/Success/Success';
import ModalBtn from '~/components/Modal';
import SearchRoom from '~/components/SearchRoom';

function StudentManager() {
    const [students, setStudents] = useState([]);
    const [message, setMessage] = useState('');
    const [deleteStudentId, setDeleteStudentId] = useState(null);
    const [roomId, setRoomId] = useState(null);
    const [tenPhong, setTenPhong] = useState('');
    const [toaNha, setToaNha] = useState('');
    const [soLuong, setSoLuong] = useState();

    const handleClose = () => setDeleteStudentId(null);
    const handleShow = (studentId) => setDeleteStudentId(studentId);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        const result = await studentManagerService.getStudents();
        setStudents(result);
        setTimeout(() => {
            setMessage('');
        }, 3000);
    };

    const deleteStudent = async (id) => {
        try {
            const mess = await studentManagerService.remove(id);
            setMessage(mess);
            fetchStudents();
        } catch (error) {
            console.error(error);
        }
    };

    const handleAddStudenToRoom = async (id, roomId) => {
        try {
            await studentManagerService.addStudentToRoom(id, roomId);
        } catch (error) {
            console.error(error);
        }
    };

    const handleRoomClick = (id_phong, ten_phong, toa_nha, so_luong) => {
        setRoomId(id_phong);
        setTenPhong(ten_phong);
        setToaNha(toa_nha);
        setSoLuong(so_luong);
    };
    return (
        <div>
            {!!message && <Success message={message} />}
            {students.map((student) => (
                <li key={student.id}>
                    <div>{student.hoTen}</div>
                    <div>{student.email}</div>
                    <div>{student.gioiTinh}</div>
                    <div>{student.maSV}</div>
                    <div>{student.ngaySinh}</div>
                    <div>{student.soDienThoai}</div>
                    <Button to={`/admin/quan-ly-sinh-vien/${student.id}/edit`}>Sua</Button>
                    {/* <Button onClick={() => deleteStudent(student.id)}>Xoa</Button> */}
                    <Button onClick={() => handleShow(student.id)}>Xóa</Button>
                    <ModalBtn
                        show={deleteStudentId === student.id}
                        textHeader="Xóa sinh viên?"
                        textBody="Hành động này không thể khôi phục. Bạn chắc chắn muốn xóa sinh viên này?"
                        textFooter="Xác nhận"
                        handleClose={handleClose}
                        handleDelete={() => {
                            setDeleteStudentId(null);
                            deleteStudent(student.id);
                        }}
                    />

                    <Button>Thêm sinh viên vào phòng</Button>
                    <SearchRoom onRoomClick={handleRoomClick} />
                    {roomId}
                    {tenPhong}
                    {toaNha}
                    {soLuong}
                    <Button onClick={() => handleAddStudenToRoom(student.id, roomId)}>Thêm sinh viên</Button>
                </li>
            ))}
        </div>
    );
}

export default StudentManager;
