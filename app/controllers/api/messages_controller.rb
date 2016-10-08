class MessagesController < ApplicationController
  def index
  end

  def create
  end

  def show
  end

  private

  def message_params
    params.require(:messages).permit(:message, :user_id, :sent_id)
  end
end
