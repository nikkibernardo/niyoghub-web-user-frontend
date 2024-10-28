import LayoutOut from "../../layout/LayoutOut";

const SignUp = () => {
  return (
    <>
      <LayoutOut>
        <h1>SIGN UP</h1>
        <h1>SIGN UP</h1>
        <h1>SIGN UP</h1>
        <h1>SIGN UP</h1>
        <h1>SIGN UP</h1>
        <h1>SIGN UP</h1>

        <a href="/" type="submit" className=" w-full px-20 bg-[#537F19] text-white py-2 hover:bg-[#3B5B12] transition duration-200 rounded-tr-lg rounded-bl-lg text-center">
                  Sign in
        </a> 

        <div className="text-center mt-4 text-gray-600">
          <p>Already have an account? 
            <a href="/signin" className="text-green-700 hover:underline">Sign in</a>
            </p>
        </div>
      </LayoutOut>
    </>
  );
};

export default SignUp;