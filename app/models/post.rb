class Post < ApplicationRecord
    validates :author_id, :wall_id, :body, presence: true

    belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'

    belongs_to :wall,
    primary_key: :id,
    foreign_key: :wall_id,
    class_name: 'User'

    has_many :comments,
    foreign_key: :post_id,
    class_name: 'Comment',
    dependent: :destroy

    has_one_attached :photo


end
