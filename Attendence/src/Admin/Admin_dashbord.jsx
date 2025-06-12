import React from "react";
import Navbar from "../Navbar";

function Admin_dashbord() {
  return (
    <>
      <table className="table table-bordered w-75 mx-auto mt-5">
        <thead>
          <tr>
            <th scope="col" className="bg-secondary text-white">
              #
            </th>
            <th scope="col" className="bg-secondary text-white">
              Name
            </th>
            <th scope="col" className="bg-secondary text-white">
              Email
            </th>
            <th scope="col" className="bg-secondary text-white">
              Attened Time
            </th>
            <th scope="col" className="bg-secondary text-white">
              Leave Time
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>10</td>
            <td>4</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>5</td>
            <td>2</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>5</td>
            <td>9</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>8</td>
            <td>8</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Admin_dashbord;
