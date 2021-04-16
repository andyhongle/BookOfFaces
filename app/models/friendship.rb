class Friendship < ApplicationRecord
    validates :adder_friend, :accepter_friend, presence: true

    belongs_to :user,
    primary_key: :id,
    foreign_key: :adder_friend,
    className: 'User'

    belongs_to :friend, 
    primary_key: :id,
    foreign_key: :accepter_friend,
    className: 'User'

    
end
