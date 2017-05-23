class Api::MessagesController < ApplicationController
  def index
    id = params[:user_id]
    convos = Convo.select([:convo_id]).where(user_id: id)
    convos = convos.map{ |record| record.convo_id }

    @messageinfo = []
    convos.each { |id| @messageinfo.push(Message.where(convo_id: id).last) }
    render "api/messages/index"
  end

  def create
    @messageinfo = Message.new(message.params)
    if @messageinfo.save
      # Pusher.trigger('convo' + convo.id.to_s, 'message_sent', {})

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
