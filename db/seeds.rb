# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create!(email: 'admin@test.com', user_type: "administrator",  password: "password", password_confirmation: "password");
User.create!(email: 'manager@test.com', user_type: "user_manager",  password: "password", password_confirmation: "password");
User.create!(email: 'regular@test.com', user_type: "regular",  password: "password", password_confirmation: "password");
