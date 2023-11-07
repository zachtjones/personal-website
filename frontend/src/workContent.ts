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
        "title": "Full-Stack Senior Software Engineer | Credentials",
        "start": "Feb 2023",
        "end": "Present",
        "languages": ["Kotlin", "React", "DynamoDB", "SQL"],
        "skills": ["Spring boot", "microservices", "system design", "coroutines"],
        "description": [
          "Technical lead for the Credential Adapter service",
          "Designed + led implementation of GraphQL API's for identity frontends and Intuit products to use.",
          "Go to expert within larger group of 20 engineers for kotlin coroutines & GraphQL design",
        ],
        "environment": "immediate team of 7 backend engineers + 2 adjacent teams of similar size"
      },
      {
        "title": "Full-Stack Software Engineer 2 | Credentials",
        "start": "Sept 2020",
        "end": "Jan 2023",
        "languages": ["Kotlin", "React", "DynamoDB", "SQL"],
        "skills": ["Spring boot", "microservices", "system design"],
        "description": [
          "Designed architecture for Credential Adapter microservice to bridge data from old domain model to new one and back",
          "Led the development of API's for passwords, emails, and phone numbers (11 total API's) + data migration and validation API's",
          "Orchestrated development of self-service capability for all engineers to be able to triage account lockouts",
          "Set up CI/CD pipeline for new microservice on K8s",
          "Implemented POC for events to data lake using DynamoDB streams + Apache Pulsar",
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
        ],
        "environment": "internship; worked with team of 5 senior engineers and another intern"
      },
      {
        "title": "Frontend Software Engineer Intern | Identity Proofing",
        "start": "Aug 2019",
        "end": "May 2020",
        "languages": ["Java", "Javascript"],
        "skills": ["React"],
        "description": [
          "Ran several A/B tests for Government ID Proofing flow, increasing flow success rate from 38% to 50%",
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
          "Reinvented the alerting and monitoring of system health, by combining multiple data sources and using 3 SaaS solutions to create an intuitive interface",
          "New services created in identity could have perfomance + custom alerts set up in less than 1 week (from over 1 month)",
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
        "title": "Freelance Full-Stack Software Engineer | Delivery ecosystem",
        "start": "Feb 2017",
        "end": "Oct 2017",
        "languages": ["HTML", "JavaScript", "Swift"],
        "skills": ["iOS", "React Native"],
        "description": [
          "Created Consumer & Driver iOS apps to order convenience items, with admin web panel for checking status & processing refunds",
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