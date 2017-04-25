# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  message    :string           not null
#  user_id    :integer          not null
#  convo_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ActiveRecord::Base
  belongs_to(
    :user,
    :class_name => "User",
    :foreign_key => :user_id,
    :primary_key => :id
  )

  belongs_to(
    :convo,
    :class_name => "User",
    :foreign_key => :convo_id,
    :primary_key => :id
  )
end
