export const setlocal=(key,data)=>{
    localStorage.setItem(key,JSON.stringify(data))
}

export const getlocal=(key)=>{

    try{
        let data=localStorage.getItem(key)
        data=JSON.parse(data)
        return data
    }catch{
        return ;
    }
}