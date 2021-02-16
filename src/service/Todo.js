import Http from './http'

export const create = ({Tarefa})=>Http.post('/todo',{Tarefa});

export const getAll =(page = 0,extraParams = {}) =>{
    const params = { page,...extraParams };

    return http.get('/todo',{params});
}