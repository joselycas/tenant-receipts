class Receipt < ApplicationRecord
  belongs_to :user
  validates :amount, presence: true
  validates :from_date, presence: true
  validates :to_date, presence: true
end
