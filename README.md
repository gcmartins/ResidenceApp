# ResidenceApp
Simple application using Micronaut framework (Java) and React (Javascript) as backend and frontend, respectively. The backend is a REST application that handles persistence of residence locations, coordinates (latitude and longitude) and number of residents. The frontend handles the registration of residences and shows a color map acording with number of residents.

## Running the project
First create the network, running: 
```
docker network create residence-api-net
```

To run backend and database servers, execute from the root folder:

```
docker-compose up
```

To run the frontend, navigate to `residence-app` folder and execute:

```
npm install
```

and

```
npm start
```

After these steps, the frontend can be accessed at: `http://localhost:3000/`

The API endpoint can be tested at: `http://localhost:8080/swagger-ui`
