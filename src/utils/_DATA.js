import axios from "axios";

// Simulated database
// php -S localhost:8080 -t public public/index.php

let users = {
  laurynpih: {
    id: "laurynpih",
    name: "Lauryn Pih",
    email: "lpih@outlook.com",
    password: "ghost1",
    avatarURL: "Lauryn",
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
      am8ehyc8byjqgar0jgpub9: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionTwo",
    },
    questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
  },
  erikdavidkov: {
    id: "erikdavidkov",
    name: "Erik Davidkov",
    email: "erik@outlook.com",
    password: "frog",
    avatarURL: "Erik",
    answers: {
      vthrdm985a262al8qx3do: "optionOne",
      xj352vofupe1dqz9emx13r: "optionTwo",
    },
    questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
  },
  joemagnussen: {
    id: "joemagnussen",
    name: "Joe Magnussen",
    avatarURL: "Joe",
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
      vthrdm985a262al8qx3do: "optionTwo"
    },
    questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
  }
}


function generateUID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export function _getUsers() {
  return axios.get(`http://localhost:8080/users`);
}

export function _getAnsweredQuestions() {
  return axios.get(`http://localhost:8080/questions/answered`);

}

export function _getUnansweredQuestions() {
  return axios.get(`http://localhost:8080/questions/unanswered`);
}

function formatQuestion({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    },
  };
}

function formatUser({ name, email, password }){
  //const id = name.toLowerCase().trim()
  return {
      name: name, 
      email: email,
      password: password,
      avatarURL: '',
      answers: '',
      questions: ['']
  };
}

export function _saveUser(user) {
  return new Promise((res, rej) => {
    const formattedUser = formatUser(user)
    const userId = formattedUser.name.toLowerCase().trim();
    setTimeout(() =>
    {
      users[userId] = formattedUser;
      res([formattedUser]);
    }, 1000);
  });
}

export function _saveQuestion(question) {

}

export function _saveQuestionAnswer({ authedUser, qid, answer }) {

}

export default users;