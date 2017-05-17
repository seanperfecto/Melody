class Song < ApplicationRecord
  validates :title, :user_id, presence: true
  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "app/assets/images/default_artwork.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  validates_with AttachmentSizeValidator, attributes: :image, less_than: 3.megabytes

  belongs_to :user
end
