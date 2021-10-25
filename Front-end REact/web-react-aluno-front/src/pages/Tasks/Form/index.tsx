import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import api from '../../../services/api';

 
interface ITask{
    id: number;
    title: string;
    description: string;
    finished: boolean;
    created_at: Date;
    updated_at: Date;
}
 
const Tasks: React.FC = () => {
 
    return (
        
        <div className="container">
            <br />
            <div className="task-header">
                <h1>Nova Tarefa</h1>
                <Button variant="dark" size="sm">Voltar</Button>
            </div>
            <br />
        </div>
    );
}
 
export default Tasks;