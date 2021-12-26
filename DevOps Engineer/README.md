# DevOps - Sys admin - SR Engineer - Coding challenges
## Context
Choose one of the following coding challanges as it might suit your knowledge.
All coding challenges should respect the same pattern, using ansible + docker containers (to impliment the infrastructure) and ( Openresty | haproxy | nginx + php  )

## Coding challenge I: Save our CDN - folder overflow
### Problematic
It's common that linux folders have a limit of sub-folder they can hold. Our internal app can save files under a custom path, but we need to a custom vhost that can serve those files from that custom path.

### Expected resolution
Using ansible and docker-compose, pop-up 2 containers distributed as following:

1. One Openresty container (this will contain your resolution)
2. One php container that hosts your sample.

***Resolutuin example*** 

A request can ask to serve a file under the following path: `/store/XYZ20211008ABC/categorie/image.png`

we need a vhost that can reformulate this request to the following: `/stores/XY/Z2/XYZ20211008ABC/categorie/image.png`

### Hints

Nginx doesn't support lua scripting so you can manipulate the coming request as you want, here we introduce luascripting a scripting module that is added in top  of nginx to allow customized scripting.

## Coding challenge II: Save our deploy train
### Problematic
Our engineering team is shipping features all the way during the day, we used to have on push train for our internal test env, each developer can ship his features to test it before going to prod. Imagine a case where two developers end two different features at the same, one of them will wait until the other mate ends testing his deployed code then he can pursue deploying his feature, this can lead to train traffic jam sometimes.
### Expected solution
Using ansible and docker-compose, pop-up 2 containers distributed as following:

1. One nginx container (this will hosts your 3envs vhosts files)
2. One php container

***Example***

- test1.testycan.shop
- test2.testycan.shop
- test3.testycan.shop

## Coding challenge III: Always implement a retention - openresty SSL generation
### Problematic

In e-com world, customers can create their custom domains on our application like: `souk.youcan.shop` this custom domain should be secure ussing ssl cert. We have an internal service based on ssl module of openresty that generate auto-signed certificates for each new created domain on our platform. This module does not contain retention implemented yet, after each cert expirtaion, the script generates a new one on the first request that hist that domain but it doesn't clean the expired certs, thus leading to a INode consumtion syndrome.

### Expected solution
Using ansible and docker-compose, pop up 3 containers distributed as following:

1. One openresty container 
2. One nginx container
3. One php container

Using ssl-lua openresty module impliment a retention policy of cleaning old expired certificates.

## Coding challenge IV: Save our app from DDos attacks
### Problematic
Haproxy provides a high, fast and efficient availability load balacing and proxying.
We would like to profite on it's in memory storage stick table technologie to secure our platform by tracking our users activities including malicious ones. We would like to introduce haproxy in front of our loadbalancers.

### Expected solution
Using ansible and docker-compose, pop up 3 containers distributed as following:

1. One Haproxy container that holds your haproxy config.
2. One nginx container  that holds your vhosts to redirect requests to the php container.
3. One php container that serves your sample.

## Coding challenge V: Optimize our time to ship features
### Problematic
In a world of hulk stacks we can have a pool of servers that hold the app to assure a high availability, deploying the app  to this pool is one of the common challenges in site reliability engineering. We would like to customize the deploy time of the app by building it first on one machine then rsync the finale build to other stack machines.
### Expected solution
Using ansible and docker-compose, pop up 5 containers distributed as following:

1. One openresty container that contains php containers as upstreams
2. Four php containers that holds the app.

We need to build the app in one of the php containers (run all your build commands there, composer, npm i and npm run prod), then zip the build release and rsync it to three other php containrs.

## About the coding challenge
### How to participate

1. Read each coding challenge instructions carefully and do not hesitate to check the **Links and resources** section before you start.
2. Join us in [slack](https://join.slack.com/t/next-media-team/shared_invite/enQtMzM0MjIzNjkyNDUxLTI5ZjhhNTkxZTZiYzdkODIyMDkyZWIyNjFlZTE5MmQzMjNkNzZkOTdmMjcyY2Q1NTZlN2E2NTBkYjk1MGU3Mjk), then join **#tech-challenge** and do not hesitate to address any question before, during or after the coding challenge day, there is no stupid question, we're available to help daily. 
3. When you're ready to start the test, make sure you init a Github repository and share the link by email to **tech-challenge@nextmedia.ma** with the object **Coding Challenge DevOps Engineer application by FirstName LastName**, it'll be considered as the time your started working on the challenge.
4. Once you're done with the test, reply again by email to notify us you're done with it. 

### Coding challenge journey 
This Coding challenge will be as your 1st day of your on-boarding journey, candidates will attend what we call 'standup' which will be at 09:00 a.m of the day coding challenges will be launched. Candidates will be be able to exchange with our stack holders during the day, and ask them any questions regrading the coding challenges.
By 6:00 p.m of that day candidates will attend what we call closing on which everyone will dilever his committed solution of one of the challenges.

### Evaluation criteria 🚨
- Accuracy to follow instructions.
- Code readability and coding style (PSR).
- Clean commit history in git making code review easy, push progressively.
- Quality of documentation (The `README` should be short and concise, like open source projects' README, it should contain all necessary step to build and make the app running.

### Instructions
- Put more focus on code quality and less on speed
- Committ more effort on communication when asking your questions or debating a solution with one of our stack holders
- Don't hack something quickly, take your time and craft something clean
- Write a readable and maintainable code
- Subscribe to the repository, so you're notified about any change performed in this test

The goal of this test is more to evaluate the way of thinking, design and quality of code (We accept juniors and seniors). 

### Questions?

If you have any questions, ask directly in our slack, room #tech-challenge.  

### Links & resources
- [Ansible](https://www.ansible.com)
- [Ansible's docker-compose module](https://docs.ansible.com/ansible/latest/collections/community/docker/docker_compose_module.html)
- [Docker docs](https://docs.docker.com)
- [Openresty docs](https://github.com/openresty/lua-nginx-module)
- [Ansistrano deploy](https://github.com/ansistrano/deploy)
- [Haproxy Sticky table](https://www.haproxy.com/fr/blog/)application-layer-ddos-attack-protection-with-haproxy/

That’s it! May the force be with you! 🖖 
