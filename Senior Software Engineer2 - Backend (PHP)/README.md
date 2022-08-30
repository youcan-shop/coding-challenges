This coding challenge is intended for senior PHP software engineers. To be accepted, the repo should solve the below points.

- Create implementation of `ApiService` and bind it in the container.
- We want the API service to only fail after 3 attempts if there are any connection issues. Implement a backoff strategy.
- Continue the implementation of `FindLocationService@searchLocation`. Don't forget the add the APIKey
- Fill `LocationCollection` code to make it behave as an array (loop, array access).
- Fill the tests classes and make them pass.
- Set up the GitHub CI to run the tests automatically for master branch and add the CI badge on README file.
