import { getRepository } from "typeorm";
import { Student } from '../entity/Student';
import { Request, Response } from "express";
 
export const getStudents = async(request: Request, response: Response) => {
    const students = await getRepository(Student).find()
    return response.json(students);
};
 
export const saveStudent = async(request: Request, response: Response) => {
    const students = await getRepository(Student).save(request.body)
    return response.json(students);
};
 
export const getStudent = async(request: Request, response: Response) => {
    const {id} = request.params
    const students = await getRepository(Student).findOne(id)
    return response.json(students);
};
 
export const updateStudent = async(request: Request, response: Response) => {
    const {id} = request.params
    const students = await getRepository(Student).update(id, request.body)
 
    if (students.affected == 1){
        const taskUpdated = await getRepository(Student).findOne(id)
        return response.json(Student);
    }
    else{
        return response.status(404).json( {message: 'Estudante não encontrada!'} )
    }
};
 
export const deleteStudent = async(request: Request, response: Response) => {
    const {id} = request.params
    const students = await getRepository(Student).delete(id)
 
    if (students.affected == 1){
        return response.status(200).json( {message: "Estudante excluída com sucesso!"} );
    }
    else{
        return response.status(404).json( {message: 'Estudante não encontrada!'} )
    }
};
