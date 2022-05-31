import { Typography, Divider, Box, Chip, Avatar } from "@mui/material";
import { WorkContent } from "./workContent";
import IntuitLogo from './images/intuitLogo.jpeg';
import ProntoLogo from './images/prontoLogo.jpeg';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator, TimelineOppositeContent } from "@mui/lab";

const yearsOfExperience = new Date().getFullYear() - 2019 // 2020 counts as a year

const summaryContent = `Software Engineer with ${yearsOfExperience} years of experience,
specializing in highly scalable (2000+ TPS), highly available (99.99+ %) microservices.
Passionate for developer experience and delivering end to end solutions (from DevOps to Backend and Frontend).`

function Work() {
  const work = WorkContent

  const allPillNames = Array.from(
    new Set(
      work
        .flatMap(x => x.experiences)
        .flatMap(x => x.languages)
        .concat(
          work
            .flatMap(x => x.experiences)
            .flatMap(x => x.skills)
        )
    )
  ).sort()

  return (
    <Box mt={4} sx={{
      width: '80%',
      marginLeft: 'auto',
      marginRight: 'auto',
      bgcolor: 'background.paper'
    }}>
      <Typography variant="h5" component="h1" mt={1}>
        Summary
      </Typography>
      <Typography variant="body1" mb={1}>
        {summaryContent}
      </Typography>
      <Typography variant="h5" component="h1" mt={2}>
        Skills
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'left',
          flexWrap: 'wrap',
          listStyle: 'none',
        }}
      >
        {allPillNames.map(x => <Chip color="primary" variant="outlined" label={x} sx={{ m: 0.5 }} />)}
      </Box>
      <Typography variant="h5" component="h2" mt={2}>
        Work Experience
      </Typography>
      {work.map((it) => (
        <>
          <Divider sx={{ marginBottom: '10px' }} />

          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}>

            <CompanyIcon name={it.company.name} />
            <Box>
              <Typography variant="body1" component="div">
                {it.company.name}
              </Typography>
              <Typography variant="body2" component="div">
                {it.start} to {it.end}
              </Typography>
            </Box>

          </Box>

          <Timeline sx={{ mt: 0 }}>
            {it.experiences.map((descItem) => (
              <TimelineItem>
                <TimelineOppositeContent style={{ display: 'none' }} />
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="body1">
                    {descItem.title}
                  </Typography>
                  <Experience experience={descItem} showDates={it.experiences.length !== 1} />

                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </>
      ))}
    </Box>
  );
}

function CompanyIcon(props: { "name": String }) {
  let icon;
  switch (props.name) {
    case "Intuit, Inc": return <Avatar variant="square" sx={{ mr: 1 }} src={IntuitLogo} />;
    case "Pronto Systems, Inc": return <Avatar variant="square" sx={{ mr: 1 }} src={ProntoLogo} />;
    default: icon = props.name.charAt(0)
  }
  return <>{icon}</>
}

type ExperienceItem = {
  title: string
  start: string
  end: string
  languages: string[]
  skills: string[]
  description: string[]
  environment: string
}

function Experience(props: { "experience": ExperienceItem, "showDates": Boolean }) {
  const experience = props.experience
  return <>
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      {props.showDates &&
        <Typography variant="body2">
          {experience.start} to {experience.end}
        </Typography>
      }
    </Box>
    <ul style={{ marginBlockStart: '0' }}>
      {experience.description.map(descriptionItem => (
        <li>
          <Typography>
            {descriptionItem}
          </Typography>
        </li>
      ))}
    </ul>
  </>
}

export default Work;