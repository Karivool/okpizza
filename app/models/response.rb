# == Schema Information
#
# Table name: responses
#
#  id          :integer          not null, primary key
#  answer      :integer          not null
#  question_id :integer          not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Response < ActiveRecord::Base
  has_many :users
  has_many :questions

  validates :answer, :question_id, :user_id, presence: true

end
