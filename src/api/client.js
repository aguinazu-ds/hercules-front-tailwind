import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8081/api/v1/",
    headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZWd1aW5henVAZ21haWwuY29tIiwiaWF0IjoxNjY4MDk1Mjk2LCJleHAiOjE2NjgxODE2OTZ9.y7CSGNnEbKJHFOrehvL09YkujUj7zjYxiIcwh8ss8g5aLb8n6jnRD1K5biMTuqNif2LBoztvthFFj4xcAcA9xA" 
    }
});

