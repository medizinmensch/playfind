{
  Questions: [
    {
      Id: '{{index(1)}}',
      QuestionText: '{{lorem()}}',
      Answers: [
        {
          Id: '{{guid()}}',
          Text: '{{lorem([2], "words")}}',
          NextQuestionId: '{{integer(1,10)}}',
          SolutionId: '{{integer(1,10)}}'
        }
      ]
    }
  ],
  Solutions: [
    {
      Id: '{{index(1)}}',
      Description: '{{lorem()}}',
      Url: "http://www.sample.com"
    }
  ],
  SIdC: 10,
  QIdC: 10
}

// https://www.json-generator.com/