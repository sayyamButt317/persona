"use client";

import { useState } from "react";
import Image from "next/image";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { motion } from "framer-motion";
import avatar from "../../public/assets/avatar.png"

interface User {
  phoneNumber: string;
  username: string;
  address: string;
}

export default function Component() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState<User | null>(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      setError("");
      setSearchResult(null);
      const response = await fetch(`/api/getdata/${searchInput}`);
      const data = await response.json();

      if (response.ok && data.statusCode === 200) {
        setSearchResult(data.user);
      } else {
        setError(data.message || "User not found");
      }
    } catch (err) {
      setError("Error fetching data");
      console.error(err);
    }
  };

  const users = [
    { id: 1,name: "Alice Johnson",role: "Designer",position: "top-1/6 right-20",image: avatar,},
    {id: 2,name: "Bob Smith",  role: "Developer",position: "top-20 right-1/4",image: avatar,},
    {id: 3,name: "Carol Williams",role: "Manager",position: "bottom-20 left-1/4",image: avatar,},
    {id: 4,name: "David Brown",role: "Marketer",position: "top-20 left-1/4",image: avatar,},
    { id: 5, name: "Eva Davis", role: "Analyst", position: "top-1/6 left-20" },
    {id: 6,name: "Frank Miller",role: "Consultant",position: "bottom-20 right-1/4",image: avatar,},
  ];
  const placeholders = [
    "Find Who is teasing you?",
    "Find Ecommerce Orders details is Correct?",
    "Enter a phone number to find details",
    "Locate user information with phone number",
    "Find address details using phone number",
  ];
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-8">
        {users.map((user, index) => (
          <motion.div
            key={user.id}
            className={`absolute ${user.position} flex -translate-x-1/2 -translate-y-1/2 transform items-center space-x-4`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Image
               src={`/assets/avatar.png?height=100&width=100&text=${user.name.charAt(0)}`}
              alt={user.name}
              width={100}
              height={1000}
              className="rounded-full border-2 border-white shadow-lg"
            />
            <div className="text-left">
              <p className="font-semibold text-white">{user.name}</p>
              <p className="text-sm text-gray-300">{user.role}</p>
            </div>
          </motion.div>
        ))}

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent text-5xl font-extrabold  sm:text-6xl">
            Unlock the Mystery
          </h1>
          <p className="mx-auto my-4 max-w-lg text-md text-gray-300">
            Uncover valuable information at one click. Search with ease
            and access crucial details about anyone in an instant.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex overflow-hidden rounded-lg shadow-lg">
            <PlaceholdersAndVanishInput
                 placeholders={placeholders}
              onChange={(e) => setSearchInput(e.target.value)}
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
            />
          </div>

          {searchResult && (
            <motion.div
              className="mt-4 rounded-lg bg-green-100 p-4 text-green-800"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="mb-2 font-semibold">User Found:</h3>
              <p>Username: {searchResult.username}</p>
              <p>Address: {searchResult.address}</p>
            </motion.div>
          )}
          {error && (
            <motion.div
              className="mt-4 rounded-lg bg-red-100 p-4 text-red-800"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p>{error}</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
