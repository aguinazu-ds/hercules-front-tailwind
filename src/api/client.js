import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8081/api/v1/",
    headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZWd1aW5henVAZ21haWwuY29tIiwiaWF0IjoxNjY2OTY4NTM4LCJleHAiOjE2NjcwNTQ5Mzh9.6-XVuhKUtRwUUQd9gWYbwfnMB91Yhf_pcGG2k_gLnyV2Tw2qpITU2QlJw2-IIBn4o9vk7OYuZ4_RNq41iduQcQ" 
    }
});

