import { ApolloClient, InMemoryCache } from "@apollo/client";
import { LoadingButton } from "@mui/lab";
import { Typography, Box, Button, TextField, Grid, Divider, Stepper, Step, StepLabel, Stack, Link } from "@mui/material";
import { useState } from "react";
import { gql } from '../src/__generated__/gql';
import { Language } from "./__generated__/graphql";
import { BEST_MODEL_ID, GRAPHQL_URL } from './constants'

const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache'
    },
    query: {
      fetchPolicy: 'no-cache'
    }
  }
})
const modelId = BEST_MODEL_ID

function LanguageClassifierExperiment() {
  const [phrase, setPhrase] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [isPicking, setPicking] = useState(false)
  const [step, setStep] = useState(0)
  const [yourLanguage, setYourLanguage] = useState(Language.English)
  const [modelLanguage, setModelLanguage] = useState(Language.English)
  const [probabilities, setProbabilities] = useState([] as Array<{percentageLikely: Number, language: Language}>)

  const onPickClick = async () => {
    setPicking(true)
    setError('')
    setPhrase('')

    try {
      const query = gql(`
        query RandomPhrase {
          randomPhrase {
            phrase
            language
          }
        }
      `)

      const result = await client.query({
        query: query,
        variables: {}
      })

      if (result.errors) {
        setError(result.errors[0].message)
        console.log(JSON.stringify(result.errors))
      } else {
        setPhrase(result.data.randomPhrase.phrase)
        // TODO - should I get the language? What would I do with it? The sample data will always have one
      }
    } catch (e: any) {
      console.error(e)
      setError(e.message)
    }
    setPicking(false)
  }

  const onStep1Next = () => {
    setStep(1)
  }

  const onStep2Next = async (yourLanguage: Language) => {
    setYourLanguage(yourLanguage)
    setLoading(true)
    setError('')
    setProbabilities([])

    try {
      const query = gql(`
        query Language($phrase: String!, $modelId: ID!) {
          language(input: { phrase: $phrase, modelId: $modelId}){
            mostLikelyLanguage
            probabilities {
              language
              percentageLikely
            }
          }
        }
      `)

      const result = await client.query({
        query: query,
        variables: {
          phrase: phrase,
          modelId: modelId
        }
      })

      if (result.errors) {
        setError(result.errors[0].message)
        console.log(JSON.stringify(result.errors))
      } else {
        setModelLanguage(result.data.language.mostLikelyLanguage)
        setProbabilities(result.data.language.probabilities)
        setLoading(false)
        setStep(2)
      }
    } catch (e: any) {
      console.error(e)
      setError(e.message)
      setLoading(false)
    }
    
  }

  const onStep3Next = () => {
    setPhrase('')
    setStep(0)
  }

  return (
    <>
      <Box id='languageClassifier' displayPrint={'none'} sx={{ m: 2, border: '2px solid white', borderRadius: 2, p: 1 }}>
        <Typography variant="body1">Try it!</Typography>
        <Stepper activeStep={step} sx={{ mt: 2 }}>
          <Step key={1} completed={step > 0}>
            <StepLabel>Type or load a phrase</StepLabel>
          </Step>
          <Step key={2} completed={step > 1}>
            <StepLabel>Guess the language</StepLabel>
          </Step>
          <Step key={3} completed={step > 2}>
            <StepLabel>Does the model agree?</StepLabel>
          </Step>
        </Stepper>

        <Grid container spacing={2} p={2}>
          { step === 0 &&
            <>
              <Grid item xs={12}>
                <LoadingButton variant='contained' fullWidth onClick={onPickClick} loading={isPicking}>Pick a phrase for me</LoadingButton>
                <Divider variant="fullWidth" sx={{mt: 3, mb: 1, borderColor: '#888'}}/>
              </Grid>
              <Grid item xs={1} mt={1}>
                <Typography variant='body1'>OR:</Typography>
              </Grid>
              <Grid item xs={11}>
                <TextField
                  variant="filled"
                  fullWidth
                  value={phrase}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setPhrase(event.target.value)
                  }}
                  inputProps={{ placeholder: "Enter your phrase here"}}
                />
              </Grid>
              <Grid item xs={12}>
                <Stack direction='row'>
                  <Typography variant="subtitle2">Use "Pick a phrase for me" or type at least 12 words for best accuracy.</Typography>
                  <Box sx={{ flex: '1 1 auto' }} />
                  <Button variant='contained' onClick={onStep1Next} disabled={!phrase}>Next</Button>
                </Stack>
              </Grid>
            </>
          }
          { step === 1 &&
            <>
              <Grid item xs={12}>
                <Typography variant='h6'>Phrase:</Typography>
                <Typography variant='body1'>{phrase}</Typography>
                <Typography variant='h6'>Take your guess: </Typography>
              </Grid>
              <Grid item xs={12}>
                <Stack direction='row' justifyContent='space-between'>
                  <LoadingButton variant='contained' onClick={ () => onStep2Next(Language.English)} loading={isLoading && yourLanguage === Language.English}>English</LoadingButton>
                  <LoadingButton variant='contained' onClick={ () => onStep2Next(Language.French)} loading={isLoading && yourLanguage === Language.French}>French</LoadingButton>
                  <LoadingButton variant='contained' onClick={ () => onStep2Next(Language.German)} loading={isLoading && yourLanguage === Language.German}>German</LoadingButton>
                  <LoadingButton variant='contained' onClick={ () => onStep2Next(Language.Spanish)} loading={isLoading && yourLanguage === Language.Spanish}>Spanish</LoadingButton>
                  <LoadingButton variant='contained' onClick={ () => onStep2Next(Language.Swedish)} loading={isLoading && yourLanguage === Language.Swedish}>Swedish</LoadingButton>
                </Stack>
              </Grid>
            </>
          }
          { step === 2 &&
            <>
              <Grid item xs={12}>
                <Typography variant='h6'>Phrase:</Typography>
                <Typography variant='body1'>{phrase}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant='h6'>Your guess:</Typography>
                <Typography variant='body1'>{yourLanguage}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant='h6'>The model's guess:</Typography>
                <Typography variant='body1'>{modelLanguage}</Typography>
                <Typography variant='body1'>Probabilities: {
                  probabilities && probabilities.map((probability) => 
                    (probability.language !== Language.Other && `${probability.language}: ${probability.percentageLikely.toFixed(2)}%`) || ''
                  ).join(' ')
                }</Typography>
              </Grid>
              <Grid item xs={12}>
                <Stack direction='row' justifyContent='space-between'>
                  <Box></Box>
                  <Button variant='contained' onClick={onStep3Next}>Reset</Button>
                </Stack>
              </Grid>
            </>
          }
        </Grid>

        { error && <Typography variant='body2' color='#f88'>Error: {error}</Typography>}
        <Divider variant="fullWidth" sx={{mt: 1, mb: 1, borderColor: '#888'}}/>
        <Typography variant="subtitle2">Supported languages: English, French, German, Spanish, Swedish</Typography>
        
        <Typography variant="subtitle2">View the source code for the backend on my
          <Link target='_blank' rel='noreferrer' href='https://github.com/zachtjones/Multi-Language-Classifier'> GitHub</Link>.
        </Typography>
      </Box>
    </>
  );
}

export default LanguageClassifierExperiment;