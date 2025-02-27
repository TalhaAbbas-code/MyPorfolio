import { Info, socialLinks} from "../User";

const Footer=()=>{
    const socialIcons=socialLinks.map((socialLink, index)=>{
        return <a   key={index} href={`${socialLink.link}`} target="_blank"  className="font-mono text-lg  hover:text-primaryColor hover:scale-105 transition transform duration-300 ease-in-out">
        <socialLink.icon stroke={1.5}  size={25} />
    </a>
    })
    return (
      <div className="mt-20 mb-10 font-mono flex flex-col gap-2 justify-center items-center">
        <div className="text-4xl md-mx:text-2xl text-primaryColor font-semibold">
          {Info.name}
        </div>
        <div className="md-mx:flex flex text-textColor gap-8 sm-mx:gap-6">
          {socialIcons}
        </div>
        <div className=" text-2xl md-mx:text-xl text-center text-textColor items-center    ">
          <div className="flex">
            <a
              href="mailto: talhaabbas058@gmail.com"
              className="font-mono  tracking-wide hover:text-primaryColor hover:-translate-x-1 transition transform duration-300 ease-in-out"
            >
              talhaabbas058@gmail.com
            </a>
          </div>
        </div>
        <div className="text-textColor text-xl md-mx:text-lg sm-mx:text-base xs-mx:text-sm xs-mx:flex flex-col items-center">
          Copyright &copy; {new Date().getFullYear()} {Info.name}{" "}
          <span className="xs-mx:hidden">|</span>{" "}
          <span>All Rights Reserved</span>
        </div>
      </div>
    );
}
export default Footer;