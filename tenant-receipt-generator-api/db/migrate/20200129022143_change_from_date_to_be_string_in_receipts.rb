class ChangeFromDateToBeStringInReceipts < ActiveRecord::Migration[5.2]
  def change
    change_column :receipts, :from_date, :string
    change_column :receipts, :to_date, :string
  end
end
