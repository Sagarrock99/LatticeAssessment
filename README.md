# LatticeAssessment  

Brief description or introduction.

## Libraries/Frameworks Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web application framework for Node.js, used for building RESTful APIs.
- **Sequelize**: Promise-based Node.js ORM for MySQL, used for database interactions.
- **Body-Parser**: Middleware to parse JSON and URL-encoded data in requests.
- **Cors**: Middleware for enabling Cross-Origin Resource Sharing.
- **Helmet**: Middleware for setting HTTP headers to enhance security.

## API Endpoints

### 1. Patient Registration

- **Endpoint**: `/api/patients/register`
- **Method**: `POST`
- **Description**: Register a new patient.
- **Request Body**:
  ```json
  {
    "name": "Sagar Gupta",
    "address": "123 road",
    "email": "sagar@example.com",
    "phoneNumber": "+1234567890",
    "password": "1234",
    "patientPhoto": "image"
  }
