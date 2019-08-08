class AddUserIdToReceipt < ActiveRecord::Migration[5.2]
  def change
    add_column :receipts, :user_id, :integer
  end
end
