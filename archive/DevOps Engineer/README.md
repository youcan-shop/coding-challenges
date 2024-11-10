# DevOps - Sys admin - SR Engineer - Coding challenges
## How to participate
Choose one of the following coding challenges as it might suit your knowledge.

All coding challenges should respect the same pattern:
using ansible + docker containers (to impliment the infrastructure) and ( Openresty | haproxy | nginx + php  )

## Coding Challenge I: Save our Media layer from folders overflow
### Context
The Media layer (called cdn - even it's not a real cdn) is composed by an app that generates and serves multiple sizes on the fly.
In first request, the app fetch the original media, generates 3 sizes (sm, md, lg), and stores them in order to serve them directly from the disk in the future.     

### Problematic
It's common that linux folders have a limit of sub-folder they can hold. 
Our internal app can save files under a custom path, but we need a custom vhost that can serve those files from that custom path.

### Expected resolution
Using ansible and docker-compose, pop-up 2 containers distributed as following:

1. 1 x Openresty container (this will contain your resolution)
2. 1 x PHP container that hosts your sample.

***Resolution example*** 

A request can ask to serve a file under the following path: `/stores/XYZ20211008ABC/categorie/image.png`

we need a vhost that can reformulate this request to the following: `/stores/XY/Z2/XYZ20211008ABC/categorie/image.png`

### Hints
Nginx doesn't support lua scripting so you can manipulate the coming request as you want, here we can introduce - lua scripting - a scripting module that is added in top of nginx to allow customized scripting.
## Coding Challenge II: Always implement a retention - openresty SSL generation
### Problematic

In the E-commerce world, sellers or stores owners can add their custom domains, such as `my-domain.com`. 

This custom domain should be secure using ssl cert. We have an internal service based on ssl module of openresty that generates auto-signed certificates for each new added domain on our platform. 

This module does not contain retention implemented yet, after each cert expiration, the system generates a new one on the first request that hits that domain, but it doesn't clean the expired certs, thus leading to a INode consumption syndrome.

### Expected solution
Using ansible and docker-compose, pop up 3 containers distributed as following:

1. One openresty container 
2. One nginx container
3. One php container

Using ssl-lua openresty module implement a retention policy of cleaning old expired certificates.

## Coding challenge III: Save our app from DDos attacks
### Problematic
Haproxy provides a high, fast and efficient availability load balacing and proxying.

We would like to get benefits of its in-memory storage stick table technology to secure our platform by tracking our users activities including malicious ones. 
We would like to introduce haproxy in top level or our web architecture.

### Expected solution
Using ansible and docker-compose, pop up 3 containers distributed as following:

1. One Haproxy container that holds your haproxy config.
2. One nginx container  that holds your vhosts to redirect requests to the php container.
3. One php container that serves your sample.

## Coding challenge IV: Optimize our time to ship features
### Problematic
In a world of hulk stacks we can have a pool of servers that hold the app to assure a high availability, deploying the app to this pool is one of the common challenges in site reliability engineering. 

We would like to optimize the deploy-time of the app by building it first on one machine then rsync the finale build to other stack machines.
### Expected solution
Using ansible and docker-compose, pop up 5 containers distributed as following:

1. One openresty container that contains php containers as upstreams
2. Four php containers that holds the app.

We need to build the app in only one "build machine or container", where the app is built (fetch backend and frontend dependencies, build what needs to be built, etc), then create a functional tarball that is distributed to php containers...

## About the coding challenge
### How to participate

1. Read each coding challenge instructions carefully and do not hesitate to check the **Links and resources** section before you start.
2. When you're ready to start the test, make sure you init a Github repository and share the link by email to **abdo@youcan.shop** and cc **tech-challenge@youcan.shop** with the object **Coding Challenge DevOps Engineer application 2022 by FirstName LastName**.
3. Once you're done with the test, reply again by email to notify us you're done with it. 

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

If you have any questions, ask directly in our slack, room #tech-challenge-ops.  

### Links & resources
- [Ansible](https://www.ansible.com)
- [Ansible's docker-compose module](https://docs.ansible.com/ansible/latest/collections/community/docker/docker_compose_module.html)
- [Docker docs](https://docs.docker.com)
- [Openresty docs](https://github.com/openresty/lua-nginx-module)
- [Ansistrano deploy](https://github.com/ansistrano/deploy)
- [Haproxy Sticky table](https://www.haproxy.com/fr/blog/application-layer-ddos-attack-protection-with-haproxy/)

That’s it! May the force be with you! 🖖 
