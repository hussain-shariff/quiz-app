export const initialState = {
    quizName : "",
    selectedChoice: '',
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
                    correctAnswer: 'browser'
                },
                {
                    question : 'Which of the following purpose, JavaScript is designed for ?',
                    optionA: 'To Execute Query Related to DB on Server',
                    optionB: 'To Style HTML Pages',
                    optionC: 'To Perform Server Side Scripting Opertion',
                    optionD: "To add interactivity to HTML Pages.",
                    correctAnswer: 'To Execute Query Related to DB on Server'
                },
                {
                    question : 'JavaScript can be written',
                    optionA: 'directly on the Server Script',
                    optionB: 'directly into HTML pages',
                    optionC: 'All of the above',
                    optionD: "None of the above",
                    correctAnswer: 'directly into HTML pages'
                },
                {
                    question : 'JavaScript code is written inside file having extension',
                    optionA: '.jvs',
                    optionB: '.js',
                    optionC: '.jsc',
                    optionD: ".javascript",
                    correctAnswer: '.js'
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
                    question : 'Who developed Python Programming Language?',
                    optionA: 'Wick van Rossum',
                    optionB: 'Rasmus Lerdorf',
                    optionC: 'Guido van Rossum',
                    optionD: "Niene Stom",
                    correctAnswer: 'Guido van Rossum'
                },
                {
                    question : 'Which type of Programming does Python support?',
                    optionA: 'object-oriented programming',
                    optionB: 'structured programming',
                    optionC: 'functional programming',
                    optionD: "all of the mentioned",
                    correctAnswer: 'all of the mentioned'
                },
                {
                    question : 'Is Python case sensitive when dealing with identifiers',
                    optionA: 'no',
                    optionB: 'yes',
                    optionC: 'machine dependent',
                    optionD: "none of the mentioned",
                    correctAnswer: 'yes'
                },
            ]
        }
    ],
    allQuestions : [],
    quizQuestions:[],
    selectedChoices:[],
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
            quizQuestions: updatedQuestions
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
            questions : []
        }
        const updatedQuizList = [...state.quizList, quiz]
        return {
            ...state,
            quizList : updatedQuizList
        }
    }
}

export default quizReducer

