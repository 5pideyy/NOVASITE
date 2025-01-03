import React from "react";
import Discord from "../../images/icons/discord.png"; 
import Instagram from "../../images/icons/instagram.png";

function Footer() {
  return (
    <>
      <footer className="bg-[#1A1920] dark:bg-gray-900 text-white font-space">
        <div className="max-w-6xl px-4 py-6 mx-auto">
          <div className="flex flex-col items-center lg:flex-row lg:justify-between border-b border-gray-300 dark:border-gray-700 pb-4 mb-4">
            <div className="mb-4 lg:mb-0 lg:block">
              <span className="text-gray-400 dark:text-gray-400">
                Stay Connected with TEAM NOVA
              </span>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/nova_ctf/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-400"
              >
                <img
                  src={Instagram}
                  alt="Instagram"
                  className="h-6 w-6 hover:bg-blue-600 rounded-md"
                />
              </a>
              <a
                href="https://discord.gg/csBxCD6B"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600"
              >
                <img
                  src={Discord}
                  alt="Discord"
                  className="h-6 w-6 hover:bg-blue-600 rounded-md"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/team-n0va/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600"
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
          <div className="text-center text-gray-500 text-sm dark:text-gray-400">
            &copy; {new Date().getFullYear()} TEAM NOVA. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
