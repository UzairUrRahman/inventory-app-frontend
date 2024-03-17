const login = () => {
  return (
    <div className="flex flex-col justify-center items-center p-20 text-lg font-medium text-black bg-white max-md:px-5">
      <img
        loading="lazy"
        src="x"
        className="mt-44 w-20 aspect-[1.03] max-md:mt-10"
      />
      <div className="mt-4 text-2xl">Checklist</div>
      <button className="justify-center items-center px-16 py-5 mt-16 max-w-full bg-neutral-200 rounded-[100px] w-[474px] max-md:px-5 max-md:mt-10">
        Login as an Employee
      </button>
      <button className="justify-center items-center px-16 py-5 mt-3 max-w-full bg-neutral-200 rounded-[100px] w-[474px] max-md:px-5">
        Login as an Admin
      </button>
    </div>
  );
}

export default login