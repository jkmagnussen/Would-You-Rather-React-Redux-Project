import Lauryn from "../media/Lauryn.jpg"
import Erik from "../media/Erik.jpg"
import Joe from "../media/Joe.jpg"
import Cal from "../media/Cal.jpg"
import Annie from "../media/Annie.jpg"
import Mike from "../media/Mike.jpg"
import Matt from "../media/Matt.jpg"
import Jen from "../media/Jen.jpg"
import Danni from "../media/Danni.jpg"
import Ian from "../media/Ian.jpg"

// Simulated databas

let users = {
  laurynpih: {
    id: "laurynpih",
    name: "Lauryn Pih",
    email: "lpih@outlook.com",
    password: "ghost1",
    avatarURL: Lauryn,
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
    avatarURL: Erik,
    answers: {
      vthrdm985a262al8qx3do: "optionOne",
      xj352vofupe1dqz9emx13r: "optionTwo",
    },
    questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
  },
  joemagnussen: {
    id: "joemagnussen",
    name: "Joe Magnussen",
    avatarURL: Joe,
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
      vthrdm985a262al8qx3do: "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
    },
    questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
  },
    calstangroom: {
    id: "calstangroom",
    name: "Cal Stangroom",
    avatarURL: Cal,
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
      vthrdm985a262al8qx3do: "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
    },
    questions: ["xj352vofupe1dqz9emx13u"],
  },
    anniegrey: {
    id: "anniegrey",
    name: "Annie Grey",
    avatarURL: Annie,
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
      vthrdm985a262al8qx3do: "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
    },
    questions: ["xj352vofupe1dqz9emx13t"],
  },
    michaelpeter: {
    id: "michaelpeter",
    name: "Michael Peter",
    avatarURL: Mike,
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
      vthrdm985a262al8qx3do: "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
    },
    questions: ["xj352vofupe1dqz9emx13d"],
  },
    matthewjamesmcarthur: {
    id: "matthewjamesmcarthur",
    name: "Matthew James Mcarthur",
    avatarURL: Matt,
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
      vthrdm985a262al8qx3do: "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
    },
    questions: ["xj352vofupe1dqz9emx1ff"],
  },
    jenniferamy: {
    id: "jenniferamy",
    name: "Jennifer Amy",
    avatarURL: Jen,
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
      vthrdm985a262al8qx3do: "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
    },
    questions: ["xj352vofupe1dqz9emx13h"],
  },
    daniellefurlong: {
    id: "daniellefurlong",
    name: "Riv",
    avatarURL: Danni,
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
      vthrdm985a262al8qx3do: "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
    },
    questions: ["xj352vofupe1dqz9emx1zz"],
  },
    ianfrankdoherty: {
    id: "ianfrankdoherty",
    name: "Ian",
    avatarURL: Ian,
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
      vthrdm985a262al8qx3do: "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
    },
    questions: ["xj352vofupe1dqz9emx1ff"],
  },
};

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: "8xf0y6ziyjabvozdd253nd",
    author: "laurynpih",
    timestamp: 1467166872634,
    optionOne: {
      votes: ["laurynpih"],
      text: "have horrible short term memory",
    },
    optionTwo: {
      votes: [],
      text: "have horrible long term memory",
    },
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: "6ni6ok3ym7mf1p33lnez",
    author: "joemagnussen",
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: "become a superhero",
    },
    optionTwo: {
      votes: ["joemagnussen", "laurynpih"],
      text: "become a supervillain",
    },
  },
  am8ehyc8byjqgar0jgpub9: {
    id: "am8ehyc8byjqgar0jgpub9",
    author: "laurynpih",
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: "be telekinetic",
    },
    optionTwo: {
      votes: ["laurynpih"],
      text: "be telepathic",
    },
  },
  loxhs1bqm25b708cmbf3g: {
    id: "loxhs1bqm25b708cmbf3g",
    author: "erikdavidkov",
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: "be a front-end developer",
    },
    optionTwo: {
      votes: ["laurynpih"],
      text: "be a back-end developer",
    },
  },
  vthrdm985a262al8qx3do: {
    id: "vthrdm985a262al8qx3do",
    author: "erikdavidkov",
    timestamp: 1489579767190,
    optionOne: {
      votes: ["erikdavidkov"],
      text: "find $50 yourself",
    },
    optionTwo: {
      votes: ["joemagnussen"],
      text: "have your best friend find $500",
    },
  },
  xj352vofupe1dqz9emx13r: {
    id: "xj352vofupe1dqz9emx13r",
    author: "joemagnussen",
    timestamp: 1493579767190,
    optionOne: {
      votes: ["joemagnussen"],
      text: "Blue cheese",
    },
    optionTwo: {
      votes: ["erikdavidkov"],
      text: "go Effff yah",
    },
  },
    xj352vofupe1dqz9emx13u: {
    id: "xj352vofupe1dqz9emx13r",
    author: "calstangroom",
    timestamp: 1493579767190,
    optionOne: {
      votes: ["joemagnussen", "laurynpih"],
      text: "Noodle the guitar",
    },
    optionTwo: {
      votes: ["erikdavidkov", "michaelpeter", "joemagnussen"],
      text: "Slap de bass",
    },
  },
    xj352vofupe1dqz9emx13t: {
    id: "xj352vofupe1dqz9emx13r",
    author: "anniegrey",
    timestamp: 1493579767190,
    optionOne: {
      votes: ["joemagnussen", "laurynpih"],
      text: "Guinea pig called Ronnie",
    },
    optionTwo: {
      votes: ["erikdavidkov"],
      text: "A guinea pig called Borris",
    },
  },
    xj352vofupe1dqz9emx13d: {
    id: "xj352vofupe1dqz9emx13d",
    author: "michaelpeter",
    timestamp: 1493579767190,
    optionOne: {
      votes: ["joemagnussen", "laurynpih", "matthewjamesmcarthur"],
      text: "Live it upp in Dubai",
    },
    optionTwo: {
      votes: ["erikdavidkov"],
      text: "Get free Panchos for life",
    },
  },
    xj352vofupe1dqz9emx1ff: {
    id: "xj352vofupe1dqz9emx13r",
    author: "matthewjamesmcarthur",
    timestamp: 1493579767190,
    optionOne: {
      votes: ["joemagnussen", "laurynpih"],
      text: "Jager and Oblivion",
    },
    optionTwo: {
      votes: ["erikdavidkov"],
      text: "Dark rum and the Witcher",
    },
  },
    xj352vofupe1dqz9emx13h: {
    id: "xj352vofupe1dqz9emx13h",
    author: "jenniferamy",
    timestamp: 1493579767190,
    optionOne: {
      votes: ["joemagnussen", "erikdavidkov"],
      text: "Go with ABRSM certification",
    },
    optionTwo: {
      votes: ["michaelpeter"],
      text: "Go with Rockschool certification",
    },
  },
    xj352vofupe1dqz9emx1zz: {
    id: "xj352vofupe1dqz9emx13h",
    author: "daniellefurlong",
    timestamp: 1493579767190,
    optionOne: {
      votes: ["joemagnussen", "erikdavidkov"],
      text: "A left sleeve",
    },
    optionTwo: {
      votes: ["michaelpeter"],
      text: "A right sleeve",
    },
  },
    xj352vofupe1dqz9emx1hh: {
    id: "xj352vofupe1dqz9emx13h",
    author: "ianfrankdoherty",
    timestamp: 1493579767190,
    optionOne: {
      votes: ["joemagnussen", "erikdavidkov"],
      text: "When Doves Cry?",
    },
    optionTwo: {
      votes: ["michaelpeter"],
      text: "Bobbert Ross poppin Rick Astley",
    },
  },
};

function generateUID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...users }), 1000);
  });
}

export function _getQuestions() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...questions }), 1000);
  });
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
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion,
      };

      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id]),
        },
      };

      res(formattedQuestion);
    }, 1000);
  });
}

export function _saveQuestionAnswer({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer,
          },
        },
      };

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser]),
          },
        },
      };

      res();
    }, 500);
  });
}
