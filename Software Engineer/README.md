# Software Engineer Coding Challenge

## How to participate

1. Read the instructions carefully and do not hesitate to check the **Links and resources** section before you start. 
2. When you're ready to start the test, make sure you init a Github repository and share the link by email to **tech-challenge@youcan.shop** with the object **Coding Challenge Software Engineer application by FirstName LastName**, it'll be considered as the time your started working on the challenge.
3. Once you're done with the test, reply again by email to notify us you're done with it. 

Make sure you spare an **average of 4 hours**, and a **maximum of 1 day** to work on the challenge.

## Coding challenge

Let's build a small environment where we deal with products and their categories.

#### Definitions

A product has:
- name
- description
- price (float)
- image (file)
- Belongs to n categories
- created_at
- updated_at

A category has
- name (string)
- Eventually a parent category
- created_at
- updated_at

### Part I
- Build the environment to deal with entities
- Ability to create a product (from web and cli)
- A listing products with ability to sort by price, or/and filter by a category (from web)

### Part 2

- Seed the DB with 1k categories and 1M products 
- Implement a Cache layer in front of the DB everywhere
- Optimize the DB
- Implement a logger that logs inline in dev environment and json in prod environment

### Part 3
- Build an API

## Instructions
- Write a readable and maintainable code.
- Build a small and concise app the right way, with illustrating good software engineering principles (DRY, KISS, YAGNI, SOLID, ...)
- Wrap Eloquent queries in repository layer,  never use eloquent outside the repository
- CSS & colors are not evaluated.
- Do not hesitate to automate the build phase (front / backend)

## Technologies
- Laravel / VueJs
- PHP / MySQL

## Evaluation criteria 🚨
- Accuracy to follow instructions with attention to details.
- Code readability and coding style (PSR).
- Clean commit history in git making code review easy, push progressively instead of pushing the whole project in a single commit.
- Quality of documentation (The readme should be short and concise, as a getting started guide).


- Put more focus on code quality and less on speed. 
- Don't hack something quickly, take your time and craft something clean, with layers and separation of concerns.

The goal of this assessment is to evaluate the way of thinking, design and quality of code. 

## Questions?

If you have any questions, ask directly in our slack, email tech-challenge@youcan.shop  

## Links & Resources

#### PSR & coding style
- PSR-1: https://www.php-fig.org/psr/psr-1/
- PSR-2: https://www.php-fig.org/psr/psr-2/
- PSR: https://www.php-fig.org/psr/

#### Code design principles
- DRY: [Don't repeat your self](https://deviq.com/don-t-repeat-yourself/), [Is your code dry or wet?](https://www.softwareyoga.com/is-your-code-dry-or-wet/)
- [Single responsibility principle](https://deviq.com/single-responsibility-principle/)
- [SOLID](https://deviq.com/solid/)   
- [KISS, DRY, TDA, YAGNI](https://medium.com/@derodu/design-patterns-kiss-dry-tda-yagni-soc-828c112b89ee)

### Best practices

- [PHP best practices](https://phpbestpractices.org/)
- [PHP the right way](https://phptherightway.com/)
- [Awesome PHP](https://github.com/ziadoz/awesome-php)

### Laravel & VueJs

- [Laravel](https://laravel.com)
- [VueJs](https://vuejs.org/v2/guide/)
- [Laravel Vue Single file component](https://medium.com/plint-sites/javascript-in-laravel-vue-single-file-components-69be12033d98)
- [Introduction to VueJs in Laravel](https://medium.com/justlaravel/introduction-to-vue-js-in-laravel-e8757174e58e)
- [Awesome Laravel](https://github.com/TimothyDJones/awesome-laravel)
- [Awesome Laravel 2](https://github.com/chiraggude/awesome-laravel)

### PHP / Laravel / Symfony
- https://laravel.com
- https://github.com/ziadoz/awesome-php
- https://github.com/TimothyDJones/awesome-laravel
- https://github.com/chiraggude/awesome-laravel

### Coding challenge Guidance



That’s it ! May the force be with you !! 🖖 
