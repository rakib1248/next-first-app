"use client";

import { AuthContext } from "@/app/Provider/userSate";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { UserFormDataDto } from "../user.dto";

export default function UserForm() {
  const { user, setUser } = useContext(AuthContext);

  const router = useRouter();
  const [formData, setFormData] = useState<UserFormDataDto>({
    id: 0,
    name: "",
    username: "",
    email: "",
    role: "User",
    phone: "",
    website: "",
    address: { street: "", city: "", zip: "" },
    company: { name: "", position: "" },
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    // যদি ইনপুট নেম 'address.' বা 'company.' দিয়ে শুরু হয়
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev: UserFormDataDto) => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof UserFormDataDto] as Record<string, string>),
          [child]: value,
        },
      }));
    } else {
      setFormData((prev: UserFormDataDto) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);

    setUser(() => [
      ...user,
      {
        image: `https://i.pravatar.cc/150?u=${user.length + 1}`,
        ...formData,
        id: (user.length + 1) as number,
      },
    ]);

    setFormData({
      id: 0,
      name: "",
      username: "",
      email: "",
      role: "User",
      phone: "",
      website: "",
      address: { street: "", city: "", zip: "" },
      company: { name: "", position: "" },
      description: "",
    });
    router.push("/user");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">
          Add New User
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Basic Info */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Sadia Afrin"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="0171...."
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="sadia_a"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="sadia@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              name="role"
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md">
              <option value="User">User</option>
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
            </select>
          </div>
        </div>

        <hr />

        {/* Address Section */}
        <h3 className="font-semibold text-gray-700">Address</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="address.street"
            onChange={handleChange}
            className="p-2 border rounded-md"
            placeholder="Street"
            required
          />
          <input
            type="text"
            name="address.city"
            onChange={handleChange}
            className="p-2 border rounded-md"
            placeholder="City"
            required
          />
          <input
            type="text"
            name="address.zip"
            onChange={handleChange}
            className="p-2 border rounded-md"
            placeholder="Zip Code"
            required
          />
        </div>

        <hr />

        {/* Company Section */}
        <h3 className="font-semibold text-gray-700">Company</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="company.name"
            onChange={handleChange}
            className="p-2 border rounded-md"
            placeholder="Company Name"
            required
          />
          <input
            type="text"
            name="company.position"
            onChange={handleChange}
            className="p-2 border rounded-md"
            placeholder="Position"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            onChange={handleChange}
            rows={3}
            required
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="About the user..."></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition">
          Create User
        </button>
      </form>
    </>
  );
}
