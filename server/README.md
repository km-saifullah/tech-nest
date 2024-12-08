# TechNest Backend - E-commerce Application API

This is an api for TechNest e-commerce application.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![API](https://img.shields.io/badge/API-FF6F00?style=for-the-badge&logo=fastapi&logoColor=white)

### Getting Started

1. Clone the repository

```bash
git clone https://github.com/km-saifullah/tech-nest.git
```

2. Navigate to the **server** directory

```bash
cd server
```

3. Install the dependencies

```bash
npm install
```

4. Setup **.env** file:
   First create a file as **.env** in server directory. Then copy the contents from the **.env.sample** file and paste that to the **.env** file and give your values according to the environment variable.

```bash
DATABASE_URL=your-mongodb-uri

HOST=smtp.gmail.com
USER_EMAIL=your-mail-address
USER_EMAIL_PASSWORD=gmail-account-app-password

ACCESS_TOKEN_SECRET=your-secret-token-string
ACCESS_TOKEN_EXPIRES=define-access-token-age
REFRESH_TOKEN_SECRET=your-secret-token-string
REFRESH_TOKEN_EXPIRES=define-refresh-token-age

API_URL=http://localhost:8000/api/v1/

CLOUDINARY_API_KEY=your-cloudinary-api-key
```

5. Run the server

```bash
npm run dev
```

### Full Documentation

<a href="https://documenter.getpostman.com/view/16730068/2sAY4uEPWX" target="_blank">TechNest Api Documnetation</a>
