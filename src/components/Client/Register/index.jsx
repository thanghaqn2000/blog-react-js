import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

import { registerUser } from "../../../services/api/user-service-v1";
import { schemaRegister } from "../../../utils/validate/yupUser";
import { checkInfoUniqueness } from "../../../services/api/user-service-v1";
import { emailRegex, phoneNumberRegex } from "../../../utils";
import login_img from "../../../assets/images/login-img.png";
import Button from "../../Items/Button";

const Register = () => {  
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [emailStatus, setEmailStatus] = useState(null);
  const [emailMessage, setEmailMessage] = useState("");
  const [phoneStatus, setPhoneStatus] = useState(null);
  const [phoneMessage, setPhoneMessage] = useState("");

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schemaRegister),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    clearErrors();
    try {
      setLoading(true);

      await registerUser({
        user: {
          email: data.email,
          phone_number: data.phoneNumber,
          password: data.password,
          name: data.userName
        }
      });
      toast.success("Tạo tài khoản thành công, hãy đăng nhập!");
      navigate("/login");
    } catch (err) {
      const validationErrors = err.response?.data?.data?.errors;
      if (validationErrors) {
        const { email, phone_number } = validationErrors;
        if (email) {
          setError("email", { message: validationErrors.email[0] });
        }
        if (phone_number) {
          setError("phoneNumber", { message: validationErrors.phone_number[0] });
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const handleEmailBlur = async (event) => {
    const email = event.target.value;

    if(!email || !emailRegex.test(email)) return;

    setEmailStatus("loading");
    try {
      await checkInfoUniqueness({ email });
      setEmailStatus("valid");
      setEmailMessage("✅ Email hợp lệ");
    } catch (error) {
      setEmailStatus("error");
      setEmailMessage(error.response?.data?.data?.errors || "Lỗi không xác định");
    }
  };

  const handlePhoneNumberBlur = async (event) => {
    const phoneNumber = event.target.value;
    if(!phoneNumber || !phoneNumberRegex.test(phoneNumber)) return;
    setPhoneStatus("loading");
    try {
      await checkInfoUniqueness({ phone_number: phoneNumber });
      setPhoneStatus("valid");
      setPhoneMessage("✅ Số điện thoại hợp lệ");
    } catch (error) {
      setPhoneStatus("error");
      setPhoneMessage(error.response?.data?.data?.errors || "Lỗi không xác định");
    }
  };
  

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 lg:px-8">
      <div className="w-full lg:w-1/2 xl:w-2/5 px-6 py-8 bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700 lg:ml-8">
        <div className="login-form pl-3 pt-[50px] lg:pt-[100px]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Đăng ký tài khoản</h1>
          </div>
          <form className="space-y-4 mt-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block mb-2 font-large text-gray-900 dark:text-gray-300">
                Tên tài khoản (số điện thoại) <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Nhập số điện thoại"
                {...register("phoneNumber")}
                onBlur={handlePhoneNumberBlur}
              />
              {phoneStatus === "loading" && <p>🔄 Đang kiểm tra...</p>}
              {errors.phoneNumber ? (
                <p className="text-red-600">{errors.phoneNumber.message}</p>
              ) : (
                <p className={phoneStatus === "error" ? "text-red-600" : "text-green-600"}>{phoneMessage}</p>
              )}
            </div>
  
            <div>
              <label className="block mb-2 font-large text-gray-900 dark:text-gray-300">
                Họ và tên <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Nhập tên"
                {...register("userName")}
              />
              {errors.userName && <p className="text-red-600">{errors.userName.message}</p>}
            </div>
  
            <div>
              <label className="block mb-2 font-large text-gray-900 dark:text-gray-300">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                placeholder="abc@gmail.com"
                {...register("email")}
                onBlur={handleEmailBlur}
                className="border p-2 rounded w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              {emailStatus === "loading" && <p>🔄 Đang kiểm tra...</p>}
              {errors.email ? (
                <p className="text-red-600">{errors.email.message}</p>
              ) : (
                <p className={emailStatus === "error" ? "text-red-600" : "text-green-600"}>{emailMessage}</p>
              )}
            </div>
  
            <div>
              <label className="block mb-2 font-large text-gray-900 dark:text-gray-300">
                Mật khẩu <span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="••••••••"
                {...register("password")}
              />
              {errors.password && <p className="text-red-600">{errors.password.message}</p>}
            </div>
  
            <div>
              <label className="block mb-2 font-large text-gray-900 dark:text-gray-300">
                Nhập lại mật khẩu <span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="••••••••"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && <p className="text-red-600">{errors.confirmPassword.message}</p>}
            </div>
  
            <div className="flex space-x-4">
              <Button
                text="Đăng kí"
                type="submit"
                disabled={!isValid || loading}
                addClass="w-full lg:w-1/2 bg-blue-600 text-white py-2 rounded-lg text-center hover:bg-blue-700"
              />
              <Button
                text="Trở về"
                type="button"
                onClick={() => navigate("/login")}
                addClass="w-full lg:w-1/2 bg-red-600 text-white py-2 rounded-lg text-center hover:bg-red-700"
              />
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

export default Register;
