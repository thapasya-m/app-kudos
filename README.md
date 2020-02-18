# Documenation

## Server side 
- Server running at 
```
https://thapasya-m-app-kudos.glitch.me
```
When running in local, after cloning the repo

1. To create dummy users
  ```
  GET http://localhost:4200/api/users
  ```

2. To create dummy kudos
  ```
  GET http://localhost:4200/api/kudos-logs
  ```

>*Note: By default 3 organizations have been used throughout the app*

### Other API Calls

1. To Sign in
  ```
  POST http://localhost:4200/auth/signin

  {
    "username": "Celestine_Bogan",
    "password": "QEarsM5XBLi83hE"
  }
  ```

2. To get all users in an organization (except signed in user)
  ```
  GET http://localhost:4200/api/users/{organizationId}?excludeUser=userId
  ```

3. To give a colleague a kudo (with message)
```
POST http://localhost:4200/api/kudos-logs
 
{
  "receiverId": "5e4ad29d04a159132474046a",
  "message": "good job!!",
  "giverId": "5e4ad1581628ae125abc0caf"
}
```

## Client side

- To Start the app
```
cd client/
npm start
```
- Copy paste following to */src/constants* to run the local server
```
{
  "BASE_API": "http://loca;host:4200"
}
```

