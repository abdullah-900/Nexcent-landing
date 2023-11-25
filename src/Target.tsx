const Target = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className=" mb-2 w-52  md:w-[542px]">
        <h2 className=" text-center font-semibold  leading-[2.75rem] text-[2.25rem] text-Neutral/D_Grey">
          Manage your entire community in a single system
        </h2>
      </div>
      <p className="text-Neutral/Grey">Who is Nextcent suitable for?</p>
      <div className=" px-36 flex flex-col md:flex-row justify-center items-center">
      <div className="px-8 py-6 gap-2  flex items-center justify-center flex-col">
          <div className="gap-4 flex flex-col justify-center items-center">
            <img src="/public/target/Icon.svg" alt="" />
            <h3 className=" leading-9 text-[1.75rem] text-Neutral/D_Grey font-bold text-center">Membership Organisations</h3>
          </div>
          <p className="text-Neutral/Grey text-center leading-5">Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div className="px-8 py-6 gap-2 flex items-center justify-center flex-col">
          <div className="flex gap-4 flex-col justify-center items-center">
            <img src="public/target/Icon-1.svg" alt="" />
            <h3 className=" leading-9 text-[1.75rem] text-Neutral/D_Grey font-bold text-center">National Associations</h3>
          </div>
          <p className=" text-Neutral/Grey leading-5 text-center">Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div className="px-8 py-6 gap-2 flex items-center justify-center flex-col">
          <div className="flex gap-4 flex-col justify-center items-center">
            <img src="public/target/Icon-2.svg" alt="" />
            <h3  className=" w-[14.4375rem] leading-9 text-[1.75rem] text-Neutral/D_Grey font-bold text-center">Clubs And Groups</h3>
          </div>
          <p className=" text-Neutral/Grey leading-5 text-center">Our membership management software provides full automation of membership renewals and payments</p>
        </div>
      </div>
    </section>
  );
};

export default Target;
