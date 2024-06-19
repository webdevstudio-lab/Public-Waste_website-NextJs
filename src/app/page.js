import HomePage from "./pages/HomePage";

const page = ({ children }) => {
  return (
    <>
      <HomePage> {children} </HomePage>
    </>
  );
};

export default page;
