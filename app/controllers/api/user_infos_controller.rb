class UserInfosController < ApplicationController
  def index
    @userinfo = UserInfo.find(params[:user_info][:user_id])
    render "api/user_infos/index"
  end

  def create
    @userinfo = UserInfo.new(userinfo.params)

    if @userinfo.save
      render "api/user_infos/index"
    else
      render json: @userinfo.errors.full_messages, status: 422
    end
  end

  def show
    @userinfo = UserInfo.find(params[:user_info][:user_id])
    render "api/user_infos/show"
  end

  private

  def userinfo_params
    params.require(:user_info).permit(:summary, :doing, :favorite, :sixthings,
      :thinking, :typical, :messageif, :user_id)
  end
end
