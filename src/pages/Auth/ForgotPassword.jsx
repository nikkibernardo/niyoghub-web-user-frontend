import LayoutOut from "../../layout/LayoutOut";

const ForgotPassword = () => {
  return (
    <>
      <LayoutOut>
        <h1>FORGOT PASSWORD</h1>
        <h1>FORGOT PASSWORD</h1>
        <h1>FORGOT PASSWORD</h1>
        <h1>FORGOT PASSWORD</h1>
        <h1>FORGOT PASSWORD</h1>

        <h2>enter email</h2>
        <div className="text-center mt-4 text-gray-600">
          <p>want to reset password? 
            <a href="/reset-password" className="text-green-700 hover:underline"> Reset Password</a>
          </p>
        </div>

        <div className="text-center mt-4 text-gray-600">
          <p>Already have an account? 
            <a href="/signin" className="text-green-700 hover:underline"> Sign in</a>
          </p>
        </div>
      </LayoutOut>
    </>
  );
};

export default ForgotPassword;