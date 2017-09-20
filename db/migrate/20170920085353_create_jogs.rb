class CreateJogs < ActiveRecord::Migration[5.1]
  def change
    create_table :jogs do |t|
      t.integer :user_id
      t.datetime :start_at
      t.decimal :distance,  :precision => 3, :scale => 2
      t.decimal :duration,  :precision => 3, :scale => 2

      t.timestamps
    end
  end
end
