/**
 * Every experiment/project has:
 * Title - what this is: Language Classifier
 * Start/end date
 * Other creators -- if you have worked with others
 * Description
 * Languages - list
 * Link(s)
 */
export const ExperimentsContent = [
  {
    "title": "Comic-Con Museum",
    "goal": "Comic-Con was planning to open a museum in San Diego's Balboa Park. Intuit orchestrated a hackathon for a week where interns developed a POC",
    "description": [
      "Created full-stack application to allow fans to submit potential exhibits in the upcoming Comic-Con museum.",
      "Uses Java SpringBoot + Postgres + Amazon S3 (backend) and React (frontend)",
    ],
    "learnings": [
      "How to quickly iterate on designs and create MVP solution",
    ],
    "start": "Aug 2018",
    "end": "Dec 2018",
    "team": "Worked on a team of 7 engineers on this open source project",
    "links": [
      "https://github.com/Comic-Con-Museum/fan-forge-frontend",
      "https://github.com/Comic-Con-Museum/fan-forge-backend"
    ],
    "languages": [
      "JavaScript",
      "Java"
    ],
    "tools": ["AWS S3", "Heroku"]
  },
  {
    "title": "Language Classifier",
    "goal": "Expand my machine learning knowledge on a more practical task",
    "description": [
      "Determines the most likely language of a sentence from 15 potential languages",
      "Genetic algorithm for attribute selection",
      "Decision trees and adaptive boosting for classification using attributes",
    ],
    "learnings": [
      "How to use genetic algorithms to determine potential attributes",
      "How to use decision trees and improve learning with boosting",
    ],
    "start": "April 2019",
    "end": "November 2019",
    "team": "Individual",
    "links": [
      "https://github.com/zachtjones/Multi-Language-Classifier"
    ],
    "languages": ["Java"],
    "tools": [],
    "customWidget": "languageClassifier"
  },
  {
    "title": "Minecraft server",
    "goal": "",
    "description": [
      "Used pulumi's typescript to provision a server using latest Minecraft release."
    ],
    "learnings": [

    ],
    "start": "",
    "end": "",
    "team": "Individual",
    "links": "https://github.com/zachtjones/minecraft-server",
    "languages": ["Typescript"],
    "tools": [
      "AWS Route53", "AWS EC2"
    ]
  },
  {
    "title": "Java Compiler",
    "goal": "To learn how real compilers were created as well as a real assembly language, like Intel's x86-64; I had learned the basics in my classes in college and wanted to expand my knowledge",
    "description": [
      "Created a compiler for Java programs consisting of a single class file",
      "Set up automated integration testing on PR's with small programs",
    ],
    "learnings": [
      "How x86 assembly differs between MIPS",
      "How to design an intermediate language",
      "Deeper understanding of how java code runs",
      "There are tools like jaotc / GraalVM that have also explored this and have made it a lot further",
    ],
    "start": "Dec 2017",
    "end": "June 2019",
    "team": "Individual",
    "links": [
      "https://github.com/zachtjones/Java-Compiler"
    ],
    "languages": ["Java", "x86 assembly"],
    "tools": []
  },
  {
    "title": "This website",
    "goal": "Refresh frontend skills",
    "description": [
      "Created this site using React + Material UI, deployed using AWS Amplify"
    ],
    "learnings": [],
    "start": "May 2022",
    "end": "",
    "team": "Individual",
    "links": [],
    "languages": ["Typescript", "React"],
    "tools": [
      "AWS Amplify"
    ]
  }
]