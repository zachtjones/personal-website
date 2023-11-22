import { ApolloClient, InMemoryCache } from "@apollo/client";
import { LoadingButton } from "@mui/lab";
import { Typography, Box, TextField, Grid, Divider } from "@mui/material";
import { useState } from "react";
import { gql } from '../src/__generated__/gql';
import { Language } from "./__generated__/graphql";
import { BEST_MODEL_ID, GRAPHQL_URL } from './constants'

const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
})
const modelId = BEST_MODEL_ID

function LanguageClassifierExperiment() {
  const [phrase, setPhrase] = useState('')
  const [result, setResult] = useState('')
  const [probabilities, setProbabilities] = useState([] as Array<{percentageLikely: Number, language: Language}>)
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)

  const onSubmit = async () => {
    try {
      setLoading(true)
      setError('')
      setResult('')
      setProbabilities([])

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
        const language = result.data.language.mostLikelyLanguage
        setResult(`Most likely language is ${language}`)
        setProbabilities(result.data.language.probabilities)
      }
      
      setLoading(false)
    } catch (e: any) {
      console.error(e)
      setError(e.message)
      setLoading(false)
    }
  }

  return (
    <>
      <Box id='languageClassifier' displayPrint={'none'} sx={{ m: 2, border: '2px solid white', borderRadius: 2, p: 1 }}>
        <Typography variant="body1">Try it!</Typography>
        <Typography variant="subtitle2">
          Enter a phrase in one of the following languages and it will guess what language it is.
        </Typography>
        <form>
          <Grid container spacing={2} p={1}>
            {/* column 1 */}
            <Grid item xs={9}>
              <TextField 
                variant="filled" 
                required 
                fullWidth
                value={phrase}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setPhrase(event.target.value)
                  setResult('')
                  setProbabilities([])
                }}
                onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
                  if (event.key === 'Enter') {
                    onSubmit()
                    event.preventDefault()
                  }
                }}
                inputProps={{ placeholder: "Enter your phrase here"}}
              />
            </Grid>
            {/* column 2 */}
            <Grid item xs={3}>
              <LoadingButton variant='contained' onClick={onSubmit} loading={isLoading}>Submit</LoadingButton>
            </Grid>
          </Grid>
        </form>
        { result && <Typography variant='body1'>{result}</Typography>}
        { probabilities && probabilities.map((probability) => 
          <Typography key={probability.language}>{`${probability.language}: ${probability.percentageLikely.toFixed(2)}%`}</Typography>
        )}
        { error && <Typography variant='body2' color='#f88'>Error: {error}</Typography>}
        <Divider variant="fullWidth" sx={{mt: 1, mb: 1, borderColor: '#888'}}/>
        <Typography variant="subtitle2">Supported languages: Albanian, Croatian, Czech, Danish, Dutch, English, French, Gaelic, German, Hawaiian, Icelandic, Italian, Romanian, Samoan, Spanish</Typography>
      </Box>
    </>
  );
}

export default LanguageClassifierExperiment;