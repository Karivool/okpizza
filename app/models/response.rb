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
  belongs_to(
    :question,
    :class_name => "Question",
    :foreign_key => :question_id,
    :primary_key => :id
  )

  belongs_to(
    :user,
    :class_name => "User",
    :foreign_key => :user_id,
    :primary_key => :id
  )

  validates :answer, :question_id, :user_id, presence: true

end
