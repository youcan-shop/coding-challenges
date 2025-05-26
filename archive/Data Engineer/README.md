# Data Engineer Coding Challenge

## How to participate
1. Read the instructions carefully and do not hesitate to check the **Links and resources** section before you start. 
2. When you're ready to start the test, make sure you init a Github repository and share the link by email to **tech-challenge@youcan.shop** with the object **Coding Challenge Data Engineer application by FirstName LastName**, it'll be considered as the time your started working on the challenge.
3. Once you're done with the test, reply again by email to notify us you're done with it. 

Make sure you spare an **average of 4 hours**, and a **maximum of 1 day** to work on the challenge.

## Coding challenge
Let's first set up a small environment as a base where we deal with some entities and data.

### Base

#### Schema

![Schema](https://raw.githubusercontent.com/youcan-shop/coding-challenges/master/archive/Data%20Engineer/schema.png)

#### Data
Find a way to populate a significant amount of data for at least twelve months

### Part I: Querying & optimization 
1. Retrieve country-specific GMV* data, along with corresponding percentages.

GMV stands for Gross Merchandise Volume, which is the total sales value of a store or business .

2. Retrieve top stores with their corresponding GMV

3. Optimize the DB (indexes, denormalization)

4. Rewrite your queries according to the changes performed on 3.

### Part II: Cohort analysis
Working with python (clean, transform and process data), create a cohort analysis to analyze stores retention.

### Part III: Elasticsearch

Let's think about introducing Elasticsearch for Orders active monitoring and analysis.

What are the possible methods to continuously sync the DB with Elasticsearch?

Which is better having daily or monthly indices and why?

Create a small api that simulate the creation of an order. Whenever an order is created in the DB, it should also be synced with elasticsearch.

### Part IV: BigQuery

Introduce BigQuery as a Data Warehouse

## Evaluation criteria 🚨
- Accuracy to follow instructions with attention to details.
- Clean commit history in git making code review easy, push progressively instead of pushing the whole project in a single commit.
- Quality of documentation (The readme should be short and concise, as a getting started guide).
 
- Don't hack something quickly, take your time and craft something clean, with layers and separation of concerns.

The goal of this assessment is to evaluate the way of thinking, design and quality of code. 

## Questions?
If you have any questions, ask directly in our slack, email tech-challenge@youcan.shop

That’s it ! May the force be with you !! 🖖 
