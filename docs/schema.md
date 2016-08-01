# Schema Information

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
note_id     | integer   | not null, foreign key (references notes), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
birthdate       | string    | not null
city_name       | string    | not null
state_name      | string    | not null
picture         | image     | not null, unique
summary         | string    | not null
life_doing      | string    | not null
good_at         | string    | not null
favorites       | string    | not null
six_things      | string    | not null
thinking        | string    | not null
message_if      | string    | not null
orientation     | string    | not null
race            | string    | not null
height          | integer   | not null
body            | string    | not null
relationship    | string    | not null
