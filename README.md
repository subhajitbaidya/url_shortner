# Problem statement

🧑‍💻 Designing a URL shortener service that takes a valid URL and returns a shortened URL, redirecting the user to the previously provided URL. It also keeps track of the total visits/clicks on the URL.   

## Goals

```markdown
 POST/URL - Generates a new short URL and returns the shortened URL in the format example.com/random-id  
          
        GET/:id - Redirects the user to the original URL

        GET/URL/analytics/:id - Returns the clicks for the provided short id.    
```

## Non-goals

Testing Project, No real world application. This is purely for learning and demonstration purposes to understand system design concepts. The focus will be on core functionality rather than production-ready features.

# Proposed solution

We'll use Node.js with Express.js as our web framework to handle HTTP requests and routing. MongoDB will serve as our database to store the original URLs, their shortened versions, and click analytics. For generating unique short IDs, we'll utilize the nanoid package, which creates URL-safe unique identifiers. The URL validation will be handled using the valid-url package.

**What are the high level architectural changes?**

Understanding Node.js architecture and server implementation. Exploring why Express.js is needed to address Node.js limitations. Learning MongoDB fundamentals and its integration with Node.js applications. Implementing testing procedures. Adding both stateful and stateless authentication.

Understanding RESTful API concepts and HTTP methods (GET, POST) for endpoint services. Implementing URL validation with edge case handling. Establishing proper error handling and HTTP status codes.

**What are the high level data model changes?**

Changes are only applied to MongoDB collections as needed. Currently, there are two collections: one for URLs and one for logged-in users. 

**What are the main changes to the UI?**

Currently, the UI is server-side rendered. Updates will be made soon. 

## Risks

Potential routing configuration issues.
API Gateway integration challenges.
Authentication system vulnerabilities. 

**Does this project have any dependencies?**

```json
"cookie-parser": "^1.4.7",
    "ejs": "^3.1.10",
    "express": "^4.21.1",
    "mongoose": "^8.8.3",
    "nodemon": "^3.1.7",
    "shortid": "^2.2.16",
    "url-shortner": "file:",
    "uuid": "^11.0.5"
```

# Implementation and rollout plan

Targeting completion by end of next Saturday. 

**Is this project in an experiment or feature flagged?**

Experiment

## Success Criteria

**How will you validate the solution is working correctly?**

We will do API testing with PostMan, UI testing in browser and Feature testing of generated short ids and redirect urls.