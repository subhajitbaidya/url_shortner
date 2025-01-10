# URL Shortner Service

🧑‍💻 Designing a URL shortner service that takes a valid URL and returns a shortened URL, redirecting the user to the previously provided URL. It also keeps track of the total visits/clicks on the URL.   

1. **Routes**  
  
        POST/URL - Generates a new short URL and returns the shortened URL in the format example.com/random-id  
          
        GET/:id - Redirects the user to the original URL

        GET/URL/analytics/:id - Returns the clicks for the provided short id.    