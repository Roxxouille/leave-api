# Leave API

## API Overview

This API features a single endpoint designed to organize leave periods across monthly intervals

### Endpoint: Split Leaves by Month

- Endpoint: /leaves/monthly-split
- Method: GET
- Parameters:
  - startDate: The start date and time of the leave period in ISO 8601 format. Example: `2023-06-14T14:23:30.000Z`
  - endDate: The end date and time of the leave period in ISO 8601 format. Example: `2023-07-07T00:30:10.000Z`

### Example Request

`GET /leaves/monthty-split?startDate=2023-06-14T14:23:30.000Z&endDate=2023-07-07T00:30:10.000Z`

### Example Response

```json
{
  "ranges": [
    {
      "startDate": "2023-06-14T14:23:30.000Z",
      "endDate": "2023-06-30T23:59:59.999Z"
    },
    {
      "startDate": "2023-07-01T00:00:00.000Z",
      "endDate": "2023-07-07T00:30:10.000Z"
    }
  ]
}
```

## Getting started

This project use Bun as its javascript runtime.
Ensure you have Bun installed on your machine. If you don't have Bun installed, please follow the [Bun Installation Guide](https://bun.sh/docs/installation)

### Setup instructions

1. Clone the repository
2. Create a `.env` file in the root directory of the project. Inside this file add the following line:

```makefile
   PORT=3000
```

3. Install dependencies by running `bun install`
4. Start the development server by running `bun dev`

## Alternative Setup: Running with Docker

### Pre-requisites

Ensure you have Docker installed on your machine. If you don't have Docker installed, please follow the [Docker Installation Guide](https://docs.docker.com/get-docker/)

### Docker Setup Instructions

1. Navigate to the project's root directory. Open a terminal and run the following command to build the Docker image `docker build -t leave-api .`.
2. After the image has been successfully built, you can run the Docker container using the following command: `docker run -d -p 3000:3000 leave-api`

### Accessing the Application

Once the Docker container is running, you can access the application through your web browser or API client by navigating to `http://localhost:3000`

### Stopping the Container

When you're done, you can stop the Docker container by first listing all running containers with: `docker ps`

Find the container ID of your application, then stop it using: `docker stop container_id` and replace `container_id` with the actual ID of your container.
