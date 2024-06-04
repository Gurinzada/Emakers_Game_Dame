export interface User{
    id?:string|undefined
    UserName:string,
    Email:string,
    CPF:number,
    Password:string
}

export async function getDataById(id:string|undefined){
    const response = await fetch(`http://localhost:3000/users/${id}`)
    const data = response.json()
    return data
}


export function ConfirmCPF(cpf:number){
    const regexCPF = /^([0-9]{11})$/gm
    const test = regexCPF.test(String(cpf))
    if(test){
        return true
    } else{
        return false
    }
}