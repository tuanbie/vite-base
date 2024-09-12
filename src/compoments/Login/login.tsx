const LoginForm = ({}) => {
  return (
    <div className=" sm:py-6">
      <div className="sm:px-[13%]">
        <h2 className="text-base font-semibold leading-7 text-gray-900 pb-12">I already have an account</h2>
        <div className="flex justify-between">
          <p>Email*</p>
          <p>Mandatory fields *</p>
        </div>
        <input
          type="text"
          placeholder="Email"
          className="pl-4 pr-4 py-4 rounded-xl border border-gray-300 shadow-sm w-full mb-8 mt-2"
        />
        <p>Password*</p>
        <input
          type="text"
          placeholder="Password"
          className="pl-4 pr-4 py-4 rounded-xl border border-gray-300 shadow-sm w-full my-2"
        />
        <p className=" ">Forgot your password?</p>
        <button className="bg-black w-full pr-4 py-4 text-white rounded-full my-7 "> Sign in</button>
      </div>
      <hr className=" border-t border-gray-300 pt-6" />
      <div className="sm:px-[13%]">
        <h2 className="text-base font-semibold leading-7 text-gray-900 sm:py-6">I don't have an account</h2>
        <p>Enjoy added benefits and a richer experience by creating a personal account</p>

        <button className="bg-white w-full pr-4 py-4 border-[1px] border-black text-black rounded-full my-7 ">
          Create My Jan Account
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
