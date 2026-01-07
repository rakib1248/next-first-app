"use client";

import { AuthContext } from "@/app/Provider/userSate";
import { useContext } from "react";
import UserCard from "@/app/user/userCard";
import { UserFormDataDto } from "./user.dto";

function Page() {
  const { user } = useContext(AuthContext);
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Our Team Members
      </h1>

      {/* গ্রিড লেআউট */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {user
          .sort((a: UserFormDataDto, b: UserFormDataDto) => b.id - a.id)
          .map((user: UserFormDataDto, index: number) => (
            <UserCard key={user.id} user={user} index={index} />
          ))}
      </div>
    </div>
  );
}

export default Page;
