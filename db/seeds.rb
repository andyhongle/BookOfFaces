# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create({username: 'demo-user', first_name: 'DemoFirst', last_name: 'DemoLast', password: 'demo-password', email: 'Demo@gmail.com', gender: 'Other', birthday: '06/02/1996'})

