# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  username           :string           not null
#  password_digest    :string           not null
#  email              :string           not null
#  session_token      :string           not null
#  birthdate          :date             not null
#  gender             :string           not null
#  orientation        :string           not null
#  city_name          :string           not null
#  state_name         :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class User < ActiveRecord::Base

  has_many(
    :responses,
    :class_name => "Response",
    :foreign_key => :user_id,
    :primary_key => :id
  )

  has_many(
    :answered_questions,
    :through => :responses,
    :source => :question
  )

  has_one(
    :user_info,
    :class_name => "UserInfo",
    :foreign_key => :user_id,
    :primary_key => :id
  )

  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_attached_file :image, default_url: "https://s3.amazonaws.com/okpizza-dev/No_Image.png" #"assets/No_Image.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user || !user.is_valid_password?(password)
    user
  end

  def generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = generate_session_token
    end
    self.save!
    self.session_token
  end

  def is_valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def answer(question, user_id)
    response = Response.find_by(question_id: question.id, user_id: user_id)

    response.answer
  end
end
