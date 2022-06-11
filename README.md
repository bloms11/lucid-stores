# lucid-stores
This is a full-stack e-commerce project with an admin dashboard built with React, Redux, Node, MongoDB, Express and JWT. It has filter and sorting functionalities. The admin board uses redux to perform its CRUD operation. This full-stack project also uses stripe payment integrations.

# Demo
![Screenshot (18)](https://user-images.githubusercontent.com/57482590/173205923-99039ffc-d95d-4a61-bab4-9a6b06fa23fc.png)
![Screenshot (21)](https://user-images.githubusercontent.com/57482590/173205927-1c78b0ec-98a4-4daa-9a54-e7d26cfbe604.png)

**Admin**
![Screenshot (22)](https://user-images.githubusercontent.com/57482590/173205959-fc0d865d-ee5a-4e5f-9ee5-7b6e7d42333d.png)
![Screenshot (24)](https://user-images.githubusercontent.com/57482590/173205962-f5573078-6d11-421c-acc5-978a8b48559c.png)

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URL = mongodb key`
`PASS_SEC = your secrete phrase`
`JWT_SEC = your secrete phrase`
`STRIPE_KEY = your stripe Key`

Go to the project directory(backend)

```bash
  cd my-project
  cd api
  cd client
  cd admin
```

Install dependencies

```bash
  npm install
```

Start the server(api)

```bash
  cd api
  npm install
  npm start
```
Go to the project directory(frontend)

```bash
  cd my-project
  npm install
  cd frontend
```
admin
```bash
  cd admin
  npm install
  npm start
```


## Tech Stack

**Client:** React, CSS, Styled Components

**Server:** Node, Express, MongoDB

## Contributing

Contributions are always welcome!

See [Contributions](https://docs.github.com/en/get-started/quickstart/contributing-to-projects) for ways to get started.
