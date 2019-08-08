class Api::V1::UsersController < ApplicationController

  def index
    
    user = User.all
    render json: user
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user
    else
      render json: {error: "Error creating user info"}
    end
  end

  def show
    set_user
    render json: set_user
  end

  def delete
    set_user.destroy
  end

  private

  def user_params
    params.require(:user).permit(:name, :street, :city, :state, :zip)
  end

  def set_user
    user = User.find(params[:id])
  end



end
