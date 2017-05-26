class Like < ApplicationRecord
  validates :user_id, :song_id, presence: true

  belongs_to :user
  belongs_to :song
end
