const Achievements = () => {
  return (
    <section className="bg-Neutral/Silver px-10 gap-10 lg:px-36 py-16 flex flex-col md:flex-row  items-center justify-around">
        <div className="">
        <h2 className="text-Neutral/D_Grey font-semibold leading-[2.75rem] text-[2.25rem]">Helping a local </h2>
        <h2 className="mb-2 text-Brand/Primary font-semibold leading-[2.75rem] text-[2.25rem]">business reinvent itself</h2>
        <p className="text-Text/Gray900 leading-6">We reached here with our hard work and dedication</p>
        </div>
      <div className="flex  flex-col gap-10">
        <div className="flex flex-col lg:flex-row items-center gap-[1.875rem]">
        <div className="flex gap-4">
            <img src="/public/achieve/Icon.svg" alt="" />
          <div className="flex flex-col">
            <h3 className="text-[1.75rem] text-Neutral/D_Grey font-bold leading-9">2,245,341</h3>
            <p className="text-Neutral/Grey leading-6">Members</p>
          </div>
        </div>
        <div className="flex gap-4">
            <img src="/public/achieve/Icon-1.svg" alt="" />
          <div className="flex flex-col">
          <h3 className="text-[1.75rem] text-Neutral/D_Grey font-bold leading-9">46,328</h3>
            <p className="text-Neutral/Grey leading-6">Clubs</p>
          </div>
        </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-[1.875rem]">
        <div className="flex gap-4">
            <img src="/public/achieve/Icon-2.svg" alt="" />
          <div className="flex flex-col">
          <h3 className="text-[1.75rem] text-Neutral/D_Grey font-bold leading-9">828,867</h3>
            <p className="text-Neutral/Grey leading-6">Event Bookings</p>
          </div>
        </div>
        <div className="flex gap-4">
            <img src="/public/achieve/Icon-3.svg" alt="" />
          <div className="flex flex-col">
          <h3 className="text-[1.75rem] text-Neutral/D_Grey font-bold leading-9">1,926,436</h3>
            <p className="text-Neutral/Grey leading-6">Payments</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
