class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :street, :city, :state, :zip
  has_many :receipts
end
