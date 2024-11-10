# Senior Software Engineer - Backend (PHP)

## How to participate
1. Read the instructions carefully before you start.
2. When you're ready to start the test, make sure you init a Github repository and share the link via email to tech-challenge@youcan.shop with the subject Coding Challenge Senior Backend Engineer application by FirstName LastName, it will be considered as the time your started working on the challenge.
3. Once you're done with the test, reply again on the same email to notify us.
Content

## Challenge
Using the GitHub API. We want to create a leaders board for contributors to a repository:
- As a user, I can list my repositories.
- As a user, I can select a repository from the list
- As a user, I can see the list of users by their username, count PR reviews, count PRs.
    - The table is ordered by the number of PRs the user reviewed.
    - Contain only last month stats (the duration should be easily changeable)

Username    Reviewed PRs    Opened PRs
whyounes        30              12

Below are important points to be present in the solution:
- Unit tests.
- CI/CD using GitHub action on push to master.
- Backoff strategy implementation when communicating with GitHub API.
- Application architecture is to be considered. (Separated service, encapsulation, clean API).
- Consider the rate limitation of the GitHub API.

NOTE: Don’t use a PHP package for the GitHub API calls.

## Evaluation criteria 🚨
- Accuracy to follow instructions.
- Code readability and coding style (PSR).
- Clean commit history in git making code review easy, push progressively instead of pushing the whole project in a single commit.
- Quality of documentation (The readme should be short and concise, like open source projects readme, it should contain all necessary step to build and make the app running.

That’s it ! May the force be with you !! 🖖 