# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(name: "Jane Boles", street: "65 Duer St.", city: "Dunnellen", state: "NJ", zip: 07060)
User.create(name: "Wanda Sykes", street: "34 Wonder pl.", city: "Springfield", state: "IL", zip: 12345)
User.create(name: "Juan Cruz", street: "1 Play St.", city: "Chicago", state: "IL", zip: 98070)

Receipt.create(name: "Donna Karen", street: "45 That Pl.", apartment: "4", city: "Dunnellen", state: "NJ", zip: "07060", from_date: 1120, to_date: 13120, amount: 1200.00, notes: "payment was on time")
Receipt.create(name: "Landon Ron", street: "16 Worp Pl.", apartment: "A", city: "Springfield", state: "IL", zip: "12345", from_date: 100119, to_date: 103119, amount: 1900.00, notes: "Rent payment always on time")
Receipt.create(name: "Boniver Dude", street: "13 Music Pl.", apartment: "43", city: "Chicago", state: "IL", zip: "98070", from_date: 20119, to_date: 23119, amount: 2200.00, notes: "rent payment")
