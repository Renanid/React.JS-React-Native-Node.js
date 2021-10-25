import { Router, request, response, Request, Response} from 'express'
 
import { getStudent, getStudents, saveStudent, updateStudent, deleteStudent } from './controller/StudentController';


const routes = Router()
 
routes.get('/home', (request: Request, response: Response) => {
    return response.json({ message: 'Teste' })
})

routes.get('/student', getStudents)
routes.get('/student/:id', getStudent)
routes.post('/student', saveStudent)
routes.put('/student/:id', updateStudent)
routes.delete('/student/:id', deleteStudent)
 
export default routes