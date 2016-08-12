# OKPizza

[OKPizza live][heroku]

[heroku]: https://okpizza.herokuapp.com/

OKPizza is a full-stack web app inspired by OKCupid, but with a saucy, yet cheesy twist. Hook up with the pizza of your dreams, or find a human looking for a pizza with toppings just like yours!

Created with:
* Ruby on Rails
* PostgreSQL
* React.js
* Flux

## Features & Implementation

Single-Page App

OKPizza is rendered in real time all on one page. For those who can't be bothered to wait for multiple pages to render, take solice in the fact that only ONE page renders here, over and over again.

The root page, where all the action happens, constantly listens to `SessionStore` and content is displayed based on the calls made to the `currentUser`. Feel like you're in a pizza box thanks to backend Auth ensuring no one knows the hack codes to get into your account.

```ruby
class User < ActiveRecord::Base
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
 end
```

### Profile Viewing

Browse profiles! Users are retrieved through `ajax calls` and populated on the index page. From here, find the pizza or human of your dreams, and sneak their profile to your artichoke heart's content. Check out their details, edit yours, and find the match made in pizza heaven!

```javascript
fetchFilteredUsers(callback) {
  $.ajax({
    url: `api/users`,
    method: "GET",
    success (users){
      callback(users);
    },
    error(renderError){
      const errors = renderError.responseJSON;
      console.log(errors);
      error("signup", errors);
    }
  });
}
```

### Question Answering

Profile data isn't simply enough to know whether or not a potential suitor is really what they say they are under the box. By answering questions, you can see whether or not you have similar answers, thus, similar values with somepizza. Questions you've answered are retrieved via backend calls through ajax, and handled smoothly by ActiveRecord to ensure you know what you've said, and how.

```ruby
  user = User.find(params[:user_id])
  if params[:non_answers]
    ids = user.answered_question_ids
    @questions = Question.where.not(id: ids)
    render "api/questions/unanswered"
  else
    @responses = user.responses
    @questions = user.answered_questions
    render "api/questions/index"
  end
```

### Messaging

TODO. Someday soon, you'll be able to message other users and have a REAL conversation with REAL pizzas!

## Future Directions for the Project

On top of the features you get now with OKPizza, here are some other nifty tricks I hope to put into the app:

### Block users

Sometimes, a human, and even pizzas, may be unpleasant and ill fit for your tastes. In that case, forget they ever existed through the use of the block feature. No more Bad Pizza or Bad Human!

### Weighted questions and match %

Depending on the seriousness of an answer, users will be able to see their likelihood of being a good match changed. You will also be able to determine how important a question is to you to help with finding the Right Pizza or Human.
