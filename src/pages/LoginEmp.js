const loginEmp = () => {
  return (
    <div className="flex flex-col justify-center items-center p-20 text-lg font-medium text-black bg-white max-md:px-5">
      <img
        loading="lazy"
        src="x"
        className="mt-24 w-20 aspect-[1.03] max-md:mt-10"
      />
      <div className="mt-4 text-2xl">Checklist</div>
      <div className="mt-16 text-xl font-semibold max-md:mt-10">
        Login as Employee
      </div>
      <div className="flex gap-5 justify-between px-5 py-5 mt-3 max-w-full border border-black border-solid rounded-[100px] text-black text-opacity-50 w-[474px] max-md:flex-wrap">
        <input className="flex-auto" placeholder = "Enter Username" />
      </div>
      <div className="flex gap-5 justify-between px-5 py-5 mt-3 max-w-full border border-black border-solid rounded-[100px] text-black text-opacity-50 w-[474px] max-md:flex-wrap">
        <input className="flex-auto" placeholder = "Enter Password" />
        <img
          loading="lazy"
          src="x"
          className="shrink-0 my-auto w-4 aspect-square fill-black"
        />
      </div>
      <button className="justify-center items-center px-16 py-5 mt-8 max-w-full whitespace-nowrap bg-neutral-200 rounded-[100px] w-[474px] max-md:px-5">
        Login
      </button>
    </div>
  );
}

export default loginEmp