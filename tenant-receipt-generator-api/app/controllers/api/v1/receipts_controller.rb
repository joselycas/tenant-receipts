class Api::V1::ReceiptsController < ApplicationController

  before_action :set_user

  def index
    receipts = @user.receipts
    render json: receipts
  end

  def create
    receipt = @user.receipts.new(receipt_params)
    if receipt.save
      render json: receipt
    else
      render json: {error: "Error creating receipt"}
    end
  end

  def show
    set_receipt
    render json: set_receipt
  end

  def delete
    set_receipt.destroy
  end


  private
  def receipt_params
    params.require(:receipt).permit(:name, :street, :apartment, :city, :state, :zip, :from_date, :to_date, :amount, :notes, :user_id)
  end

  def set_receipt
    receipt = Receipt.find(params[:id])
  end

  def set_user
    @user = User.find(params[:id])
  end

end
