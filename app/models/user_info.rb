# == Schema Information
#
# Table name: user_infos
#
#  id         :integer          not null, primary key
#  summary    :string
#  doing      :string
#  favorite   :string
#  sixthings  :string
#  thinking   :string
#  typical    :string
#  messageif  :string
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class UserInfo < ActiveRecord::Base
  belongs_to(
    :user,
    :class_name => "UserInfo",
    :foreign_key => :user_id,
    :primary_key => :id
  )
end
