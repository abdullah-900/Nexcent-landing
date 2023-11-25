
const Hero = () => {
  return (
  
      <section className="flex flex-col  md:gap-[6.5rem] xl:flex-row py-12 px-12 md:py-24 md:px-20  bg-Neutral/Silver">
   <div className="  md:whitespace-nowrap flex flex-col gap-8">
   <h1 className=" md:leading-[4.75rem] font-semibold text-[2.5rem]  md:text-[4rem] text-Neutral/D_Grey ">Lessons and insights</h1>
        <h1 className="text-Brand/Primary font-semibold text-[2.5rem] md:leading-[4.75rem] md:text-[4rem]">from 8 years</h1>
        <p className="text-Neutral/Grey leading-6">Where to grow your business as a photographer: site or social media?</p>
        <button className=" bg-Brand/Primary py-3.5 px-8 shadow-[0px_4px_4px__0pxrgba(0,0,0,0.25)] text-center font-medium leading-6 text-Neutral/White rounded self-start">Register</button>
   </div>
   <img className="w-[24.438rem] h-[25.438rem]" src="Illustration.svg"></img>
      </section>
     
  )
}

export default Hero