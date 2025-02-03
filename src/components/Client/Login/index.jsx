import { useState } from "react";
import login_img from "../../../assets/images/login-img.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";


const LoginClient = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password, remember });
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-between col-lg-12 px-8">
      <div className="px-6 py-8 bg-white rounded-lg shadow dark:border dark:bg-gray-800
            dark:border-gray-700 col-lg-6 ml-8" style={{height: "800px"}}>
        <div className="login-form pl-3 pt-[100px]">
          <div className="text-center">
            <img
              className="w-8 h-8 mx-auto mb-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            <h1 className="text-2xl font-bold text-gray-900">
              Chưa có tài khoản?{' '}
              <NavLink to="/register" className="text-blue-600 underline cursor-pointer hover:shadow-lg hover:bg-blue-100 px-1 rounded-md transition-all">
                Tạo ngay ở đây
              </NavLink>
            </h1>
          </div>
          <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="text-base-xl block mb-2 text-sm font-medium text-gray-900 text-black"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="email@gmail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-base-xl block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Mật khẩu
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="••••••••"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="remember"
                  className="text-base-xl ml-2 text-sm text-black-500 dark:text-black-300 text-black"
                >
                  Ghi nhớ đăng nhập
                </label>
              </div>
              <NavLink
                to="/"
                className="text-base-xl font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Quên mật khẩu?
              </NavLink>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white hover:bg-blue-700 focus:ring-4
                        focus:outline-none focus:ring-blue-300 rounded-lg
                        text-base-xl px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 font-bold"
            >
              Đăng nhập
            </button>
            <div className="login-social flex justify-between space-x-2">
              <button type="button" className="f text-base-xl text-white bg-[#3b5998]
                hover:bg-[#3b5998]/90 focus:ring-4 focus:ring-[#3b5998]/50 font-bold rounded-lg
                text-sm px-5 py-2.5 text-center flex justify-center items-center dark:focus:ring-[#3b5998]/55 w-1/2">
                  <FontAwesomeIcon icon={faFacebookF} size="lg" className="mr-2 -ml-1 w-4 h-4"/>
                Đăng nhập với Facebook
              </button>

              <button type="button" className="text-base-xl text-white bg-red-700 hover:bg-red-800 focus:ring-4
                focus:ring-[#4285F4]/50 font-bold rounded-lg text-sm px-5 py-2.5 text-center
                flex justify-center items-center dark:focus:ring-[#4285F4]/55 w-1/2">
                <FontAwesomeIcon icon={faGoogle} size="lg" className="mr-2 -ml-1 w-4 h-4"/>
                Đăng nhập với Google
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="back-img col-lg-6 ml-5">
        <img src={login_img} alt="" className="w-9/12" />
      </div>
    </section>
  );
};

export default LoginClient;
