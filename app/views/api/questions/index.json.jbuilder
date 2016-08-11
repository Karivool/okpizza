json.array! @questions do |question|

  chosen = current_user.answer(question)

  json.id question.id
  json.question question.question
  answer_texts = [
    [question.ans_one, 1],
    [question.ans_two, 2],
    [question.ans_three, 3],
    [question.ans_four, 4]
  ]
  json.answers answer_texts do |answer, num|
    json.answer answer
    json.selected chosen == num
  end
end
