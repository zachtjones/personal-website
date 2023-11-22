import { Typography, Divider, Box, Avatar, Stack } from "@mui/material";
import { WorkContent } from "./workContent";
import IntuitLogo from './images/intuitLogo.jpeg';
import ProntoLogo from './images/prontoLogo.jpeg';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator, TimelineOppositeContent } from "@mui/lab";

/**
 * Notes:
 * Making everything printer friendly, thinking the printer version would look like a more traditional resume, then I only have to update one place to get both
 * 
 * Also thinking a word cloud could be cool for the skills, then I can focus on the ones that are stronger with bigger font
 * 
 */

function Work() {
  const work = WorkContent

  return (
    <Box id='work'>
      <Typography variant="h5" component="h2">
        Experience
      </Typography>
      {work.map((it) => (
        <Box key={it.end}>
          <Divider sx={{ marginBottom: '10px', displayPrint: 'none' }} />

          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}>

            <CompanyIcon name={it.company.name}/>
            <Stack direction='row' justifyContent='space-between' alignItems='center' width='100%'>
              <Typography variant="h6" mt='0'>
                {it.company.name}
              </Typography>
              <Typography variant="subtitle2">
                {it.start} to {it.end}
              </Typography>
            </Stack>

          </Box>
          <Timeline sx={{ mt: 0, displayPrint: 'none' }}>
            {it.experiences.map((descItem) => (
              <TimelineItem key={descItem.title}>
                <TimelineOppositeContent style={{ display: 'none' }} />
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Experience experience={descItem} showDates={it.experiences.length !== 1} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
          {/* Much simpler on print view */}
          <Box sx={{ displayPrint: 'block', display: 'none' }}>
            {it.experiences.map((descItem) => (
                  <Experience key={descItem.title} experience={descItem} showDates={it.experiences.length !== 1} />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

function CompanyIcon(props: { "name": String }) {
  let icon;
  switch (props.name) {
    case "Intuit, Inc": return <Avatar variant="square" sx={{ mr: 1, displayPrint: 'none' }} src={IntuitLogo} />;
    case "Pronto Systems, Inc": return <Avatar variant="square" sx={{ mr: 1, displayPrint: 'none' }} src={ProntoLogo} />;
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
    <Typography variant="subtitle1">
      {experience.title}
    </Typography>
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
    <ul style={{ paddingInlineStart: '32px', margin: '0', marginBottom: '6px' }}>
      {experience.description.map(descriptionItem => (
        <li key={descriptionItem}>
          <Typography variant="body1">
            {descriptionItem}
          </Typography>
        </li>
      ))}
    </ul>
  </>
}

export default Work;