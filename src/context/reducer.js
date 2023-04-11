import { v4 as uuidv4 } from 'uuid';

export const initialState = {
    quizName : "",
    selectedChoice: '',
    description : "",
    gradingSystem : "simple",
    timeLimit : "2",
    isChange : false,
    quizList : [],
    quizQuestions:[],
    selectedChoices:[],
    question : '',
    optionA:'',
    optionB:'',
    optionC:'',
    optionD:'',
    correctAnswer:'A',
    editQuizId : ''
}

function quizReducer(state, action) {

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
            correctAnswer:'A'
        }
    }
    if(action.type === "HANDLE_CHANGE"){
        return {
            ...state,
            [action.payload.name] : action.payload.value
        }
    }
    
    if(action.type === "SET_SELECTED_CHOICE"){
        return {
            ...state,
            selectedChoice : action.choice
        }
    }
    if(action.type === "SET_SELECTED_CHOICE_ARRAY"){
        const updatedSelectedChoices = [...state.selectedChoices];
        updatedSelectedChoices[action.payload.idx] = action.payload.val;
        return {
            ...state,
            selectedChoices : updatedSelectedChoices
        }
    }
    
    if(action.type === "SET_EDIT_BY"){
        return {
            ...state,
            editQuizId : action.id
        }
    }
    
    if(action.type === "SET_QUESTIONS"){
        return {
            ...state,
            quizQuestions : action.questions,
            selectedChoices : new Array(action.questions.length).fill(0)
        }
    }
    
    if(action.type === "REPLACE_DATA"){
        return {
            ...state,
            quizList : action.res
        }
    }
    
    if(action.type === "DELETE_QUESTION"){
        const itemPresentIndex = state.quizList.findIndex(item=> item._id === state.editQuizId);
        let existingItem = state.quizList[itemPresentIndex];
        const updatedQuestions = existingItem.questions.filter(item=> item.question !== action.question)
        existingItem = {
            ...existingItem,
            questions : updatedQuestions
        }
        let updatedItems =  [...state.quizList];
        updatedItems[itemPresentIndex] = existingItem;

        return {
            ...state,
            quizList : updatedItems,
            quizQuestions: updatedQuestions,
            isChange : true
        }
    }
    
    if(action.type === "ADD_QUESTION"){
        let answerFromOptions;
        if(state.correctAnswer === 'A'){
            answerFromOptions = state.optionA
        }
        else if( state.correctAnswer === "B"){
            answerFromOptions = state.optionB
        }
        else if( state.correctAnswer === "C"){
            answerFromOptions = state.optionC
        }
        else if( state.correctAnswer === "D"){
            answerFromOptions = state.optionD
        }
        const newQuestion = {
            question : state.question,
            optionA: state.optionA,
            optionB: state.optionB,
            optionC: state.optionC,
            optionD: state.optionD,
            correctAnswer: answerFromOptions
        }
        const itemPresentIndex = state.quizList.findIndex(item=> item._id === state.editQuizId);
        let existingItem = state.quizList[itemPresentIndex];
        const updatedQuestions = existingItem.questions.concat(newQuestion)
        existingItem = {
            ...existingItem,
            questions : updatedQuestions,
            isChange : true
        }
        let updatedItems =  [...state.quizList];
        updatedItems[itemPresentIndex] = existingItem;
        return {
            ...state,
            quizList : updatedItems
        }
    }

    if(action.type === "CREATE_QUIZ"){
        const id = uuidv4();
        const quiz = {
            _id : id,
            quizName : state.quizName,
            description : state.description,
            gradingSystem : state.gradingSystem,
            timeLimit : state.timeLimit,
            questions : [
                {question : 'Which of the following is an example of a dynamically typed programming language?',
                optionA: 'java',
                optionB: 'python',
                optionC: 'ruby',
                optionD: 'rust',
                correctAnswer: 'python'}
            ]
        }
        const updatedQuizList = [...state.quizList, quiz]
        return {
            ...state,
            quizList : updatedQuizList,
            isChange : true
        }
    }
}

export default quizReducer

