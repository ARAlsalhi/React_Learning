import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//external laibary just for handel the contry in the phone box
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { isValidPhoneNumber } from "libphonenumber-js"; // هذه تتحق من ان الرقم تبع كل دوله صحيح

import AuthNavbar from "../components/AuthNavbar";

import "../styles/Auth.css";
import viewIcon from "../assets/view.png";
import hideIcon from "../assets/hide.png";
import avatar1 from "../assets/avatars/avatar1.png";
import avatar2 from "../assets/avatars/avatar2.jpg";
import avatar3 from "../assets/avatars/avatar3.jpg";
// import avatar4 from "../assets/avatars/avatar4.png";

export default function Register() {
  // First, we need to create state variables to hold the form data
  // and any error messages. We'll use the useState hook for this purpose.
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errors, setErrors] = useState({}); // {} IT just to take multiple errors and show them in the form
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState(avatar1); // State to hold the selected avatar file
  const [touched, setTouched] = useState({
    name: false,
    username: false,
    email: false,
    phone: false,
    password: false,
    confirmPassword: false,
    // Touched here it is an obj store if the user select other filed  مبعنى انه هو اوبجكت وظيفته يخزن هل المتسخدم خرج من الحقل ولا لا للكل عنصر
  }); // this for  هذه اذا كتب اليوزر الايميل وطلع من الحقل يطلع له خطا وقيمته الافتراضيه خطا يعني دامه يكتب لا تطلع له خطا في الانبت تثير ترو اذا طلع من الفيلد

  // هذه داله تتحق من البريد
  // ما تغير اي استيت هذه بس تفحص قيمة الايميل ثم ترجع النتيجه وابستخدمها في اكثر من مكان
  const validateField = (field, value) => {
    // Required fields
    if (value.trim() === "") {
      const messages = {
        name: "الاسم مطلوب",
        username: "اسم المستخدم مطلوب",
        email: "البريد الإلكتروني مطلوب",
        phone: "رقم الجوال مطلوب",
        password: "كلمة المرور مطلوبة",
        confirmPassword: "تأكيد كلمة المرور مطلوب",
      };

      return messages[field];
    }

    // Name
    if (field === "name" && value.trim().length < 2) {
      return "الاسم يجب أن يحتوي على حرفين على الأقل";
    }

    // Username
    if (field === "username" && value.trim().length < 3) {
      return "اسم المستخدم يجب أن يحتوي على 3 أحرف على الأقل";
    }

    // Email
    if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "البريد الإلكتروني غير صالح";
    }

    // Phone
    if (field === "phone" && !isValidPhoneNumber(value)) {
      return "رقم الجوال غير صالح";
    }

    // Password
    if (field === "password" && value.length < 6) {
      return "كلمة المرور يجب أن تحتوي على 6 أحرف على الأقل";
    }

    // Confirm Password
    if (field === "confirmPassword" && value !== password) {
      return "كلمتا المرور غير متطابقتين";
    }

    return "";
  };

  // بعد ما اضفت داله تتحق من الاسميل هنا اضفت داله تستقبل الانبت من اليوزر
  // اول شي ناخذ من اليوزر الانبت ثم نحدث داله سيت ايميل في الاستيت وبعدين
  const handleChange = (field, value, setValue) => {
    // Update input value

    //  Computed Property Name اسمه   JavaScript  وهو مفهوم في field عشان ما ننسى هنا استخدمنا

    setValue(value);

    // Clear error when input becomes empty
    if (value.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: "",
      }));

      return;
    }

    // Validate only after first blur
    if (touched[field]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: validateField(field, value),
      }));
    }
  };

  const handleBlur = (field, value) => {
    // Mark field as touched
    setTouched((prevTouched) => ({
      ...prevTouched,
      [field]: true,
    }));

    // Validate field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: validateField(field, value),
    }));
  };

  // Now we create the register handler function

  const handleRegister = (event) => {
    event.preventDefault(); // Prevent the page to do refresh when the form is submitted
    // 1. Validate all fields
    const newErrors = {
      name: validateField("name", name),
      username: validateField("username", username),
      email: validateField("email", email),
      phone: validateField("phone", phone),
      password: validateField("password", password),
      confirmPassword: validateField("confirmPassword", confirmPassword),
    }; // Create an empty object to hold the error messages | any errors will be stored here

    // 2. Update errors state
    setErrors(newErrors);

    // 3. Check if there are any errors
    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    // 4. Stop registration if validation fails
    if (hasErrors) {
      return;
    } // Stop the registration process if there are at least one error

    // If all validations pass, we can proceed to register the user

    // 5. Prepare user data
    const userData = {
      name: name,
      username: username,
      email: email,
      phone: phone,
      password: password, // ما استخدمه في المشروع لانه ما ينرسل بس حطيته هنا للتعلم
      avatar: avatar, // Store the selected avatar file in the user data
    };

    // 6. Save user data (temporary learning example)
    // Save the user data to localStorage
    localStorage.setItem("userData", JSON.stringify(userData));

    setErrors({}); // 7. Clear errors and Clear any previous error messages

    // 8. Navigate to login page
    navigate("/login"); // Redirect to the login page after successful registration
  };

  // Now we will build the Register Form
  return (
    <div className="register-page">
      <AuthNavbar />

      <div className="register-layout">
        {/*this for left side animation which take 60% */}
        <div className="register-animation-side">
          <div className="register-banner-content">
            <h2>
              كل قطعة
              <br />
              تحكي حكاية.
            </h2>

            <p>جهّز رحلة البحث، شاركها مع ضيوفك، وخلّهم يدورون على أول خيط.</p>
          </div>

          <div className="register-banner-pattern" aria-hidden="true" />
        </div>

        {/*this right side 40 % for the register form*/}

        <div className="register-form-side" dir="rt1">
          {/*dir="rt1" ==> This for right-to-left text direction */}
          <div className="register-box">
            <h1>إنشاء حساب جديد</h1>
            <p className="register-description">
              أمامك بضعة أمتار فقط عن الكنز الخفي.. هل أنت مستعد؟
            </p>

            <div className="avatar-section">
              <label>اختر شخصيتك</label>

              <div className="avatar-options">
                <button
                  type="button"
                  className={
                    avatar === avatar1
                      ? "avatar-option selected"
                      : "avatar-option"
                  }
                  onClick={() => setAvatar(avatar1)}
                >
                  <img src={avatar1} alt="Avatar 1" />
                </button>

                <button
                  type="button"
                  className={
                    avatar === avatar2
                      ? "avatar-option selected"
                      : "avatar-option"
                  }
                  onClick={() => setAvatar(avatar2)}
                >
                  <img src={avatar2} alt="Avatar 2" />
                </button>

                <button
                  type="button"
                  className={
                    avatar === avatar3
                      ? "avatar-option selected"
                      : "avatar-option"
                  }
                  onClick={() => setAvatar(avatar3)}
                >
                  <img src={avatar3} alt="Avatar 3" />
                </button>
              </div>
            </div>

            <form onSubmit={handleRegister}>
              <div className="form-row">
                <div className="form-group">
                  <label>الأسم كامل</label>

                  <input
                    type="text"
                    value={name}
                    onChange={(event) =>
                      handleChange("name", event.target.value, setName)
                    }
                    onBlur={() => handleBlur("name", name)}
                    placeholder="الأسم كامل"
                    className={errors.name ? "input-invalid" : ""}
                  />
                  {errors.name && <p className="input-error">{errors.name}</p>}
                </div>

                <div className="form-group">
                  <label> اسم المستخدم</label>

                  <input
                    type="text"
                    value={username}
                    onChange={(event) =>
                      handleChange("username", event.target.value, setUsername)
                    }
                    onBlur={() => handleBlur("username", username)}
                    placeholder="ادخل اسم المستخدم"
                    className={errors.username ? "input-invalid" : ""}
                  />

                  {errors.username && (
                    <p className="input-error">{errors.username}</p>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label>البريد الإلكتروني</label>

                <input
                  /* 
                onChange={handleEmailChange} هذه حطينا الداله داخلها لننا هنا سوينا حدثين وهما تحديث البريد و التحققق من صحته اثاء الكتابه 
                className={errors.email ? "input-invalid" : ""} هنا اذا فيه خطأ السي اس اس يهندها ويغير اللون الى احمر
                
                */
                  type="email"
                  value={email}
                  onChange={(e) =>
                    handleChange("email", e.target.value, setEmail)
                  }
                  onBlur={() => handleBlur("email", email)}
                  placeholder="ادخل البريد الإلكتروني"
                  className={errors.email ? "input-invalid" : ""}
                />
                {errors.email && <p className="input-error">{errors.email}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">رقم الجوال</label>

                <PhoneInput
                  defaultCountry="sa"
                  value={phone}
                  inputProps={{
                    id: "phone",
                    name: "phone",
                    autoComplete: "tel",
                  }}
                  disableDialCodeAndPrefix={true}
                  showDisabledDialCodeAndPrefix={true}
                  placeholder="5X XXX XXXX"
                  onChange={(value) => {
                    handleChange("phone", value, setPhone);
                  }}
                  onBlur={() => handleBlur("phone", phone)}
                  className={errors.phone ? "phone-invalid" : ""}
                />

                {errors.phone && <p className="input-error">{errors.phone}</p>}
              </div>

              <div className="form-group">
                <label>كلمة المرور</label>
                <div className="password-input">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) =>
                      handleChange("password", e.target.value, setPassword)
                    }
                    onBlur={() => handleBlur("password", password)}
                    placeholder="أدخل كلمة المرور"
                    className={errors.password ? "input-invalid" : ""}
                  />

                  <button
                    type="button"
                    className="password-eye"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"
                    }
                  >
                    <img
                      src={showPassword ? hideIcon : viewIcon}
                      alt=""
                      className="eye-icon"
                    />
                  </button>
                </div>
                {errors.password && (
                  <p className="input-error">{errors.password}</p>
                )}
              </div>

              <div className="form-group">
                <label>تأكيد كلمة المرور</label>
                <div className="password-input">
                  <input
                    type={showConfirmPassword ? "text" : "password"} // i put the showConfirmPassword state by default is false that means it will be password not text untill i change the state
                    value={confirmPassword}
                    onChange={(e) =>
                      handleChange(
                        "confirmPassword",
                        e.target.value,
                        setConfirmPassword,
                      )
                    }
                    onBlur={() =>
                      handleBlur("confirmPassword", confirmPassword)
                    }
                    placeholder="أعد إدخال كلمة المرور"
                    className={errors.confirmPassword ? "input-invalid" : ""}
                  />
                  <button
                    type="button"
                    className="password-eye"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label={
                      showConfirmPassword
                        ? "إخفاء تأكيد كلمة المرور"
                        : "إظهار تأكيد كلمة المرور"
                    }
                  >
                    <img
                      src={showConfirmPassword ? hideIcon : viewIcon}
                      alt=""
                      className="eye-icon"
                    />
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="input-error">{errors.confirmPassword}</p>
                )}
              </div>

              <p className="signin-text">
                لديك حساب بالفعل؟
                <Link to="/login"> تسجيل الدخول</Link>
              </p>

              <button type="submit" className="register-button">
                إنشاء حساب
              </button>

              {/* OR Divider */}

              <div className="auth-divider">
                <span>أو</span>
              </div>

              {/* Google Button */}

              <button
                type="button"
                className="google-button"
                onClick={() => {
                  alert("تسجيل الدخول باستخدام Google غير متاح حاليًا");
                }}
              >
                <span className="google-icon">G</span>
                المتابعة باستخدام Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
