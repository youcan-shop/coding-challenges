# Data Engineer for E-commerce Analytics

## How to participate
1. Read the instructions carefully and do not hesitate to check the **Links and resources** section before you start. 
2. When you're ready to start the test, make sure you init a Github repository and share the link by email to **tech-challenge@youcan.shop** with the object **Coding Challenge Data Engineer application by FirstName LastName**, and cc **lmouad@youcan.shop**, it'll be considered as the time your started working on the challenge.
3. Once you're done with the test, reply again by email to notify us you're done with it. 


## Scenarios
You’re joining the data team at an e-commerce platform and are tasked with analyzing user behavior to:
1. Improve database performance
2. Understand retention and behavior trends
3. Create intelligent user segments using AI

#### Data
Find a way to populate a significant amount of data for at least twelve months

### Challenge Breakdown

### Part I: Data Exploration & SQL Query Optimization 

#### Context
You have access to a PostgreSQL (or BigQuery) database with the following tables:

- users(user_id, signup_date, country)

- events(user_id, event_type [viewed, add-to-cart, purchased], product_id, timestamp)

- products(product_id, category, price)

#### Tasks
1. Provide the following analysis:

    - Weekly active users

    - Revenue per category

2. Rewrite those queries to optimize them (using indexes, refactored logic, etc.)

3. Use Python to benchmark performance before and after (execution time for each stage, etc.)
#### Deliverables:
- Optimized SQL queries

- Python script (using psycopg2, sqlalchemy, or google-cloud-bigquery) for execution + profiling

- Brief report on bottlenecks and improvements

### Part II: Cohort analysis
Working with python (clean, transform and process data), create a cohort analysis to analyze stores retention.

#### Context:
You want to analyze retention patterns of users based on their signup month.

#### Tasks:
1. Group users into monthly cohorts

2. Calculate how many users from each cohort returned weekly for 8 weeks

3. Use Python to visualize the retention matrix (heatmap or line graph)

#### Deliverables:
- SQL cohort query (BigQuery or python syntax are preferred)

- Python code for visualization (Pandas + Matplotlib/Seaborn/Plotly)



### Part III: Behavioral Segmentation with Elasticsearch & AI

#### Context:
User session logs (searches, clicks) are stored in Elasticsearch.

#### Sample document structure:
```
{
  "user_id": "abc123",
  "search_query": "wireless headphones",
  "clicked_product_ids": ["p01", "p02"],
  "timestamp": "2025-04-01T12:30:00Z"
}
```
#### Tasks:

1. Use Python to extract user search history from Elasticsearch

2. Use an AI API (e.g., OpenAI Embeddings, Hugging Face) to convert search queries into vectors

3. Cluster users using K-means or another technique into meaningful groups (e.g., tech-savvy, budget-conscious, fashion-oriented)

4. *Optionally*: Store segmented users into a new Elasticsearch index with tags like "segment": "tech_enthusiast"

Final Deliverables
- ✅ A Jupyter Notebook or Python scripts folder

- ✅ SQL files (or queries embedded in notebook)

- ✅ One-page strategy document explaining:

    - Optimizations made

    - Retention insights

    - Segmentation rationale

- ✅ Bonus: Dockerized environment or setup instructions for ease of testing



## Evaluation criteria 🚨
| Category               | Weight |
|------------------------|--------|
| Query optimization     | 20%    |
| Cohort logic & accuracy| 15%    |
| Python fluency         | 15%    |
| AI integration         | 30%    |
| Clarity of documentation | 20%  |

 
> Don't hack something quickly, take your time and craft something clean, with layers and separation of concerns.

The goal of this assessment is to evaluate the way of thinking, design and quality of code. 

## Questions?
If you have any questions, ask directly in our slack, email tech-challenge@youcan.shop
