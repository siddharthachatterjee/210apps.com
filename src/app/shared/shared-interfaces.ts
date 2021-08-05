
export interface IQuestion {
    question: string,
    choices: {
        option: string | number,
        explanation?: string
    }[ ],
    correctAnswers: number[ ]
}

export interface IQuiz {
    name: string,
    id: number | string,
    img?: any,
    author?: string,
    tags?: string[ ],
    views?: number,
    status?: 'incomplete' | 'complete',
    private?: boolean,
    questions: IQuestion[ ],
    authorEmail?: string,
    key?: string,
}

export interface IQuestionStatus {
    isCorrect: boolean,
    tries: number,
    questionIndex: number
}

export interface ISurvey {
    name: string,
    author?: string,
    key?: string,
    authorEmail?: string,
    private?: boolean,
    public?: boolean,
    status?: 'complete' | 'incomplete'
    subject?: 'political' | 'basketball' | 'socccer'  | 'videogames' | 'social' | 'technology' | 'school' | 'other',
    topic?: string,
    id?: any,
    questions: {
        question: string,
        type: 'open-ended' | 'choice' | 'single-answer',
        choices?: { 
                option: string | number 
        }[ ]
    }[ ],
    stats?: {
        results: {
            type: 'open-ended' | 'choice' | 'single-answer',
            answer?: string,
            choicesPicked?: {
                choiceNumber: number,
                picked: boolean
            }[],
        }[ ]
    }[ ]
}

export interface IData {
    quizzes: IQuiz[],
    surveys: ISurvey[],
    quizKeys?: string[],
    surveyKeys?: string[],
    get?: (value: any, values: any[], from: any[]) => any,
    addQuizView?: (key: string, quiz?: IQuiz) => void,
    saveSurveyResults?: any
}

export interface ITest {
    name: string,
    author: string,
    authorEmail: string,
    questions: {
        type: string,
        choices?: string[]
    }[],
    time: number,
    responses: {
        user: string,
        userEmail: string,
        response: {
           choicesPicked?: boolean[],
           answer?: string, 
        }[]
    }[]
}