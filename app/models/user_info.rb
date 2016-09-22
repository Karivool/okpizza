# == Schema Information
#
# Table name: user_infos
#
#  id         :integer          not null, primary key
#  summary    :string
#  doing      :string
#  favorite   :string
#  sixthings  :string
#  typical    :string
#  messageif  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class UserInfo < ActiveRecord::Base
end
