import Image from "next/image";
import Signup from  "./Signup";
import Users from "./Users/page";
import Signuppage from "./signuppage/page";

export default function Home() {
  return (
    <div>
      <Signup/>
      <Users/>
      <Signuppage/>

    </div>
  );
}
