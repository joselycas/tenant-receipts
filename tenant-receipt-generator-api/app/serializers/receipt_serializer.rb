class ReceiptSerializer < ActiveModel::Serializer
  attributes :id, :name, :street, :apartment, :city, :state, :zip, :from_date, :to_date, :amount, :notes
end
