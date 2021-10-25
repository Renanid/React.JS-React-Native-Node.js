import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import api from '../../services/api';
 
interface ITask{
    id: number;
    name: String;
    ra: String;
    borndate: String;
    adress: String;
}
 
const Tasks: React.FC = () => {
 
    const [tasks, setTasks] = useState<ITask[]>([])
 
    useEffect(() => {
        loadTasks()
    }, [])
 
    async function loadTasks() {
        const response = await api.get('/student')
        console.log(response);
        setTasks(response.data)
    }
 
    return (
        
        <div className="container">
            <br />
            <h1>Página de Estudantes</h1>
            <br />
            <Button variant="success">Adicionar Aluno</Button>{' '}
            <br/>
            <br/>
            <Table striped bordered hover className="text-center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>RA</th>
                        <th>Nascimento</th>
                        <th>Endereço</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map(task => (
                            <tr key={task.id}>
                                <td>{task.id}</td>
                                <td>{task.name}</td>
                                <td>{task.ra}</td>
                                <td>{task.borndate}</td>
                                <td>{task.adress}</td>
                                <td>
                                <Button variant="warning">Alterar</Button>{' '}
                                <Button variant="danger">Excluir</Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
                
            </Table>
            
        </div>
    );
}
export default Tasks;