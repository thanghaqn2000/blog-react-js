import { useState } from "react";
import login_img from "../../../assets/images/login-img.png";

const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


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
              Đăng kí tài khoản
            </h1>
          </div>
          <form className="space-y-4 mt-6">
            <div className="email-info">
              <label
                htmlFor="email"
                className="text-base-xl block mb-2 text-sm font-medium text-gray-900 text-black"
              >
                Email <span className="text-red-600">*</span>
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
            <div className="phone-info">
              <label
                htmlFor="email"
                className="text-base-xl block mb-2 text-sm font-medium text-gray-900 text-black"
              >
                Số điện thoại <span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="0123456780"
                required
              />
            </div>
            <div className="password-info">
              <label
                htmlFor="password"
                className="text-base-xl block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Mật khẩu <span className="text-red-600">*</span>
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
            <div className="repassword-info">
              <label
                htmlFor="password"
                className="text-base-xl block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nhập lại mật khẩu <span className="text-red-600">*</span>
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
            <button
              type="submit"
              className="w-full bg-blue-600 text-white hover:bg-blue-700 focus:ring-4
                        focus:outline-none focus:ring-blue-300 rounded-lg
                        text-base-xl px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 font-bold"
            >
              Đăng kí
            </button>
          </form>
        </div>
      </div>
      <div className="back-img col-lg-6 ml-5">
        <img src={login_img} alt="" className="w-9/12" />
      </div>
    </section>
  );
};

export default Register;
