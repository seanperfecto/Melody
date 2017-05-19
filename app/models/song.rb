class Song < ApplicationRecord
  validates :title, :user_id, presence: true

  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "app/assets/images/default_artwork.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  validates_with AttachmentSizeValidator, attributes: :image, less_than: 3.megabytes

  has_attached_file :track, presence: true
  validates_attachment_content_type :track, content_type: /\Aaudio\/.*\z/
  validates_with AttachmentSizeValidator, attributes: :track, less_than: 50.megabytes

  belongs_to :user
end
