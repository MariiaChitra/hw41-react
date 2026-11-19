import { useState } from "react";

function StudentList() {
    const [students, setStudents] = useState([
        {
            id: 1,
            name: "Anna"
        },
        {
            id: 2,
            name: "David"
        }
    ]);

    const [name, setName] = useState("");

    // 1. Добавление элемента в массив
    const addStudent = () => {
        if (!name.trim()) return;

        const newStudent = {
            id: crypto.randomUUID(),
            name: name.trim()
        };

        setStudents([...students, newStudent]);
        setName("");
    };

    // 2. Удаление элемента по ID
    const deleteStudent = (id) => {
        setStudents(students.filter((student) => student.id !== id));
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Имя студента"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button onClick={addStudent}>Добавить</button>
            </div>

            {students.map((student) => (
                <p key={student.id}>
                    {student.name}{" "}
                    <button onClick={() => deleteStudent(student.id)}>
                        Удалить
                    </button>
                </p>
            ))}
        </div>
    );
}

export default StudentList;