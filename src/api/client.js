import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8081/api/v1/",
    headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZWd1aW5henVAZ21haWwuY29tIiwiaWF0IjoxNjY3MzE4NDA5LCJleHAiOjE2Njc0MDQ4MDl9.lwVCcsdG05MHlFZRyEzDTsToHCUsvwDf6ahy_72na9-w6GWYYwASKNrNPWLSjl52pCqmJuLQ8UivSdwv871DVw" 
    }
});

