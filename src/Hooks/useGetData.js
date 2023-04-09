
const useGetData= async ()=> {
    let res = await fetch('https://quiz-app-3a478-default-rtdb.asia-southeast1.firebasedatabase.app/quizList.json')
    res = await res.json()
    return res
}

export default useGetData