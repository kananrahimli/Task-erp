import React, { useState } from "react";
import { json } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  surname: "",
  dadname: "",
  startDate: "",
  phone: "",
  gender: "",
  email: "",
  password: "",
  position: "",
};
const Hr = () => {
    const [values, setValues] = useState({ ...initialState });
    
  const storedWorkers = localStorage.getItem("workers");
  const parsedWorkers = storedWorkers ? JSON.parse(storedWorkers) : null;
    const [workers, setWorkers] = useState(parsedWorkers);
    const [gender, setGender] = useState("");
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
    const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setGender(e.target.value);
    };

  const addWorker = () => {
    const newWorker = {
      id: new Date(),
      name: values.name,
      surname: values.surname,
      dadname: values.dadname,
      startDate: values.startDate,
      phone: values.phone,
      gender: values.gender,
      email: values.email,
      password: values.password,
      position: values.position,
    };
      for (const [field, value] of Object.entries(values)) {
        if (!value.trim()) {
         toast.error(`${field} hissəsi boş qala bilməz.`);
         return;
        }
      }
    const updatedWorkers = workers ? [...workers, newWorker] : [newWorker];
    localStorage.setItem("workers", JSON.stringify(updatedWorkers));
    setWorkers(updatedWorkers);
    console.log(initialState);

    setValues(initialState);
      setGender(""); 
      toast.success('Əlavə edildi')
  };
  return (
    <div className=" h-screen flex  ">
      <div className="px-5 w-[40%] dark:bg-gray-800 h-full flex items-center">
        <div className="w-full">
          <h3 className="text-white text-2xl mb-3">Yeni işçi əlavə et</h3>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="name"
              id="name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => handleInput(e)}
              required
              value={values.name}
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Ad
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="surname"
              id="surname"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(e) => handleInput(e)}
              value={values.surname}
            />
            <label
              htmlFor="surname"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Soyad
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="dadname"
              id="dadname"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(e) => handleInput(e)}
              value={values.dadname}
            />
            <label
              htmlFor="dadname"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Ata adı
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="date"
              name="startDate"
              id="startDate"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(e) => handleInput(e)}
              value={values.startDate}
            />
            <label
              htmlFor="startDate"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              İşə qəbul tarixi
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => handleInput(e)}
              value={values.email}
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email adres
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="password"
              id="password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(e) => handleInput(e)}
              value={values.password}
            />
            <label
              htmlFor="password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Şifrə
            </label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="phone"
                id="phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={(e) => handleInput(e)}
                required
                value={values.phone}
              />
              <label
                htmlFor="phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Telefon nömrəsi
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="position"
                id="position"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={(e) => handleInput(e)}
                required
                value={values.position}
              />
              <label
                htmlFor="position"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Vəzifə
              </label>
            </div>
          </div>

          <div className="flex gap-3 flex-col my-1 mb-5">
            <div className="flex gap-3">
              <div className="flex items-center">
                <input
                  id="male"
                  type="radio"
                  name="gender"
                  value="kişi"
                  onChange={(e) => {
                    handleInput(e);
                    handleGenderChange(e);
                  }}
                  checked={gender === "kişi"}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="male"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Kişi
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="female"
                  type="radio"
                  name="gender"
                  onChange={(e) => {
                    handleInput(e);
                    handleGenderChange(e);
                  }}
                  checked={gender === "qadın"}
                  value="qadın"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="female"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Qadın
                </label>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              addWorker();
            }}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </div>

      <div className="w-[60%] p-5 overflow-y-auto">
        <div className="grid grid-cols-2 gap-4">
          {workers &&
            workers.map((worker: any) => {
              return (
                <div
                  className="dark:bg-gray-800 shadow-md rounded-lg overflow-hidden text-white p-5 relative"
                  key={worker.id}
                >
                  <span className="absolute right-5 top-8">
                    {worker.gender}
                  </span>
                  <div className="bg-gray-800  flex items-center gap-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 5a4 4 0 018 0c0 1.333-.667 2-2 3-.667.667-1.333 1.333-2 2H8c-.667-.667-1.333-1.333-2-2-1.333-1-2-1.667-2-3zM2 18a1 1 0 001 1h14a1 1 0 001-1V9a5 5 0 00-10 0v9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <h2 className="text-xl font-semibold  text-gray-400">
                      {worker.name} {worker.surname} {worker.dadname}
                    </h2>
                  </div>
                  <div className=" mt-5">
                    <p className=" mb-2">
                      <span className="text-gray-400">İşə qəbul tarixi:</span>{" "}
                      {worker.startDate}
                    </p>
                    <p className=" mb-2">
                      <span className="text-gray-400">E-poçt:</span>{" "}
                      {worker.email}
                    </p>
                    <p className=" mb-2">
                      <span className="text-gray-400">Şifrə:</span>{" "}
                      {worker.password}
                    </p>
                    <p className=" mb-2">Telefon nömrəsi: {worker.phone}</p>
                    <p className=" mb-2">Vəzifə: {worker.position}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Hr;
