class AddUserIdToReceipts < ActiveRecord::Migration[5.2]
  def change
    add_column :receipts, :user, :reference
  end
end
