import axios from 'axios'

const Studenturl = 'http://localhost:5000/students'
const Appurl = 'http://localhost:5000/App'
const Clerkurl = 'http://localhost:5000/clerk'
const adminurl = 'http://localhost:5000/admin'

export  const LoginClerk=(user)=>axios.post(`${adminurl}/login`,user)
export const allStudent=()=>axios.get(`${adminurl}/st`)
export const allClerk=()=>axios.get(`${adminurl}/ck`)
export const allApps=()=>axios.get(`${adminurl}/apps`)


export const newStudent = ( student) => axios.post(adminurl+'/news',student  ,{
    headers: {
      'Content-Type': 'multipart/form-data'
      
    }
  })
  
export const newClerk = (clerk) => axios.post(`${adminurl}/newc`,clerk 

  )
  

export const deletStduent =(obj)=>axios.delete(adminurl+'/delets',
{data:obj})

export const deletClerk =(obj)=>axios.delete(adminurl+'/deletc',
{data:obj})
export const deletApp =(obj)=>axios.delete(adminurl+'/deleta',
{data:obj})

export const studentById =(id)=>axios.get(Studenturl+`/${id}`)
export const clerkById =(id)=>axios.get(Clerkurl+`/${id}`)
export const updateStudent =(student)=>axios.put(adminurl+`/updates`,student,{
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})
export const updateClerk =(clerk)=>axios.put(adminurl+`/updatec`,clerk)