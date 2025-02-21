import data from "../../data/about.json"
interface Employee {
    id: number,
    name: string,
    position: string,
    department: string,
    hireDate: string,
    bio: string
}

interface EmployeeProp {
    employee: Employee | null
}
export default function EmployeeDetails({ employee }: EmployeeProp) {
    if (!employee) {
        return <div className=" min-h-[19em] flex justify-center items-center text-[30px] font-serif">
            Employee not found
        </div>
    }
    return (
        <div className='bg-white text-black w-[60%] mx-auto my-[5%] flex flex-col items-center p-8 py-20 pb-16 rounded-md h-[60%] shadow-xl shadow-gray-600'>
            <h1 className="text-[50px] font-bold">{employee?.name}</h1>
            <p className="text-[25px] font-extralight">{employee?.position}</p>
            <p className="text-[20px] font-extralight text-center mt-[3%] text-black/45">{employee?.bio}</p>
            <p className="mt-[5%]">{employee?.department}</p>
            <p>{employee?.hireDate}</p>
        </div>
    )

}

export function getServerSideProps({ params }: any) {
    const { empId } = params
    const id = Array.isArray(empId) ? Number(empId[0]) : Number(empId)
    const employee = data.employees.find(emp => emp.id === id) || null
    return {
        props: {
            employee
        }
    }
}