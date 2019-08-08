class Api::V1::ReceiptsController < ApplicationController

  def index
    render json: Receipts.all
  end



  def create
    # create new receipt
    # and render to :json
  end

  def show
  end

  def delete
  end

end
