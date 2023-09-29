import logo from "../assets/logo.png"; 

function Intro () {
    return (
        <div className="bg-[#4E20AF] flex flex-row py-24">
            <div className="text-white basis-1/2 pl-36 py-12">
                <h1 className="font-JosefinSans font-semibold text-[60px]">Hello, I'm Ashwin</h1>
                <p className="font-OpenSans font-semibold text-[30px]">Full Stack Developer</p>
                <p className="font-OpenSans font-normal text-[17px]">Passioante about creating<br /> websites that look great and<br /> work smoothly.</p>
            </div>
            <div className="basis-1/2">
                <img src={logo} alt="profile photo" className="mx-auto w-[15rem] md:w-[19.5rem]" />
            </div>
        </div>
    )
}

export default Intro;