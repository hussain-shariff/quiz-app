const usePostData = (quizList) => {
    fetch('https://quiz-app-3a478-default-rtdb.asia-southeast1.firebasedatabase.app/quizList.json',{
            method : 'PUT',
            body : JSON.stringify(quizList)
        })
}

export default usePostData