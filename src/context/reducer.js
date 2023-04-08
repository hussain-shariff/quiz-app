export const initialState = {
    quizName : "",
    description : "",
    gradingSystem : "simple",
    timeLimit : "2",
    quizList : [],
    questionsList : [],
    question : '',
    optionA:'',
    optionB:'',
    optionC:'',
    optionD:'',
    correctAnswer:'',
    editQuizId : ''
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
            timeLimit : "2",
            question : '',
            optionA:'',
            optionB:'',
            optionC:'',
            optionD:'',
            correctAnswer:''
        }
    }
    if(action.type === "HANDLE_CHANGE"){
        return {
            ...state,
            [action.payload.name] : action.payload.value
        }
    }
    
    if(action.type === "SET_EDIT_BY"){
        return {
            ...state,
            editQuizId : action.id
        }
    }
    
    if(action.type === "ADD_QUESTION"){
        const newQuestion = {
            createdBy : state.editQuizId,
            question : state.question,
            optionA: state.optionA,
            optionB: state.optionB,
            optionC: state.optionC,
            optionD: state.optionD,
            correctAnswer: state.correctAnswer
        }
        const updatedQuestionsList = [...state.questionsList, newQuestion]

        return {
            ...state,
            questionsList : updatedQuestionsList
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