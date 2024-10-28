import LayoutOut from "../../layout/LayoutOut";

const ResetPassword = () => {
  return (
    <>
      <LayoutOut>
        <h1>RESET PASSWORD</h1>
        <h1>RESET PASSWORD</h1>
        <h1>RESET PASSWORD</h1>
        <h1>RESET PASSWORD</h1>
        <h1>RESET PASSWORD</h1>

        <div className="text-center mt-4 text-gray-600 py-2 px-10 bg-[#537F19]">
          {/* <p>Already have an account?  */}
            <a href="/otp" className="text-white">Confirm new password</a>
            {/* </p> */}
        </div>

        <div className="text-center mt-4 text-gray-600">
          <p>Already have an account? 
            <a href="/signin" className="text-green-700 hover:underline">Sign in</a>
            </p>
        </div>
      </LayoutOut>
    </>
  );
};

export default ResetPassword;