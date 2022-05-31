/**
 * Job: title, company, city, start/end, link, list<experience>
 * Experience:
 * Title
 * Start/end date
 * Description
 * Languages - list
 * Skills - list
 * Impact
 * Link(s) - if applicable
 */

const intuit = {
  "name": "Intuit, Inc",
  "link": "https://www.intuit.com/"
}

export const WorkContent = [
  {
    "company": intuit,
    "city": "San Diego",
    "start": "Aug 2019",
    "end": "present",
    "experiences": [
      {
        "title": "Full-Stack Software Engineer 2 | Credential Adapter | Identity",
        "start": "Dec 2020",
        "end": "present",
        "languages": ["Kotlin", "React", "DynamoDB", "SQL"],
        "skills": ["Spring boot", "microservices", "system design"],
        "description": [
          "Created infrastructure for new service: K8s, security, deployment pipeline using Intuit templates and customization",
          "Designed architecture for microservice to bridge from old domain model to new one",
          "Led the development of Credential Adapter's password verfication feature",
          "Designed and implemented pattern for validation of data consistency between legacy and new systems",
          "Orchestrated development of self-service capability for all engineers to be able to triage account lockouts"
        ],
        "environment": "team of 6 backend engineers"
      },
      {
        "title": "Full-Stack Software Engineer 2 | Credential | Identity",
        "start": "Sept 2020",
        "end": "Nov 2020",
        "languages": ["Kotlin", "DynamoDB"],
        "skills": ["Spring boot", "microservices"],
        "description": [
          "Implemented POC using DynamoDB streams to send events to data lake using Apache Pulsar",
          "Worked with senior engineers to design DynamoDB schema to store login credentials for all Intuit users"
        ],
        "environment": "team of 6 backend engineers"
      },
      {
        "title": "Full-Stack Software Engineer Intern | Systems Engineering | Identity",
        "start": "June 2020",
        "end": "Aug 2020",
        "languages": ["Python", "Java", "Terraform"],
        "skills": ["Machine Learning", "Dev Ops"],
        "description": [
          "Migrated FIDO service deployments from Spinnaker to Jenkins + Terraform",
          "Mentored and assisted in developing machine learning solution for system health anomaly detection",
        ],
        "environment": "internship; worked with team of 5 senior engineers and another intern"
      },
      {
        "title": "Full-Stack Software Engineer Intern | Identity Proofing",
        "start": "Aug 2019",
        "end": "May 2020",
        "languages": ["Java", "Javascript"],
        "skills": ["React"],
        "description": [
          "Leveraged Intuit Experimentation Platform to run A/B tests for Government ID Proofing flow",
          "Increased flow success rate from 38% to 50%",
        ],
        "environment": "part-time intern; one of 3 frontend engineers; worked with XD, backend team, and PM's"
      }
    ]
  },
  {
    "company": intuit,
    "city": "San Diego",
    "start": "June 2018",
    "end": "Dec 2018",
    "experiences": [
      {
        "title": "Backend Software Engineer Intern | Monitoring System",
        "start": "June 2018",
        "end": "Dec 2018",
        "languages": ["Java"],
        "skills": ["backend", "REST", "AWS Lambda"],
        "description": [
          "Reinvented the alerting and monitoring of system health, by combining multiple data source and using 3 SAAS solutions to create an intuitive interface",
          "Using this system, this reduced the time to onboard a new service to receiving alerts from > 1 month to < 1 week",
        ],
        "environment": "intern, relied on engineers from 5 teams for domain knowledge and the problems with the current systems"
      }
    ],
  },
  {
    "company": {
      "name": "Pronto Systems, Inc"
    },
    "city": "Pittsburgh, PA",
    "start": "Feb 2017",
    "end": "Oct 2017",
    "experiences": [
      {
        "title": "Freelance Full-Stack Software Engineer | Deliver ecosystem",
        "start": "Feb 2017",
        "end": "Oct 2017",
        "languages": ["HTML", "Swift"],
        "skills": ["iOS", "React Native"],
        "description": [
          "Created Consumer iOS app to order convenience items",
          "Created Driver iOS app for picking up orders",
          "Created Admin web app for checking status / processing refunds",
          "Used Google Firebase to persist user / order data",
          "Moved both iOS apps to React Native to support Android devices"
        ],
        "environment": "During college, worked with my friends: 2 other engineering majors and a graphic design major"
      }
    ]
  }
]


/**
 * Older stuff I could add, but probably doesn't help at this point:
 * 

II-VI Inc, Automation Engineer
June to Aug. 2017
Reverse engineered database tables to automate upgrade of software and automated product customer reporting, saving thousands of hours of manual work.

 */