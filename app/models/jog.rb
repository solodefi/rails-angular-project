class Jog < ApplicationRecord
  belongs_to :user
  accepts_nested_attributes_for :user, allow_destroy: true
end
