// import { Injectable, Inject } from '@angular/core'
// import * as firebase from 'firebase/app'
// import 'firebase/app'

// import { IQuiz, ISurvey } from './shared-interfaces'

// export var QUIZES: IQuiz[] =  [ ]
// export var QUIZZES_KEYS: string[] = [ ]
// export var VIEWS = []
// export var SURVEYS: ISurvey[ ] = [ ]
// export var SURVEYS_KEYS: string[] = [ ]
// export var USERS: any[] = []

// export var DATA: {quizzes: any[], surveys: any[]}

// export const firebaseConfig = {
//     apiKey: "AIzaSyAoPYNBGKoINQqFgXJday3yslPTbRRI1OA",
//     authDomain: "quiz-802c1.firebaseapp.com",
//     databaseURL: "https://quiz-802c1.firebaseio.com",
//     projectId: "quiz-802c1",
//     storageBucket: "quiz-802c1.appspot.com",
//     messagingSenderId: "1099299671544",
//     appId: "1:1099299671544:web:2ea11263d82964c504da0d",
//     measurementId: "G-LNTGPEV7FD",
// };



  
// firebase.initializeApp(firebaseConfig)
// firebase.analytics()

// firebase.database().ref('/').on('value', snapshot => {
//     DATA = snapshot.val()
// })

// export const quizzesRef = firebase.database().ref('quizzes')

// export const usersRef = firebase.database().ref('users')

// quizzesRef.on('value', snapshot => {
//     QUIZES = Object.values(snapshot.val())
//     VIEWS = QUIZES.map(q => q.views)
//     QUIZZES_KEYS = Object.keys(snapshot.val())
//     //QUIZES = quizzes
// })


// export const surveysRef = firebase.database().ref('surveys')

// surveysRef.on('value', snapshot => {
//    SURVEYS = Object.values(snapshot.val())
//    SURVEYS_KEYS = Object.keys(snapshot.val())
// })

// export function addView(quiz: IQuiz) {
//     const key:string = getKey(quiz)
//     key && firebase.database().ref('quizzes/' + key).set({
//         ...quiz,
//         views: (quiz.views || 0) + 1
//     })
// }

// export function getQuizzes() {
//     return QUIZES
// }

// export function getKeys() {
//     return QUIZZES_KEYS
// }
// export function getKey(quiz: IQuiz) {
//     return QUIZZES_KEYS[QUIZES.indexOf(quiz)]
// }

// export function getQuiz(key: string) {
//     return QUIZES[QUIZZES_KEYS.indexOf(key)]
// }
// export function addQuiz(quiz: IQuiz) {
//     quizzesRef.push(quiz)
// }



//  export function editQuiz(key: string, newQuiz: IQuiz) {
//     firebase.database().ref('quizzes/' + key).set(newQuiz)
// }

// // export function generateTemplateQuiz(): IQuiz {
// //     return {
// //         name: `Untitled Quiz`,
// //         id: QUIZES.length,
// //         author: auth().currentUser.displayName,
// //         questions: [ ],
// //         tags: [ ],
// //         views: 0,
// //         status: 'incomplete',
// //         private: false,
// //         authorEmail: auth().currentUser.email
// //     }
// // }

// export function getSurvey(key: string) {
//     return SURVEYS[ SURVEYS_KEYS.indexOf(key) ]
// }

// export function getSurveyKey(survey: ISurvey) {
//     return SURVEYS_KEYS[ SURVEYS.indexOf(survey) ]
// }

// export function addSurvey(survey: ISurvey) {
//     surveysRef.push(survey)
// }

// export function editSurvey(key: string, newSurvey: ISurvey) {
//     firebase.database().ref('surveys/' + key).set(newSurvey)
// }

// export function saveResults(key: string, results) {
//     firebase.database().ref('surveys/' + key + '/stats').push(results)
// }

// export function getSurveys() {
//     return SURVEYS
// }


// export function getSurveyKeys() {
//     return SURVEYS_KEYS
// }

// export function get(data: 'surveys' | 'quizzes'): any[] {
//     return data === 'surveys'? getSurveys() : getQuizzes()
// }