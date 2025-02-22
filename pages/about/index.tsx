import data from "../../data/about.json"

// Type definition for companyInfo for better clarity and type safety
interface CompanyInfo {
    name: string;
    description: string;
    location: string;
    established: number;
    contact: {
        email: string;
        phone: string;
    };
}

const About = () => {
    const companyInfo: CompanyInfo = data.companyInfo;

    return (
        <div className="my-[3.5%] w-[85%] py-[3.7%] flex flex-col justify-center items-center text-[25px] bg-white text-black mx-auto rounded-md shadow-lg shadow-gray-100/50">
            <div className="text-center">
                This is the about page. To view details about a specific employee, enter their Employee ID in the URL like <strong>/about/1122</strong>.
            </div>

            <div className="flex flex-col items-center w-[60%] py-[3%]">
                <h2 className="text-center">{companyInfo.name}</h2>
                <p className="text-center">{companyInfo.description}</p>
                <p className="mt-[3%]">{companyInfo.location}</p>
                <p>Established in {companyInfo.established}</p>
                <div className="flex flex-col items-center mt-[2%]">
                    <span>Contact details</span>
                    <div>
                        <span>Email: {companyInfo.contact.email}</span>
                    </div>
                    <div>
                        <span>Phone: {companyInfo.contact.phone}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
