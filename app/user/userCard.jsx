import Image from "next/image";
import Link from "next/link";

const UserCard = ({ user, index }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
      {/* কার্ডের উপরের অংশ - ইমেজ এবং রোল */}
      <div className="relative h-24 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="absolute -bottom-10 left-6">
          <Image
            src={user.image}
            alt={user.name}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full border-4 border-white object-cover"
          />
        </div>
      </div>

      {/* কার্ডের নিচের অংশ - ইনফরমেশন */}
      <div className="pt-12 pb-6 px-6">
        <div className="flex justify-between items-center mb-1">
          <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
          <span className="px-2 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
            {user.role}
          </span>
        </div>

        <p className="text-sm text-gray-500 mb-4">@{user.username}</p>

        <div className="space-y-2 mb-6">
          <div className="flex items-center text-sm text-gray-600">
            <span className="mr-2">📧</span> {user.email}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span className="mr-2">🏢</span> {user.company.name}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span className="mr-2">📍</span> {user.address.city}
          </div>
        </div>

        {/* অ্যাকশন বাটন */}
        <Link href={`/user/${user.id}`}>
          <button className="w-full bg-gray-900 text-white py-2.5 rounded-xl font-medium hover:bg-gray-800 transition-colors">
            View Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
