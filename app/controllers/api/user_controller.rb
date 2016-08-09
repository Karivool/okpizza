class Api::UserController < ApplicationController
  def show
    @user = User.find_by(username: params[:user][:username])
    render "api/user/show"
  end

  private

  def user_params
    params.require(:user).permit(
      :username, :password, :email, :birthdate, :gender,
      :orientation, :city_name, :state_name, :summary, :image
    )
  end
end
