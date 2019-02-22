{
  questions: [
    '{{repeat(25)}}',
    {
      Id: '{{index(1)}}',
      QuestionText: '{{lorem()}}',
      Answers: [
        '{{repeat(2,3)}}',
        {
          id: '{{guid()}}',
          text: '{{lorem([2], "words")}}',
          nextQuestionId: '{{integer(1,10)}}',
          SolutionId: '{{integer(1,10)}}'
        }
      ]
    }
  ],
  solutions: [
    '{{repeat(10)}}',
    {
      Id: '{{index(1)}}',
      Description: '{{lorem()}}',
      Url: "http://www.sample.com"
    }
  ],
  sIdC: 10,
  qIdC: 10
}