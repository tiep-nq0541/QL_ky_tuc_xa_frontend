import { useState, useEffect } from 'react';
import * as studentManagerService from '~/services/studentManagerService';

import Button from '~/components/Button/Button';
import Success from '~/components/Success/Success';

function StudentManager() {
    const [students, setStudents] = useState([]);
    const [message, setMessage] = useState('');

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
                    <Button onClick={() => deleteStudent(student.id)}>Xoa</Button>
                </li>
            ))}
        </div>
    );
}

export default StudentManager;
