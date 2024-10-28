import Layout from "../../layout/Layout";

const Settings = () => {
  return (
    <>
      <Layout>
        <div className="my-container mt-5"> 
          <a href="/" className="flex items-center space-x-2">
            <svg
              className="w-5 h-5 text-black-500 transition"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M15.354 1.646a.5.5 0 0 1 0 .708L9.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
            <span className="text-black-500">Go back</span>
          </a>
        </div>

        <div 
          className="text-start"
        >
          <h3 className="mt-10 text-2xl sm:text-xl leading-normal font-bold tracking-tight text-gray-900">
            USER SETTINGS
          </h3>
        </div>
      </Layout>
    </>
  );
};

export default Settings;