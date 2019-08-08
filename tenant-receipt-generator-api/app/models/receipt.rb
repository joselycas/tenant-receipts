class Receipt < ApplicationRecord
  belongs_to :user
  validates :amount, :from_date, :to_date, presence: true
end
