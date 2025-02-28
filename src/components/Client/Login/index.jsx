import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import login_img from "../../../assets/images/login-img.png";
import { useAuth } from "../../../context/AuthContex";
import { loginUser } from "../../../services/api/authen-v1-service";
import { schemaLogin } from "../../../utils/validate/yupUser";

const LoginClient = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaLogin) });

  const onSubmit = async (data) => {
    try {
      const response = await loginUser({
        user: {
          phone_number: data.phoneNumber,
          password: data.password,
        },
      });
      login(response.token_info.accessToken, response.user);
      toast.success("Đăng nhập thành công!");
      navigate("/");
    } catch (error) {
      toast.error("Đăng nhập thất bại!");
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 lg:px-8">
      <div className="w-full lg:w-1/2 xl:w-2/5 px-6 py-8 bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700 lg:ml-8">
        <div className="login-form pl-3 pt-[50px] lg:pt-[100px]">
          <div className="text-center">
            <img
              className="w-8 h-8 mx-auto mb-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Chưa có tài khoản?{" "}
              <NavLink
                to="/register"
                className="text-blue-600 underline cursor-pointer hover:shadow-lg hover:bg-blue-100 px-1 rounded-md transition-all"
              >
                Tạo ngay ở đây
              </NavLink>
            </h1>
          </div>
          <form className="space-y-4 mt-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="email"
                className="text-base-xl block mb-2 font-large text-gray-900 dark:text-white"
              >
                Số điện thoại
              </label>
              <input
                type="tel"
                id="phoneNumber"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="0915xxxxxx"
                {...register("phoneNumber")}
                required
              />
              <p className="text-red-500 text-sm">
                {errors.phoneNumber?.message}
              </p>
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-base-xl block mb-2 font-large text-gray-900 dark:text-white"
              >
                Mật khẩu
              </label>
              <input
                type="password"
                id="password"
                {...register("password")}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="••••••••"
                required
              />
              <p className="text-red-500 text-sm">{errors.password?.message}</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="remember"
                  className="text-base-xl ml-2 text-medium text-black-500 dark:text-black-300"
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
              className="w-full bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-base-xl px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 font-bold"
            >
              Đăng nhập
            </button>

            <div className="login-social flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4">
              <button
                type="button"
                className="text-base-xl text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:ring-[#3b5998]/50 font-bold rounded-lg text-sm px-5 py-2.5 text-center flex justify-center items-center dark:focus:ring-[#3b5998]/55 w-full lg:w-1/2"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  size="lg"
                  className="mr-2 -ml-1 w-4 h-4"
                />
                Đăng nhập với Facebook
              </button>

              <button
                type="button"
                className="text-base-xl text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-[#4285F4]/50 font-bold rounded-lg text-sm px-5 py-2.5 text-center flex justify-center items-center dark:focus:ring-[#4285F4]/55 w-full lg:w-1/2"
              >
                <FontAwesomeIcon
                  icon={faGoogle}
                  size="lg"
                  className="mr-2 -ml-1 w-4 h-4"
                />
                Đăng nhập với Google
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="w-full lg:w-1/2 hidden lg:flex justify-center items-center mt-8 lg:mt-0 lg:ml-5">
        <img src={login_img} alt="" className="w-full lg:w-9/12" />
      </div>
    </section>
  );
};

export default LoginClient;
