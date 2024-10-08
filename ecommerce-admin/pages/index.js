import Layout from "@/components/layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const {data:session} = useSession();

  if(!session) return;
return <Layout>
  <div className="text-blue-900 flex justify-between">
    <h2>  
      Hello, <b>{session?.user?.name}</b>
    </h2>
    <div className="flex bg-gray-300 gap-1 text-black">
      <img src={session?.user?.image} alt="" className="w-6 h-6"/>
      {session?.user?.name}
    </div>
  </div>
  </Layout>
}
