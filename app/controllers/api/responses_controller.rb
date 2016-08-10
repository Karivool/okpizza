class Api::ResponsesController < ApplicationController
  def index
    @responses = Response.all
    render "api/responses/index"
  end

  def create
    @response = Response.new(response.params)

    if @response.save
      render "api/responses/index"
    else
      render json: @response.errors.full_messages, status: 422
    end
  end

  def show
    @response = Response.find_by(response: params[:response][:answer])
    render "api/responses/show"
  end

  private

  def response_params
    params.require(:response).permit(:answer, :question_id, :user_id)
  end
end
