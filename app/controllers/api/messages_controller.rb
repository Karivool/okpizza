class Api::MessagesController < ApplicationController
  def index
    debugger
    @messageinfo = Message.find(params[:user_id])
    render "api/messages/index"
  end

  def create
    debugger
    @messageinfo = Message.new(message.params)

    if @messageinfo.save
      render "api/messages/index"
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def show
    debugger
    @messageinfo = Message.find(params[:messages][:user_id])
  end

  private

  def message_params
    params.require(:messages).permit(:message, :user_id, :sent_id)
  end
end
