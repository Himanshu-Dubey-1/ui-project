"use client"
import React from "react";
import Tweet from "../../images/tweet.png";
import Linkedin from "../../images/linkedin.png";
import ball from "../../images/ball.png";
import Hand from "../../images/hand.png";
import Github from "../../images/Github.png";
import Facebook from "../../images/facebook.png";
import Kampkodelogo from "../../images/Kampkode-logo.png";
import Image from 'next/image'
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#5133A0] text-white sm:px-20 py-16">
      <div className="md:flex gap-16">
        <div className=" pl-5 sm:pl-0 sm:pb-0 pb-12">
          <div className="text-left justify-start pl-6">
            <div className="pb-9">
              <Image src={Kampkodelogo} alt="android" className="" />
            </div>
            <div>
              <h2 className=" leading-6 text-[#E9D7FE] max-w-96">
                Design amazing digital experiences that create more happy
                in the world
              </h2>
            </div>
          </div>
        </div>

        <div className="sm:flex gap-8 px-4 text-left">
          <div className="flex pb-2 gap-8 justify-between">
            <div className="flex-col pl-8">
              <h1 className="text-sm pb-4 font-semibold text-[#D6BBFB]">
                Product
              </h1>
              <div className="pb-3 leading-6 text-[#E9D7FE] font-semibold">
                <Link href="/#">Overview</Link>
              </div>
              <div className="pb-3 leading-6 text-[#E9D7FE] font-semibold">
                <Link href="/#">Features</Link>
              </div>
              <div className="pb-3 leading-6 text-[#E9D7FE] font-semibold flex gap-3">
                <Link href="/#">Solutions</Link>
                <button className=" border border-[#E9D7FE] bg-[#FFFFFF] bg-opacity-20 rounded-full font-normal px-2 text-sm text-white">New</button>
              </div>
              <div className="pb-3 leading-6 text-[#E9D7FE] font-semibold">
                <Link href="/#">Tutorials</Link>
              </div>
              <div className="pb-3 leading-6 text-[#E9D7FE] font-semibold">
                <Link href="/#">Pricing</Link>
              </div>
              <div className="pb-3 leading-6 text-[#E9D7FE] font-semibold">
                <Link href="/#">Releases</Link>
              </div>
            </div>
            <div className="flex-col sm:px-8 px-6 ">
              <h1 className="text-sm pb-4 font-semibold text-[#D6BBFB]">
                Company
              </h1>
              <div className="pb-3 leading-6 text-[#E9D7FE] font-semibold">
                <Link href="/#">About us</Link>
              </div>
              <div className="pb-3 leading-6 text-[#E9D7FE] font-semibold">
                <Link href="/#">Carrers</Link>
              </div>
              <div className="pb-3 leading-6 text-[#E9D7FE] font-semibold">
                <Link href="/#">Press</Link>
              </div>
              <div className="pb-3 leading-6 text-[#E9D7FE] font-semibold">
                <Link href="/#">News</Link>
              </div>
              <div className="pb-3 leading-6 text-[#E9D7FE] font-semibold">
                <Link href="/#">Media kit</Link>
              </div>
              <div className="pb-3 leading-6 text-[#E9D7FE] font-semibold">
                <Link href="/#">Contact</Link>
              </div>
            </div>
          </div>

          <div className="flex pb-2 justify-between gap-8 pt-6 sm:py-0 ">
            <div className="flex-col px-8 ">
              <h1 className="text-sm pb-4 font-semibold text-[#D6BBFB]">
                Resources
              </h1>
              <div className="pb-3 leading-6 text-[#E9D7FE] font-semibold">
                <Link href="/#">Blog</Link>
              </div>
              <div className="pb-3 leading-6 text-[#E9D7FE] font-semibold">
                <Link href="/#">Newsletter</Link>
              </div>
              <div className="pb-3 leading-6 text-[#E9D7FE] font-semibold">
                <Link href="/#">Events</Link>
              </div>
              <div className="pb-3 leading-6 text-[#E9D7FE] font-semibold">
                <Link href="/#">Help centre</Link>
              </div>
              <div className="pb-3 leading-6 text-[#E9D7FE] font-semibold">
                <Link href="/#">Tutorials</Link>
              </div>
              <div className="pb-3 leading-6 text-[#E9D7FE] font-semibold">
                <Link href="/#">Support</Link>
              </div>
            </div>

            <div className="flex-col sm:px-8 px-6 ">
              <h1 className="text-sm pb-4 font-semibold text-[#D6BBFB]">
                Social
              </h1>
              <div className="pb-3 leading-6 text-[#E9D7FE] font-semibold">
                <Link href="/#">Twitter</Link>
              </div>
              <div className="pb-3 leading-6 text-[#E9D7FE] font-semibold">
                <Link href="/#">LinkedIn</Link>
              </div>
              <div className="pb-3 leading-6 text-[#E9D7FE] font-semibold">
                <Link href="/#">Facebook</Link>
              </div>
              <div className="pb-3 leading-6 text-[#E9D7FE] font-semibold">
                <Link href="/#">GitHub</Link>
              </div>
              <div className="pb-3 leading-6 text-[#E9D7FE] font-semibold">
                <Link href="/#">AngelList</Link>
              </div>
              <div className="pb-3 leading-6 text-[#E9D7FE] font-semibold">
                <Link href="/#">Dribble</Link>
              </div>
            </div>
          </div>

          <div className="flex pb-2 justify-between pt-6 sm:py-0  ">
            <div className="flex-col px-8">
              <h1 className="text-sm pb-4 font-semibold text-[#D6BBFB]">
                legal
              </h1>
              <div className="pb-3 leading-6 text-[#E9D7FE] font-semibold">
                <Link href="/#">Terms</Link>
              </div>
              <div className="pb-3 leading-6 text-[#E9D7FE] font-semibold">
                <Link href="/#">Privacy</Link>
              </div>
              <div className="pb-3 leading-6 text-[#E9D7FE] font-semibold">
                <Link href="/#">Cookies</Link>
              </div>
              <div className="pb-3 leading-6 text-[#E9D7FE] font-semibold">
                <Link href="/#">Licenses</Link>
              </div>
              <div className="pb-3 leading-6 text-[#E9D7FE] font-semibold">
                <Link href="/#">Setting</Link>
              </div>
              <div className="pb-3 leading-6 text-[#E9D7FE] font-semibold">
                <Link href="/#">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6">
        <div className="pt-10 border-t mt-12">
          <div className="justify-between flex sm:flex-row flex-col-reverse text-center ">
            <div className="leading-6 text-[#D6BBFB]">
              © 2024 Kampkode. All rights reserved
            </div>

            <div className="justify-center">
              <div className="flex justify-center text-center sm:pb-0 pb-8">
                <Image src={Tweet} alt="Tweet" className="mx-3" />
                <Image src={Linkedin} alt="LinkedIn" className="mx-3" />
                <Image src={Facebook} alt="Facebook" className="mx-3" />
                <Image src={Github} alt="Github" className="mx-3" />
                <Image src={Hand} alt="Hand" className="mx-3" />
                <Image src={ball} alt="ball" className="mx-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
