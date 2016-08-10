# == Schema Information
#
# Table name: responses
#
#  id          :integer          not null, primary key
#  ans_one     :boolean          default(FALSE), not null
#  ans_two     :boolean          default(FALSE), not null
#  ans_three   :boolean          default(FALSE), not null
#  ans_four    :boolean          default(FALSE), not null
#  question_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Response < ActiveRecord::Base
end
