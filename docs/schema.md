# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
birthdate       | string    | not null
gender          | string    | not null
orientation     | string    | not null
city_name       | string    | not null
state_name      | string    | not null
summary         | string    |

## messages
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
message         | string    | not null
message_id      | integer   | not null, belongs to user_id
messenger_id    | integer   | not null, belongs to user_id

## questions
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
question        | string    | not null
ans_one         | string    | not null
ans_two         | string    | not null
ans_three       | string    | not null
ans_four        | string    | not null

## responses
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
ans_one         | boolean   | not null
ans_two         | boolean   | not null
ans_three       | boolean   | not null
ans_four        | boolean   | not null
question_id     | integer   | not null, foreign key
user_id         | integer   | not null, foreign key

## pictures
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
picture_url     | string    | not null
user_id         | integer   | not null, foreign key
