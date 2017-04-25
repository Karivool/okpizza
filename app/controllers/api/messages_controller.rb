class Api::MessagesController < ApplicationController
  def index
    id = params[:user_id]
    debugger
    @messageinfo = Message.where("user_id = ?", id)
    render "api/messages/index"
  end

  def create
    @messageinfo = Message.new(message.params)

    if @messageinfo.save
      render "api/messages/index"
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def show
    @messageinfo = Message.find(params[:messages][:user_id])
  end

  private

  def message_params
    params.require(:messages).permit(:message, :user_id, :convo_id)
  end
end
