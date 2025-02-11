import * as yup from "yup";
import { phoneNumberRegex } from "../constant-utils";
export const schemaRegister = yup.object({
    email: yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),
    phoneNumber: yup
      .string()
      .matches(phoneNumberRegex, "Số điện thoại không hợp lệ")
      .required("Số điện thoại là bắt buộc"),
    userName: yup.string().required("Tên người dùng là bắt buộc"),
    password: yup.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự").required("Mật khẩu là bắt buộc"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Mật khẩu nhập lại không khớp")
      .required("Vui lòng nhập lại mật khẩu"),
});
