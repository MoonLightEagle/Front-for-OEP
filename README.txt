post http://localhost:8080/users/auth

dto
 private String email;
    private String password;

response

{
    "id": 3,
    "firstName": "a",
    "lastName": "b",
    "email": "email@gmail.com",
    "phoneNumber": "",
    "address": "",
    "createdAt": "2008-01-02T00:00:00",
    "updatedAt": "2008-01-02T00:00:00",
    "tokenResponse": {
        "token": "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiU1RVREVOVCIsInN1YiI6ImVtYWlsQGdtYWlsLmNvbSIsImlhdCI6MTcxNzA3OTcwMywiZXhwIjoxNzE3MTY2MTAzfQ.05ZauebfdzaDo8js_3tv8RKEJda5QT2Cizkq3B689P8",
        "timestamp": 1717079704016,
        "expirationTime": "2024-05-31T17:35:04.016"
    }
}


get http://localhost:8080/users/{id}
body bearer:token

