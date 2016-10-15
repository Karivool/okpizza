class Api::ResponsesController < ApplicationController
  def index
    @responses = Response.all
    render "api/responses/index"
  end

  def create
    @response = Response.new(response_params)

    if @response.save
      render "api/responses/index"
    else
      render json: @response.errors.full_messages, status: 422
    end
  end

  def show
    @response = Response.where(user_id: params[:responses][:user_id])
    render "api/responses/show"
  end

  def response_params
    params.require(:response).permit(:answer, :question_id, :user_id)
  end
end
