class Comment < ApplicationRecord
  validates :body, :user_id, :song_id, presence: true

  belongs_to :user
  belongs_to :song
end
