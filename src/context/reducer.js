export const initialState = {
    quizName : "",
    description : "",
    gradingSystem : "simple",
    timeLimit : "2",
    quizList : []
}

function quizReducer(state, action) {
    if(action.type === "SET_USER"){
        const {username, lastname, location } = action.userData
        return {
            ...state,
        }
    }
    if(action.type === "CLEAR_VALUES"){
        return {
            ...state,
            quizName : "",
            description : "",
            gradingSystem : "simple",
            timeLimit : "2"
        }
    }
    if(action.type === "HANDLE_CHANGE"){
        return {
            ...state,
            [action.payload.name] : action.payload.value
        }
    }
    if(action.type === "CREATE_QUIZ"){
        const quiz = {
            quizName : state.quizName,
            description : state.description,
            gradingSystem : state.gradingSystem,
            timeLimit : state.timeLimit
        }
        const updatedQuizList = [...state.quizList, quiz]
        return {
            ...state,
            quizList : updatedQuizList
        }
    }
}

export default quizReducer