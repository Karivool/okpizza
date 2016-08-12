json.array! @questions do |question|
  json.id question.id
  json.question question.question
  answer_texts = [
    [question.ans_one, 1],
    [question.ans_two, 2],
    [question.ans_three, 3],
    [question.ans_four, 4]
  ]
  json.answers answer_texts do |answer|
    json.answer answer
  end
end
