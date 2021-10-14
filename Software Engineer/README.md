# Software Engineer - Coding challenge

## How to participate

1. Read the instructions carefully and do not hesitate to check the **Links and resources** section before starting. 
2. When you're ready to start the test, make sure you init a Github repository and share the link by email to **tech-challenge@nextmedia.ma** with the object **Coding Challenge Software Engineer application by FirstName LastName**
3. Once you're done with the test, reply to the same thread mail to notify us you're done with it.
 
It's important to show your ability to carefully read instructions and follow them.

Make sure you spare an **average of 4 hours**, and a **maximum of 1 day** to work on the challenge.

## Context

### Product definition
A product has a name, a description, a price, an image, and belongs to 0..n categories.

- name (string) 
- description (string)
- price (float)
- image (file)

### Category definition
A category is simply a name and eventual parent category

- name (string)
- parent category (null|category)

### Features

#### CLI
We should be able to create and delete a category from the command line

We should be able to create and delete a product from the command line

#### Web

We should be able to create a product

We should be able to browse products through a paginated product listing with ability to:

* sort by name, by price
* filter by a category 

### Testing
Product creation can be covered by automated tests

#### Important notes

- The coding style is very important
- Wrap Eloquent queries in the repository layer, never use Eloquent from outside the repository layer
- Use a service layer for manipulating category & product objects (create, delete, get, ...)
- CSS & colors are not evaluated.
- Do not hesitate to automate the build phase (front / backend)
- Even if the challenge is quite simple, focus in the code quality and software engineering principles & best practices
 
## Technologies to use
 
- Laravel / VueJs
- PHP / MySQL       

## Evaluation criteria 🚨
- Accuracy to follow instructions.
- Respect of software engineering principles : DRY, KISS, YAGNI, SOLID.
- Code readability and coding style (PSR).
- Clean commit history in git making code review easy, push progressively instead of pushing the whole project in a single commit.
- Quality of documentation (The readme should be short and concise, like open source projects readme).

## Instructions
- Put more focus on code quality and less on speed. 
- Don't hack something quickly, take your time and craft something clean, with layers and separation of concerns.
- Write a readable and maintainable code.
- Subscribe to the repository, so you're notified about any change performed in this test

The goal of this test is to evaluate the way of thinking, the quality of code design, and the accuracy to read and follow instructions

We accept juniors and seniors.

## Questions?

If you have any questions, ask directly in our slack, room #tech-challenge or cut an email to tech-challenge@nextmedia.ma  

## Links & resources

### Mandatory to know

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


That’s it ! May the force be with you !! 🖖 
