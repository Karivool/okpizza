# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(
  username: "jtrapepperonison",
  email: "jpepperoni@jpepp.com",
  birthdate: "10101974",
  gender: "pizza",
  orientation: "piesexual",
  city_name: "Hoboken",
  state_name: "New Jersey",
  summary: "Eatza me, Juuuuuuliooooo!")

User.create(
  username: "pizzasalant420",
  email: "pizzasalant420@gmail.com",
  birthdate: "04201982",
  gender: "pizza",
  orientation: "humansexual",
  city_name: "Pittsburgh",
  state_name: "Pennsylvania",
  summary: "Pick me if you want a smokin pizza.")

User.create(
  username: "krnpizzalvr1",
  email: "jpepperoni@jpepp.com",
  birthdate: "10102014",
  gender: "pizza",
  orientation: "piecurious",
  city_name: "Hoboken",
  state_name: "New Jersey",
  summary: "Eatza me, Juuuuuuliooooo!")
