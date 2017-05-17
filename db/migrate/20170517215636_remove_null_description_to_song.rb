class RemoveNullDescriptionToSong < ActiveRecord::Migration[5.0]
  def change
    change_column_null :songs, :description, true
  end
end
