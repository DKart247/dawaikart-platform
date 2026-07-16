import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  async function signOut() {
    "use server";

    const supabase = await createClient();

    await supabase.auth.signOut();

    redirect("/login");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg rounded-xl bg-white p-8 shadow-lg text-center">
        <h1 className="text-3xl font-bold text-green-600">
          Welcome to Dawaikart247
        </h1>

        <p className="mt-6 text-gray-600">
          Logged in as
        </p>

        <p className="font-semibold">{user.email}</p>

        <form action={signOut} className="mt-8">
          <button
            type="submit"
            className="w-full rounded-md bg-red-600 px-4 py-3 font-semibold text-white hover:bg-red-700"
          >
            Logout
          </button>
        </form>
      </div>
    </main>
  );
}