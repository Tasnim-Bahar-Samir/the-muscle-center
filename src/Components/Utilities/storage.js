const setToLocal = (time)=>{
    localStorage.setItem('time',time);
}

const getFromLocal = ()=>{
    return JSON.parse(localStorage.getItem('time'))
}
export{setToLocal,getFromLocal}