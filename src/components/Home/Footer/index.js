import React from "react";

function Footer() {
  return (
    <div className="w-full bg-[#101010] flex justify-center">
      <div className="max-w-[1140px] w-full">
        <div className="flex h-[296px] items-center">
          <div className="flex w-full">
            <div className="basis-1/4">
              <h3 className="text-[#ec7532] text-[20px]">GET IN TOUCH</h3>
              <ul className="mt-4 text-sm flex flex-col gap-1">
                <li className="text-[#fff] hover:text-[#fbbd61] cursor-pointer transition-all">
                  FAQs
                </li>
                <li className="text-[#fff] hover:text-[#fbbd61] cursor-pointer transition-all">
                  Give us feedback
                </li>
                <li className="text-[#fff] hover:text-[#fbbd61] cursor-pointer transition-all">
                  Contact us
                </li>
              </ul>
            </div>
            <div className="basis-1/4">
              <h3 className="text-[#ec7532] text-[20px]">ABOUT MOVIE STAR</h3>
              <ul className="mt-4 text-sm flex flex-col gap-1">
                <li className="text-[#fff] hover:text-[#fbbd61] cursor-pointer transition-all">
                  About us
                </li>
                <li className="text-[#fff] hover:text-[#fbbd61] cursor-pointer transition-all">
                  Find us
                </li>
                <li className="text-[#fff] hover:text-[#fbbd61] cursor-pointer transition-all">
                  Schedule
                </li>
                <li className="text-[#fff] hover:text-[#fbbd61] cursor-pointer transition-all">
                  News
                </li>
              </ul>
            </div>
            <div className="basis-1/4">
              <h3 className="text-[#ec7532] text-[20px]">LEGAL STUFF</h3>
              <ul className="mt-4 text-sm flex flex-col gap-1">
                <li className="text-[#fff] hover:text-[#fbbd61] cursor-pointer transition-all">
                  Terms & Conditions
                </li>
                <li className="text-[#fff] hover:text-[#fbbd61] cursor-pointer transition-all">
                  Privacy policy
                </li>
                <li className="text-[#fff] hover:text-[#fbbd61] cursor-pointer transition-all">
                  Cookie policy
                </li>
              </ul>
            </div>
            <div className="basis-1/4">
              <h3 className="text-[#ec7532] text-[20px]">CONNECT WITH US</h3>
              <ul className="mt-4 text-sm flex flex-col gap-1">
                <li className="text-[#fff] hover:text-[#fbbd61] cursor-pointer transition-all">
                  Facebook
                </li>
                <li className="text-[#fff] hover:text-[#fbbd61] cursor-pointer transition-all">
                  Twitter
                </li>
                <li className="text-[#fff] hover:text-[#fbbd61] cursor-pointer transition-all">
                  Google +
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-[#fff] mt-[30px] border-t-[1px] py-[10px] border-gray-500">
          2020 © Movie Cyber / Cybersoft
        </div>
      </div>
    </div>
  );
}

export default Footer;
