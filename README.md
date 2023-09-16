# parking-reservation

Parking Reservation
this app is build to make a parking reservation

Table of Contents
Getting Started
Backend (Express)
Frontend (Nuxt.js)
Running the App
some problem
data for database

Getting Started

Backend (Express)
Navigate to the backend folder:
cd backend

Install dependencies:
npm install

Start the backend server:
npm start


Frontend (Nuxt.js)
Navigate to the frontend folder:
cd frontend
cd parking-reservation

Install dependencies:
npm install

Running the App
Start the backend server:
cd backend
npm start

Start the frontend:
cd frontend
npm run dev

some problem
if the data card does not show up just refresh the page and the content of the page will apear

data for database
users:
{
        "id": 1,
        "email": "agunghaeruddin@gmail.com",
        "name": "agung",
        "password": "123456",
        "phone_number": 1231123,
        "isOfficer": false,
        "createdAt": "2023-09-16T10:23:38.560Z",
        "updatedAt": "2023-09-16T10:23:38.560Z"
    },
    {
        "id": 2,
        "email": "samsulrijal@gmail.com",
        "name": "samsul",
        "password": "123456",
        "phone_number": 1231123,
        "isOfficer": true,
        "createdAt": "2023-09-16T10:24:08.263Z",
        "updatedAt": "2023-09-16T10:24:08.263Z"
    }
parking-places:
{
    "id": 1,
    "name": "Pejaten",
    "location": "Jl. Rtulangi No 21",
    "capacity": 0,
    "amount": 2000,
    "createdAt": "2023-09-15T12:36:29.673Z",
    "updatedAt": "2023-09-15T12:35:06.786Z",
    "spots": 7
},
{
    "id": 2,
    "name": "Malakaji",
    "location": "Jl. Hj. Kalla 21",
    "capacity": 0,
    "amount": 3000,
    "createdAt": "2023-09-15T12:37:02.897Z",
    "updatedAt": "2023-09-15T12:36:34.700Z",
    "spots": 10
},
{
    "id": 3,
    "name": "Dubai",
    "location": "Jl. Elang No 92",
    "capacity": 0,
    "amount": 2000,
    "createdAt": "2023-09-15T12:37:47.891Z",
    "updatedAt": "2023-09-15T12:37:06.657Z",
    "spots": 0
},
{
    "id": 4,
    "name": "Pocinki",
    "location": "Jl. Ikan Duyung 82",
    "capacity": 0,
    "amount": 2000,
    "createdAt": "2023-09-15T12:38:35.377Z",
    "updatedAt": "2023-09-15T12:37:48.865Z",
    "spots": 0
}

parking_spots:
const seeds = [
  {
    id: 5,
    id_parking_place: 1,
    id_user: 1,
    name: "a-5",
    isAvailable: true,
    createdAt: "2023-09-15T12:51:51.257Z",
    updatedAt: "2023-09-15T12:52:19.139Z",
  },
  {
    id: 6,
    id_parking_place: 1,
    id_user: 1,
    name: "a-6",
    isAvailable: true,
    createdAt: "2023-09-15T12:51:51.257Z",
    updatedAt: "2023-09-15T12:52:19.139Z",
  },
  {
    id: 8,
    id_parking_place: 2,
    id_user: 1,
    name: "a-1",
    isAvailable: true,
    createdAt: "2023-09-15T12:55:28.357Z",
    updatedAt: "2023-09-15T12:53:05.718Z",
  },
  {
    id: 9,
    id_parking_place: 2,
    id_user: 1,
    name: "a-2",
    isAvailable: true,
    createdAt: "2023-09-15T12:55:28.357Z",
    updatedAt: "2023-09-15T12:53:07.702Z",
  },
  {
    id: 10,
    id_parking_place: 2,
    id_user: 1,
    name: "a-3",
    isAvailable: true,
    createdAt: "2023-09-15T12:55:28.357Z",
    updatedAt: "2023-09-15T12:53:08.124Z",
  },
  {
    id: 11,
    id_parking_place: 2,
    id_user: 1,
    name: "a-4",
    isAvailable: true,
    createdAt: "2023-09-15T12:55:28.357Z",
    updatedAt: "2023-09-15T12:53:08.546Z",
  },
  {
    id: 12,
    id_parking_place: 2,
    id_user: 1,
    name: "a-5",
    isAvailable: true,
    createdAt: "2023-09-15T12:55:28.357Z",
    updatedAt: "2023-09-15T12:53:09.034Z",
  },
  {
    id: 13,
    id_parking_place: 2,
    id_user: 1,
    name: "a-6",
    isAvailable: true,
    createdAt: "2023-09-15T12:55:28.357Z",
    updatedAt: "2023-09-15T12:53:09.514Z",
  },
  {
    id: 14,
    id_parking_place: 2,
    id_user: 1,
    name: "b-1",
    isAvailable: true,
    createdAt: "2023-09-15T12:55:28.357Z",
    updatedAt: "2023-09-15T12:53:09.994Z",
  },
  {
    id: 15,
    id_parking_place: 2,
    id_user: 1,
    name: "b-2",
    isAvailable: false,
    createdAt: "2023-09-15T12:55:28.357Z",
    updatedAt: "2023-09-15T12:53:10.583Z",
  },
  {
    id: 16,
    id_parking_place: 2,
    id_user: 1,
    name: "b-3",
    isAvailable: false,
    createdAt: "2023-09-15T12:55:28.357Z",
    updatedAt: "2023-09-15T12:53:11.597Z",
  },
  {
    id: 17,
    id_parking_place: 2,
    id_user: 1,
    name: "b-4",
    isAvailable: true,
    createdAt: "2023-09-15T12:55:28.357Z",
    updatedAt: "2023-09-15T12:53:14.505Z",
  },
  {
    id: 7,
    id_parking_place: 1,
    id_user: 1,
    name: "b-1",
    isAvailable: false,
    createdAt: "2023-09-15T12:51:51.257Z",
    updatedAt: "2023-09-15T12:55:58.193Z",
  },
  {
    id: 1,
    id_parking_place: 1,
    id_user: 1,
    name: "a-1",
    isAvailable: false,
    createdAt: "2023-09-15T12:44:19.695Z",
    updatedAt: "2023-09-16T03:15:36.834Z",
  },
  {
    id: 3,
    id_parking_place: 1,
    id_user: 1,
    name: "a-3",
    isAvailable: false,
    createdAt: "2023-09-15T12:49:00.021Z",
    updatedAt: "2023-09-16T03:22:04.762Z",
  },
  {
    id: 2,
    id_parking_place: 1,
    id_user: 1,
    name: "a-2",
    isAvailable: false,
    createdAt: "2023-09-15T12:49:00.021Z",
    updatedAt: "2023-09-16T03:31:08.201Z",
  },
  {
    id: 4,
    id_parking_place: 1,
    id_user: 1,
    name: "a-4",
    isAvailable: false,
    createdAt: "2023-09-15T12:49:00.021Z",
    updatedAt: "2023-09-16T04:22:17.256Z",
  },
];
