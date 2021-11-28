import axios from 'axios'

const apiurl = 'http://103.8.79.68:8080'

interface ServerResponse{
    code: number,
    data: ServerData[],
    message: string,
    status: string
}

interface ServerData{
    id: number,
    name: string
}

export async function insert(endpoint: string = '', rawData: object = {}){
    try{
        const res = await axios.post(`${apiurl}/${endpoint}`, JSON.stringify(rawData))
    
        return res.data;
    }catch(error){
        console.error(error);
    }
}

export async function list(type: string = ''){
    const res = await axios.get<ServerResponse>(`${apiurl}/${type}`).then(response => response)
    
    return res.data
}
export async function detail(type: string, id: number){
    const res = await axios.get(`${apiurl}/${type}/${id}`).then(response => response)

    return res.data
}

export async function deleteData(type: string, id: number){
    try{
        const res = await axios.delete(`${apiurl}/${type}/${id}`).then(response => response)

        return res.data
    }catch(errors){
        console.error(errors)
    }
}

export async function uploadImage(files: any){
    return {
        message: 'Your files has success to upload!',
        status: 'success'
    }
}