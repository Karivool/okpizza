# == Schema Information
#
# Table name: questions
#
#  id         :integer          not null, primary key
#  question   :string           not null
#  ans_one    :string           not null
#  ans_two    :string           not null
#  ans_three  :string           not null
#  ans_four   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Question < ActiveRecord::Base
  has_many(
    :answers,
    :class_name => "Response",
    :foreign_key => :question_id,
    :primary_key => :id
  )

  validates :question, :ans_one, :ans_two, :ans_three, :ans_four, presence: true
  validates :question, uniqueness: true

end
