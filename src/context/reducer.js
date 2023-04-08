export const initialState = {
    quizName : "",
    description : "",
    gradingSystem : "simple",
    timeLimit : "2",
    quizList : [
        {
            _id : 111,
            quizName : 'javascript',
            description : 'data structures and algo',
            gradingSystem : 'simple',
            timeLimit : '2',
            questions : [
                {
                    question : 'JavaScript is a _____ Side Scripting Language.',
                    optionA: 'server',
                    optionB: 'browser',
                    optionC: 'ISP',
                    optionD: "None of the above",
                    correctAnswer: 'B'
                },
                {
                    question : 'Which of the following purpose, JavaScript is designed for ?',
                    optionA: 'server',
                    optionB: 'browser',
                    optionC: 'ISP',
                    optionD: "None of the above",
                    correctAnswer: 'B'
                },
                {
                    question : 'JavaScript can be written',
                    optionA: 'server',
                    optionB: 'browser',
                    optionC: 'ISP',
                    optionD: "None of the above",
                    correctAnswer: 'B'
                },
                {
                    question : 'JavaScript code is written inside file having extension',
                    optionA: 'server',
                    optionB: 'browser',
                    optionC: 'ISP',
                    optionD: "None of the above",
                    correctAnswer: 'B'
                }
            ]
        },
        {
            _id : 222,
            quizName : 'python',
            description : 'OOPS',
            gradingSystem : 'weighted',
            timeLimit : '1',
            questions : [
                {
                    question : 'What is a correct syntax to output "Hello World" in Python?',
                    optionA: 'server',
                    optionB: 'browser',
                    optionC: 'ISP',
                    optionD: "None of the above",
                    correctAnswer: 'B'
                },
                {
                    question : 'How do you insert COMMENTS in Python code?',
                    optionA: 'server',
                    optionB: 'browser',
                    optionC: 'ISP',
                    optionD: "None of the above",
                    correctAnswer: 'B'
                },
                {
                    question : 'Which one is NOT a legal variable name?',
                    optionA: 'server',
                    optionB: 'browser',
                    optionC: 'ISP',
                    optionD: "None of the above",
                    correctAnswer: 'B'
                },
            ]
        }
    ],
    allQuestions : [],
    quizQuestions:[],
    question : '',
    optionA:'',
    optionB:'',
    optionC:'',
    optionD:'',
    correctAnswer:'',
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
    
    if(action.type === "SET_QUESTIONS"){
        return {
            ...state,
            quizQuestions : action.questions
        }
    }
    
    if(action.type === "ADD_QUESTION"){
        const newQuestion = {
            question : state.question,
            optionA: state.optionA,
            optionB: state.optionB,
            optionC: state.optionC,
            optionD: state.optionD,
            correctAnswer: state.correctAnswer
        }
        const itemPresentIndex = state.quizList.findIndex(item=> item._id === state.editQuizId);
        const existingItem = state.quizList[itemPresentIndex];
        const arr = [...existingItem.questions, newQuestion]
        console.log(arr);
        const updatedItem = {
            ...existingItem,
            questions : arr
        }
        let updatedItems =  [...state.quizList];
        updatedItems[itemPresentIndex] = updatedItem;
        console.log(updatedItems);
        return {
            ...state
        }
    }

    if(action.type === "CREATE_QUIZ"){
        const id = Math.floor(Math.random()*10000)
        const quiz = {
            _id : id,
            quizName : state.quizName,
            description : state.description,
            gradingSystem : state.gradingSystem,
            timeLimit : state.timeLimit,
            questions : [{question: 'test'}]
        }
        const updatedQuizList = [...state.quizList, quiz]
        return {
            ...state,
            quizList : updatedQuizList
        }
    }
}

export default quizReducer