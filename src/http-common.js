import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8081/api/v1/",
    headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZWd1aW5henVAZ21haWwuY29tIiwiaWF0IjoxNjY2NjcxMzk0LCJleHAiOjE2NjY3NTc3OTR9.HQ9FH6PkucZDblmwhdcmPsBLuemHteTl15TEY9KaE8Yd5Cjdd2yp8E2jQombhI6E8hr5mCdpKye84OIa0O_Isg" 
    }
});