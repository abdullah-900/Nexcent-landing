const footer = () => {
  return (
    <footer className="bg-Neutral/Black w-full px-10 lg:px-[10.3125rem] py-16 gap-10 md:gap-[7.8125rem] flex flex-col lg:flex-row text-Neutral/Silver">
      <div className="flex flex-col items-center  gap-10 w-full lg:w-[12.8125rem]">
        <img src="public\Footer\Big\Logo.svg" alt="" />
        <div className="flex  flex-col gap-2">
          <p className=" text-[.875rem] leading-5">Copyright © 2020 Nexcent ltd.</p>
          <p className=" text-[.875rem] leading-5">All rights reserved</p>
        </div>
        <div className="flex gap-4 justify-center">
          <img src="public\Footer\Big\Social Icons-3.svg" alt="" />
          <img src="public\Footer\Big\Social Icons-1.svg" alt="" />
          <img src="public\Footer\Big\Social Icons-7.svg" alt="" />
          <img src="public\Footer\Big\Social Icons-95.svg" alt="" />
        </div>
      </div>
      <div className="flex w-full flex-col md:flex-row gap-10 items-center justify-between ">
        <div className="flex flex-col items-start ">
            <h4 className="mb-6 text-Neutral/White text-[1.25rem] font-semibold leading-7 ">Company</h4>
            <div className="flex flex-col gap-3 text-[.875rem] leading-5">
             <a href="">About us</a>
             <a href="">Blog</a>
             <a href="">Contact us</a>
             <a href="">pricing</a>
             <a href="">Testimonials</a>
            </div>
        </div>
        <div className="flex flex-col items-start ">
            <h4 className="mb-6 text-Neutral/White text-[1.25rem] font-semibold leading-7">Company</h4>
            <div className="flex flex-col gap-3 text-[.875rem] leading-5">
             <a href="">About us</a>
             <a href="">Blog</a>
             <a href="">Contact us</a>
             <a href="">pricing</a>
             <a href="">Testimonials</a>
            </div>
        </div>
        <div className="flex flex-col items-center md:items-start text-[1.25rem] font-semibold leading-7 gap-6">
            <h4 className="text-Neutral/White text-[1.25rem] font-semibold leading-7">Stay up to date</h4>
            <div className="flex justify-center bg-Neutral/Grey rounded-lg w-[15.9375rem] h-10">
            <input placeholder="Your email address" className="bg-Neutral/Grey w-[14.0625rem] font-normal text-[.875rem] leading-5 text-[#D9DBE1]" type="text" />
            <img src="/Footer/Big/send.svg" alt="" />
            </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
