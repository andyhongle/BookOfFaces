class Comment < ApplicationRecord
    validates :body, :post_id, :author_id, presence: true

    belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'

    belongs_to :post,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: 'Post'
    
end
