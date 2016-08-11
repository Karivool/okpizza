class Api::QuestionsController < ApplicationController
  def index
    debugger
    @questions = Question.all
    render "api/questions/index"
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
    debugger
    @question = Question.find(params[:questions][:question_id])
    render "api/questions/show"
  end

  private

  def question_params
    params.require(:question).permit(:question, :ans_one, :ans_two, :ans_three, :ans_four)
  end
end
