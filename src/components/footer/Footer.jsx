import React from "react";
import Discord from "../../images/icons/discord.png"; 
import Instagram from "../../images/icons/instagram.png";

function Footer() {
  return (
    <>
      <section className="flex flex-col lg:justify-end font-space text-white">
        <div className="w-full bg-[#1A1920] pt-11 dark:bg-gray-900">
          <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-0">
            <div className="flex items-center justify-center pb-3 border-b border-gray-300 dark:border-gray-700 lg:justify-between">
              <div className="hidden mr-12 lg:block">
                <span className="text-white dark:text-gray-400">
                  Get connected with us
                </span>
              </div>
              <div className="flex justify-center ">
                <a
                  target="_blank"
                  href="https://www.instagram.com/nova_ctf/"
                  className="mr-6 text-gray-600 dark:text-gray-400 hover:text-blue-400"
                >
                  <img
                    src={Instagram}
                    alt="Instagram"
                    className="h-6 w-6 hover:bg-blue-600 rounded-md"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://discord.gg/csBxCD6B"
                  className="mr-6 text-gray-600 dark:text-gray-400 hover:text-blue-600"
                >
                  <img
                    src={Discord}
                    alt="Discord"
                    className="h-6 w-6 hover:bg-blue-600 rounded-md"
                  />
                </a>

                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/team-n0va/"
                  className="mr-6 text-gray-600 dark:text-gray-400 hover:text-blue-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
