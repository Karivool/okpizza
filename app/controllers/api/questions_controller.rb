class Api::QuestionsController < ApplicationController
  def index
    user = User.find(params[:user_id])
    if params[:non_answers]
      ids = user.answered_question_ids
      @questions = Question.where.not(id: ids)
      render "api/questions/unanswered"
    else
      @responses = user.responses
      @questions = user.answered_questions
      render "api/questions/index"
    end
  end

  def create
    @question = Question.new(question.params)

    if @question.save
      render "api/questions/index"
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def show
    @question = Question.find(params[:questions][:question_id])
    render "api/questions/show"
  end

  private

  def question_params
    params.require(:question).permit(:question, :ans_one, :ans_two, :ans_three, :ans_four)
  end
end
