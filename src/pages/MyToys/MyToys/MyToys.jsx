import React, { useContext, useEffect, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import MyToysRow from "../MyToysRow/MyToysRow";
import { AuthContext } from "../../provider/AuthProvider";

const MyToys = () => {
  const [myToys, setMyToys] = useState([]);
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/all_toys?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, []);

  const hadnleSort = (e) => {
    const sortBy = e.target.value;
   
  };

  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "bg-green-600 p-3 rounded-md text-white ml-2",
        cancelButton: "bg-red-700 p-3 text-white rounded-md",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          console.log("Delete", id);
          fetch(`http://localhost:5000/all_toys/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                const remaining = myToys.filter((toy) => toy._id !== id);
                setMyToys(remaining);
                swalWithBootstrapButtons.fire(
                  "Deleted!",
                  "Your toy data has been deleted.",
                  "success"
                );
              }
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your toy data is safe :)",
            "error"
          );
        }
      });
  };

  const hadnleEdit = () => {};
  return (
    <div>
      <div className="mt-12 mx-2 md:mx-36">
        <div className="mb-2 text-end">
          <p className="text-2xl">Total toys: {myToys.length}</p>
          <select
            className="select select-bordered w-full max-w-xs"
            onChange={hadnleSort}
          >
            <option value="all" className="">
              Select
            </option>
            <option value={1}>Ascending</option>
            <option value={-1}>Descending</option>
          </select>
        </div>
        <table className="border-collapse border-slate-400 mx-2 md:w-full">
          <thead>
            <tr className="border border-slate-400 md:h-16">
              <th className="border-2">Seller Name</th>
              <th className="border-2">Toy Name</th>
              <th className="border-2">Sub-Category</th>
              <th className="border-2">Price</th>
              <th className="border-2">Avaialbe Qty.</th>
              <th className="border-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Dynamic data for my toys table */}

            {myToys.length > 1 && (
              <MyToysRow
                myToys={myToys}
                handleDelete={handleDelete}
                hadnleEdit={hadnleEdit}
              ></MyToysRow>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
