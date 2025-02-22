import data from "../../data/about.json"

const About = () => {
    return (
        <div className="my-[3.5%] w-[85%] py-[3.7%] flex flex-col justify-center items-center text-[25px] bg-white text-black mx-auto rounded-md shadow-lg shadow-gray-100/50">
            <div>
                This is about page, enter employid in url like "/about/1122"
            </div>

            <div className="flex flex-col items-center w-[60%] py-[3%]">
                <h2>
                    {data.companyInfo.name}
                </h2>
                <span className="text-center">{data.companyInfo.description}</span>
                <span className="mt-[3%]">{data.companyInfo.location}</span>
                <span>Established in  {data.companyInfo.established}</span>
                <div>
                    Contact details :
                    <span>{data.companyInfo.contact.email}</span>
                    <span>{data.companyInfo.contact.phone}</span>
                </div>
            </div>
        </div>
    )
}

export default About