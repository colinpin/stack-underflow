(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);


    function MainController($scope, MainService) {
        $scope.name = ""

        $scope.greetings = []

        $scope.greet = function () {
            var msg = MainService.greet($scope.name)
            $scope.greetings.push(msg)
        }

        var question = {
            author: "Player69",
            text: "How do you create an IIFE? ",
            date: new Date(),
            tags: ["javascript", "functions", "encapsulation", "IIFE", "crazy javascript stuff"],
            answers: [
                {
                    author: "xXHaterz420Xx",
                    text: "an IIFE is something you create when you don't know much about Javascript.",
                    date: new Date(),
                    score: -5,
                    accepted: false,
                    comments: [
                        {
                            author: "yoMom",
                            text: "that's not right sir...",
                            date: new Date(),
                            flagged: false
                        },
                        {
                            author: "yoMom",
                            text: "that's not right sir...",
                            date: new Date(),
                            flagged: false
                        }
                    ]
                },
                {
                    author: "ChaunceyPeppertooth",
                    text: "an IIFE is an immediately-invoked function expression. It produces a lexical scope using JavaScript's function scoping",
                    date: new Date(),
                    score: -100,
                    accepted: false,
                    comments: [
                        {
                            author: "KenWilcox",
                            text: "Awesome! I never knew that",
                            date: new Date(),
                            flagged: false
                        },
                        {
                            author: "KenWilcox",
                            text: "Oh, I need more info though, please",
                            date: new Date(),
                            flagged: true
                        },
                        {
                            author: "NormalUser",
                            text: "@kenWilcox: did you knew you can edit that? Dumb@ss. Y U SPAMMING?",
                            date: new Date(),
                            flagged: true
                        },
                        {
                            author: "Player69",
                            text: "@normalUser: did you know how to spell know?",
                            date: new Date(),
                            flagged: true
                        },
                        {
                            author: "cuteRgirl",
                            text: "OMG I LOVE THAT ANSWER, You are a genius.",
                            date: new Date(),
                            flagged: false
                        },
                        {
                            author: "SKIBUM_Snowhound",
                            text: "I didn't know that",
                            date: new Date(),
                            flagged: false
                        }
                    ]
                },
                {
                    author: "colinflower",
                    text: "an IIFE is an Immediately-invoked Function Expression that you can invoke by putting parens (parentheses, ()) after it",
                    date: new Date(),
                    score: 1005,
                    accepted: true,
                    comments: [
                        {
                            author: "DaddysBoy",
                            text: "Thanks! I've been wondering for weeks!",
                            date: new Date(),
                            flagged: false,
                        },
                        {
                            author: "Ralphy",
                            text: "Yeah! That's so helpful",
                            date: new Date(),
                            flagged: false,
                        },
                        {
                            author: "Ronaldo",
                            text: "OMG THANK YOU SO MUCH",
                            date: new Date(),
                            flagged: false,
                        },
                        {
                            author: "BillandTed",
                            text: "Yes!!!!!!!!!!!!!!",
                            date: new Date(),
                            flagged: false,
                        },
                        {
                            author: "Messi10SoccerDude",
                            text: "So nice of you to take time to help out the n00bs",
                            date: new Date(),
                            flagged: false,
                        }]
                }]
        }
        var questionText = question.text;
        var questionAnswerCount = question.answers.length;
        var question2ndAnswerScore = question.answers[1].score;
        var question2ndAnswer1stCommentFlagged = question.answers[1].comments[0].flagged;
        var hasAnAcceptedAnswer = function () {
            for (var i = 0; i < question.answers.length; i++) {
                if (question.answers[i].accepted === true) {
                    return (question.answers[i].author + "'s answer has been accepted.");
                }
            }
        };

        var totalScore = 0;
        var findTotalScore = function () {
            for (var i = 0; i < question.answers.length; i++) {
                totalScore + question.answers[i].score;
            }
        };

        var findFlagged = function () {
            var flagged = [];
            for (var i = 0; i < question.answers.length; i++) {
                for (var j = 0; j < question.answers.comments.length; j++) {
                    if (question.answers.comments[i].flagged === true) {
                        flagged.push(question.answers[i].comments.text);
                    }
                }
            }
            return flagged;
        };

        var countComments = function () {
            var comments = 0;
            for (i = 0; i < question.answers.length; i++) {
                comments = comments + question.answers[i].comments.length;
            }
            return comments;
        };

        var hasTag = function (tag) {
            for (var i = 0; i < question.tags.length; i++) {
                if (question.tags[i] == tag) {
                    return true;
                } else {
                    return false;
                }
        };

        console.log(questionText);
        console.log(questionAnswerCount);
        console.log(question2ndAnswerScore);
        console.log(question2ndAnswer1stCommentFlagged);
        console.log(hasAnAcceptedAnswer);
        console.log(findTotalScore());
        console.log(findFlagged());
        console.log(countComments());
        console.log(hasTag("javascript"));
    }



})();
