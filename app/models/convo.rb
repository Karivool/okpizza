# == Schema Information
#
# Table name: convos
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  convo_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Convo < ActiveRecord::Base
  has_many(
    :messages,
    :class_name => "Message",
    :foreign_key => :convo_id,
    :primary_key => :id
  )

  has_many(
    :users,
    :class_name => "User",
    :foreign_key => :user_id,
    :primary_key => :id
  )
end
