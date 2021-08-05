import * as firebase from 'firebase/app'
import 'firebase/app'
import * as firbeaseAdmin from 'firebase-admin'
import { database } from 'firebase';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IQuiz, ISurvey, IData } from '../shared/shared-interfaces';


export const firebaseConfig = {
    apiKey: "AIzaSyAoPYNBGKoINQqFgXJday3yslPTbRRI1OA",
    authDomain: "quiz-802c1.firebaseapp.com",
    databaseURL: "https://quiz-802c1.firebaseio.com",
    projectId: "quiz-802c1",
    storageBucket: "quiz-802c1.appspot.com",
    messagingSenderId: "1099299671544",
    appId: "1:1099299671544:web:2ea11263d82964c504da0d",
    measurementId: "G-LNTGPEV7FD",
};



    
firebase.initializeApp(firebaseConfig)
//firbeaseAdmin.initializeApp(firebaseConfig)
firebase.analytics()


@Injectable({
    providedIn: `root`
})

export class DataService implements OnInit {
    public _quizzes: IQuiz[];
    public _quizKeys: string[];
    public _surveys: ISurvey[];
    public _surveyKeys: string[];


    public quizzesRef = database().ref(`quizzes`);
    public surveysRef = database().ref(`surveys`);

    dataValues
    constructor() {
        // database().ref('/').on('value', snapshot => {
        //     this.dataValues = snapshot.val()
        //     console.log('a')
        // })
    }


    
    ngOnInit() {}

    data: Observable<IData> = new Observable<IData>(subscriber => {
        database().ref('/').on('value', (snapshot) => {

                const data: {quizzes: any[], surveys: any[]} = snapshot.val()
                function formatToRead(data: any[]) {
                    return Object.values(data).map((quiz, i) => ({
                        ...quiz,
                        key: Object.keys(data)[i]
                    }))
                }
                this._quizzes = formatToRead(data.quizzes)
                this._surveys = formatToRead(data.surveys)
           // console.log(Object.keys(snapshot.val().quizzes))
            subscriber.next({
                quizzes: formatToRead(data.quizzes), 
                surveys: formatToRead(data.surveys),//this._surveys,
                // quizKeys: Object.keys(snapshot.val().quizzes),
                // surveyKeys: this._surveyKeys,
                get: (value: any, values: any[], from: any) => from[values.indexOf(value)],
                addQuizView: (key: string, quiz: IQuiz): void => {
                    const reference = database().ref(`quizzes/${key}/views`)
                    const views  = quiz.views || 0
                    //if (this._quizzes) {
                        reference.set(views + 1)//this._quizzes[this._quizKeys.indexOf(key)].views ?? 0 + 1)
                    // }
                },
                saveSurveyResults: (survey: ISurvey, results) => {
                    database().ref(`surveys/${survey.key}/stats`).push(results)
                }
                
            })
        })
    })
   
    add(baseURL: string, item: IQuiz | ISurvey): void {
        database().ref(baseURL).push(item)
    }

    edit(baseURL: string, newItem: IQuiz | ISurvey): void {
        database().ref(baseURL).set(newItem)
    }
    editQuiz(newQuiz: IQuiz, key: string): void {
        database().ref(`quizzes/${key}`).set(newQuiz)
    }

    
    get(value: any, values: any[], from: any): any {
        return from[values.indexOf(value)];
    }
};