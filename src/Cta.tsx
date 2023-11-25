interface Cta {
  header: string;
  description: string;
  img:string;
}

const Cta:React.FC<Cta> = ({header,description,img}) => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-10 md:px-36">
        <img src={img} alt="" />
        <div className="flex items-start flex-col gap-8">
           <div className="flex flex-col gap-4">
           <h2 className="text-Neutral/D_Grey font-semibold text-[2.25rem] leading-[2.75rem]">{header}</h2>
            <p className="text-Neutral/Grey text-[.875rem] leading-5">{description}</p>
           </div>
            <button className="py-[0.875rem] px-8 bg-Brand/Primary rounded text-Neutral/White">Learn More</button>
        </div>
    </section>
)
}

export default Cta