class CreateReceipts < ActiveRecord::Migration[5.2]
  def change
    create_table :receipts do |t|
      t.string :name
      t.string :street
      t.string :apartment
      t.string :city
      t.string :state
      t.string :zip
      t.integer :from_date
      t.integer :to_date
      t.float :amount
      t.string :notes

      t.timestamps
    end
  end
end
