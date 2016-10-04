class Api::InfosController < ApplicationController

  def index
    debugger
    @userinfo = UserInfo.find(params[:id])
    render "api/user_infos/index"
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
    @info = Info.find(params[:id])
    @info[params[:fieldtype]] = params[:text]
    if @info.save
      debugger
      render "api/infos/show"
    else
      render json: @userinfo.errors.full_messages, status: 422
    end
  end

  def show
    @userinfo = Info.find(params[:id])
    render "api/infos/show"
  end

  private

  def info_params
    params.require(:info).permit(:summary, :doing, :favorite, :sixthings,
      :thinking, :typical, :messageif, :user_id)
  end
end
