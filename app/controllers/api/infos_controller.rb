class Api::InfosController < ApplicationController

  def index
    @userinfo = UserInfo.find(params[:id])
    render "api/infos/index"
  end

  def create
    @userinfo = Info.new(info.params)

    if @userinfo.save
      render "api/infos/show"
    else
      render json: @userinfo.errors.full_messages, status: 422
    end
  end

  def update
    @userinfo = Info.find(params[:id])
    @userinfo[params[:fieldtype]] = params[:text]
    if @userinfo.save
      render "api/infos/show"
    else
      render json: @userinfo.errors.full_messages, status: 422
    end
  end

  def show
    @userinfo = Info.find_by(id: params[:id])
    if @userinfo == nil
      @userinfo = Info.new
      @userinfo.user_id = params[:id]
      @userinfo.save
    end
    render "api/infos/show"
  end

  private

  def info_params
    params.require(:info).permit(:summary, :doing, :favorite, :sixthings,
      :thinking, :typical, :messageif, :user_id)
  end
end
