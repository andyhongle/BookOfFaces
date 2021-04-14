class User < ApplicationRecord

    validates :username, :password_digest, :session_token, :first_name,
          :last_name, :email, :gender, :birthday, presence: true
    validates :username, :session_token, :email, uniqueness: true
    validates :password, length:  {minimum: 6, allow_nil: true }

    after_initialize :ensure_session_token

    attr_reader :password

    has_one_attached :profile_photo
    has_one_attached :cover_photo

    has_many :authored_posts, 
    primary_key: :id, 
    foreign_key: :author_id,
    class_name: 'Post'

    has_many :wall_posts, 
    primary_key: :id, 
    foreign_key: :wall_id,
    class_name: 'Post'

    has_many :comments,
    foreign_key: :author_id,
    class_name: 'Comment'
    


    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        if user && user.is_password?(password)
            return user
        else
            nil
        end
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end


    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end


end # class end

