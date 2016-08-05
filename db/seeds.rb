# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(
  username: "Bungh0",
  email: "mungoga@gmail.com",
  password_digest: "$2a$10$o6xNCWVjWEp7jbSq9hGIQOwmTcBvkukvl2/ZYmFcM37deoWE9FPPS",
  session_token: "aAuXR1DQuXzxzO65sFHtVQ",
  birthdate: "07271992",
  gender: "Milord",
  orientation: "piecurious",
  city_name: "Cambridge",
  state_name: "England",
  summary: "Hell0, I w0uld like t0 see what it's like t0 be with and enj0y a pizza.")

User.create(
  username: "jtrapepperonison",
  email: "jpepperoni@jpepp.com",
  password_digest: "lma0",
  session_token: "1234",
  birthdate: "10101974",
  gender: "pizza",
  orientation: "piesexual",
  city_name: "Hoboken",
  state_name: "New Jersey",
  summary: "Eatza me, Juuuuuuliooooo!")

User.create(
  username: "pizzasalant420",
  email: "pizzasalant420@gmail.com",
  password_digest: "lma0",
  session_token: "12345",
  birthdate: "04201982",
  gender: "pizza",
  orientation: "humansexual",
  city_name: "Pittsburgh",
  state_name: "Pennsylvania",
  summary: "Pick me if you want a smokin pizza.")

User.create(
  username: "krnpizzalvr1",
  email: "krnpizza4lyfe@naver.com",
  password_digest: "lma0",
  session_token: "123456",
  birthdate: "07111995",
  gender: "human",
  orientation: "piecurious",
  city_name: "Los Angeles",
  state_name: "California",
  summary: "안녕하세요 피자씨. I like korea pizza very much. Pizza with corn, yam and mayonase make me happy. :)")
