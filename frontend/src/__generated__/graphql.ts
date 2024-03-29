/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateTrainingDataInput = {
  /** Number of phrases to download in each language; min 10 max 2000 */
  numberOfPhrasesInEachLanguage: Scalars['Int']['input'];
};

export enum Language {
  English = 'ENGLISH',
  French = 'FRENCH',
  German = 'GERMAN',
  Other = 'OTHER',
  Spanish = 'SPANISH',
  Swedish = 'SWEDISH'
}

export type LanguageClassificationInput = {
  modelId: Scalars['ID']['input'];
  phrase: Scalars['String']['input'];
};

export type LanguageClassificationResult = {
  __typename?: 'LanguageClassificationResult';
  mostLikelyLanguage: Language;
  probabilities: Array<LanguageProbability>;
};

export type LanguageProbability = {
  __typename?: 'LanguageProbability';
  language: Language;
  percentageLikely: Scalars['Float']['output'];
};

export enum ModelType {
  /** Generates an ensemble of decisions trees to determine pairwise between languages */
  AdaptiveBoostingTree = 'ADAPTIVE_BOOSTING_TREE',
  /** Generates a decision tree to determine pairwise between languages */
  DecisionTree = 'DECISION_TREE'
}

export type Mutation = {
  __typename?: 'Mutation';
  createTrainingData: TrainingData;
  trainModel: TrainedModel;
};


export type MutationCreateTrainingDataArgs = {
  input: CreateTrainingDataInput;
};


export type MutationTrainModelArgs = {
  input: TrainModelInput;
};

export type Query = {
  __typename?: 'Query';
  language: LanguageClassificationResult;
  models: TrainedModelsResult;
  randomPhrase: RandomPhraseResult;
  trainingData: TrainingDataResult;
};


export type QueryLanguageArgs = {
  input: LanguageClassificationInput;
};

export type RandomPhraseResult = {
  __typename?: 'RandomPhraseResult';
  language: Language;
  phrase: Scalars['String']['output'];
};

export type TrainModelInput = {
  /** Number of generations for attribute evolution used in the model */
  attributeGenerations: Scalars['Int']['input'];
  /** Number of attributes to retain for the next generation */
  attributePoolSize: Scalars['Int']['input'];
  /** Required for adaptive boost strategy, the number of trees that are used */
  ensembleSize?: InputMaybe<Scalars['Int']['input']>;
  modelType: ModelType;
  /**
   * Input data ID for data used after training to determine accuracy, should be different than training.
   * If same as training, then it will be result in the same number for training/testing accuracy.
   */
  testingDataId: Scalars['ID']['input'];
  /** Input data ID for using to train the model */
  trainingDataId: Scalars['ID']['input'];
  /** Number of levels to the tree to use for learning when using Decision Trees */
  treeDepth?: InputMaybe<Scalars['Int']['input']>;
};

export type TrainedModel = {
  __typename?: 'TrainedModel';
  description: Scalars['String']['output'];
  modelId: Scalars['ID']['output'];
  testingAccuracyPercentage: Scalars['Float']['output'];
  trainingAccuracyPercentage: Scalars['Float']['output'];
};

export type TrainedModelsResult = {
  __typename?: 'TrainedModelsResult';
  models: Array<TrainedModel>;
};

export type TrainingData = {
  __typename?: 'TrainingData';
  averageWordCountPerPhrase: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  numberOfPhrasesInEachLanguage: Scalars['Int']['output'];
};

export type TrainingDataResult = {
  __typename?: 'TrainingDataResult';
  trainingData: Array<TrainingData>;
};

export type RandomPhraseQueryVariables = Exact<{ [key: string]: never; }>;


export type RandomPhraseQuery = { __typename?: 'Query', randomPhrase: { __typename?: 'RandomPhraseResult', phrase: string, language: Language } };

export type LanguageQueryVariables = Exact<{
  phrase: Scalars['String']['input'];
  modelId: Scalars['ID']['input'];
}>;


export type LanguageQuery = { __typename?: 'Query', language: { __typename?: 'LanguageClassificationResult', mostLikelyLanguage: Language, probabilities: Array<{ __typename?: 'LanguageProbability', language: Language, percentageLikely: number }> } };


export const RandomPhraseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RandomPhrase"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"randomPhrase"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"phrase"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}}]} as unknown as DocumentNode<RandomPhraseQuery, RandomPhraseQueryVariables>;
export const LanguageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Language"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phrase"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"modelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"language"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"phrase"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phrase"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"modelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"modelId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mostLikelyLanguage"}},{"kind":"Field","name":{"kind":"Name","value":"probabilities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"percentageLikely"}}]}}]}}]}}]} as unknown as DocumentNode<LanguageQuery, LanguageQueryVariables>;