import Footer from "../components/Footer";
import { useUserContext } from "../context/UserContext";

const Dashboard = () => {
  const { user } = useUserContext();

  return (
    <>
      <div className="flex flex-col items-center gap-10 m-8">
        <h1 className="text-2xl text-red-400"> Dashboard </h1>
        <p>{user?.name}</p>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
