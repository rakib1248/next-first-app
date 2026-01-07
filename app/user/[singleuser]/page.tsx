"use client";

import { AuthContext } from "@/app/Provider/userSate";
import Image from "next/image";
import Link from "next/link";
import { useContext, use } from "react"; // React থেকে use ইমপোর্ট করুন

// Client Component-এ async function ব্যবহার করা যায় না সরাসরি
function Page({ params }: { params: Promise<{ singleuser: string }> }) {
  // ১. params একটা Promise, তাই 'use' হুক দিয়ে ডাটা নিতে হয় ক্লায়েন্ট সাইডে
  const { singleuser } = use(params);
  const id = singleuser;

  // ২. কনটেক্সট থেকে ইউজার লিস্ট নেওয়া
  const { user } = useContext(AuthContext);

  // ৩. ডাটা খুঁজে বের করা
  const singleUser = user.find((u: any) => parseInt(u.id) === parseInt(id));

  // ৪. কন্ডিশনাল রেন্ডারিং
  if (!singleUser) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="">
          <Link
            href="/user"
            className="text-blue-600 hover:underline mb-6 inline-block">
            ← Back to User List
          </Link>
          <p>User not found</p>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <Link
          href="/user"
          className="text-blue-600 hover:underline mb-6 inline-block">
          ← Back to User List
        </Link>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Profile Header */}
          <div className="h-48 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

          <div className="relative px-8 pb-8">
            <div className="absolute -top-16 left-8">
              <Image
                src={singleUser.image}
                alt={singleUser.name}
                width={128}
                height={128}
                className="rounded-2xl border-4 border-white shadow-lg object-cover bg-white"
              />
            </div>

            <div className="pt-20">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    {singleUser.name}
                  </h1>
                  <p className="text-gray-500">
                    @{singleUser.username} • {singleUser.role}
                  </p>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition">
                  Edit Profile
                </button>
              </div>

              <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                {singleUser.description}
              </p>

              {/* Information Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 border-t pt-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    Contact Info
                  </h3>
                  <div className="mt-3 space-y-3">
                    <p className="text-gray-700 flex items-center">
                      📧 {singleUser.email}
                    </p>
                    <p className="text-gray-700 flex items-center">
                      📞 {singleUser.phone}
                    </p>
                    <p className="text-gray-700 flex items-center">
                      🌐 {singleUser.website}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    Work & Location
                  </h3>
                  <div className="mt-3 space-y-3">
                    <p className="text-gray-700 flex items-center">
                      🏢 {singleUser.company.name} (
                      {singleUser.company.position})
                    </p>
                    <p className="text-gray-700 flex items-center">
                      📍 {singleUser.address.street}, {singleUser.address.city}
                    </p>
                    <p className="text-gray-700 flex items-center">
                      📮 ZIP: {singleUser.address.zip}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
