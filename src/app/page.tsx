"use client";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
// import { useState } from "react";
import Image from "next/image";
// interface User {
//   phoneNumber: string;
//   username: string;
//   address: string;
// }

export default function Home() {
  // const [searchInput, setSearchInput] = useState("");
  // const [searchResult, setSearchResult] = useState<User | null>(null);
  // const [error, setError] = useState("");

  // const handleSearch = async () => {
  //   try {
  //     setError("");
  //     setSearchResult(null);
  //     const response = await fetch(`/api/getdata/${searchInput}`);
  //     const data = await response.json();

  //     if (response.ok && data.statusCode === 200) {
  //       setSearchResult(data.user);
  //     } else {
  //       setError(data.message || "User not found");
  //     }
  //   } catch (err) {
  //     setError("Error fetching data");
  //     console.error(err);
  //   }
  // };
  const users = [
    { id: 1, name: "Alice Johnson", role: "Designer", position: "top-1/3 left-1/6" },
    { id: 2, name: "Bob Smith", role: "Developer", position: "top-1/3 right-12" },
    { id: 3, name: "Carol Williams", role: "Manager", position: "bottom-1/4 left-1/3" },
    { id: 4, name: "David Brown", role: "Marketer", position: "top-1/3 left-1/4" },
    { id: 5, name: "Eva Davis", role: "Analyst", position: "top-1/6 right-2/3" },
    { id: 6, name: "Frank Miller", role: "Consultant", position: "top-2/3 right-16" },
  ]

  return (
    <>
    <BackgroundBeamsWithCollision>
      <div className="w-full min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden">
        {users.map((user, index) => (
          <div
            key={user.id}
            className={`absolute ${user.position} transform -translate-x-1/2 -translate-y-1/2 flex items-center space-x-4 animate-fade-in`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <Image
              src={`/assets/avatar.png?height=80&width=80&text=${user.name.charAt(0)}`}
              alt={user.name}
              width={80}
              height={80}
              className="rounded-full border-2 border-white"
            />
            <div className="text-left">
              <p className="text-white font-semibold">{user.name}</p>
              <p className="text-neutral-400 text-sm">{user.role}</p>
            </div>
          </div>
        ))}
        <div className="z-10 text-center">
          <h1 className="text-5xl bg-clip-text mb-6 bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
            Unlock the Mystery
          </h1>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm">
            Uncover valuable information at your fingertips. Search with ease and access crucial details about anyone in an instant.
          </p>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
   
    </>
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    //     <div className="flex rounded-md border-2 border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
    //       <input
    //         type="text"
    //         placeholder="Search Phone Number..."
    //         value={searchInput}
    //         onChange={(e) => setSearchInput(e.target.value)}
    //         className="w-full outline-none bg-white text-black-600 text-sm px-4 py-3"
    //       />
    //       <button
    //         type="button"
    //         className="flex items-center justify-center bg-[#007bff] px-5"
    //         onClick={handleSearch}
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 192.904 192.904"
    //           width="16px"
    //           className="fill-white"
    //         >
    //           <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
    //         </svg>
    //       </button>
    //     </div>

    //     {/* Display search results or error messages */}
    //     {searchResult && (
    //       <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative max-w-md mx-auto">
    //         <p>User Found:</p>
    //         <p>Username: {searchResult.username}</p>
    //         <p>Address: {searchResult.address}</p>
    //       </div>
    //     )}
    //     {error && (
    //       <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative max-w-md mx-auto">
    //         <p>{error}</p>
    //       </div>
    //     )}
    //   </main>
    // </div>
  );
}
