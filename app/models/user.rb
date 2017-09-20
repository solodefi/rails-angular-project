class User < ApplicationRecord
  has_secure_password

  has_many :jogs
  has_many :api_tokens

  validates_presence_of :email
  validates_uniqueness_of :email
end
