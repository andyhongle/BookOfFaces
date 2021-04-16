class CreateFriendships < ActiveRecord::Migration[5.2]
  def change
    create_table :friendships do |t|
      t.integer :adder_friend, null: false
      t.integer :accepter_friend, null: false
      t.timestamps
    end
  end
end
