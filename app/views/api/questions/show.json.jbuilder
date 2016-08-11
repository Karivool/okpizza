json.partial! "api/questions/question", question: @question

# Get answered_questions from the Questions Controllers
#
# url: api/questions
# data: user_id
#
# response:
#   [{
#     text: "what is this?",
#     answers: [
#       { text: "answer1", selected: true},
#       { text: "answer2", selected: false},
#       { text: "answer3", selected: false},
#       { text: "answer4", selected: false},
#     ]
#   },
#   {
#     text "what is this?"
#     answer1
#     answer2
#     answer3
#     answer4
#     response: 2
#   }]
#
#
# user.answered_questions
# question do |q|
#   // user answered 3 for this!
#   user_answer = user.answer(q) // => 3
#
#   json.text q.text
#   answers = [
#     {text: q.answer1, selected: user_answer == 0}
#     {text: q.answer1, selected: user_answer == 1}
#     {text: q.answer1, selected: user_answer == 2}
#     {text: q.answer1, selected: user_answer == 3}
#   ]
# end
#
#
# Question Store
# QuestionStore.map(function (q) {
#   <li>
#     q.text
#
#   </li>
# })
