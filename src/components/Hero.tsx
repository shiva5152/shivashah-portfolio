"use client";
import { LinkPreview } from "@/components/ui/link-preview";
import Image from "next/image";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const focusDiv = document.querySelector(".shine");
    if (focusDiv instanceof HTMLElement) {
      focusDiv.setAttribute("tabindex", "-1");
      focusDiv.focus();

      const timeoutId = setTimeout(() => {
        focusDiv.blur();
      }, 1000);

      return () => clearTimeout(timeoutId); // Cleanup function
    }
  }, []);
  return (
    <div>
      <div className="block relative lg:flex max-w-5xl mx-auto mt-10 md:mt-20 px-8">
        <div>
          <h1 className="font-bold text-3xl md:text-5xl leading-tight text-zinc-50 max-w-3xl">
            Trust me, I&#39;m a{" "}
            <span className="text-cyan-500">software Developer.</span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-8 leading-loose tracking-wide">
            {`I&#39;m a skilled web developer with knowledge of HTML/CSS and
            JavaScript, and expertise in frameworks like React, Node.js,
            Express.js and Three.js. I&#39;m a quick learner and collaborate closely
            with clients to create efficient, scalable, and user-friendly
            solutions that solve real-world problems. Let&#39;s work together to
            bring your ideas to life!`}
          </p>
          <p className="text-zinc-600 text-sm mt-2">
            ~ ChatGPT
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path>
            </svg>
          </p>
          <div className="mt-8 text-zinc-400 text-sm md:text-base max-w-2xl leading-loose tracking-wide">
            Building{" "}
            <p
              data-state="closed"
              className="text-zinc-200 font-bold hover:text-cyan-500 transition duration-150 outline-none"
              // href="https://teachyst.com"
            >
              Teachyst
            </p>{" "}
            next-gen LMS ✨
          </div>
          <div className="mt-8 hidden sm:block">
            <p
              // target="_blank"
              className="flex w-fit items-center rounded-lg shadow-md px-6 py-2 text-sm font-medium text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              style={{ background: "#5865F2" }}
              // href="https://discord.gg/h9fhpVPXCV"
            >
              <svg
                className="h-6 w-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="800px"
                height="800px"
                viewBox="0 -28.5 256 256"
                version="1.1"
                preserveAspectRatio="xMidYMid"
              >
                <g>
                  <path
                    d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                    fill="#FFFFFF"
                    fillRule="nonzero"
                  ></path>
                </g>
              </svg>
              <span>Join Discord</span>
            </p>
          </div>
        </div>

        <div className="mt-4 lg:mt-0">
          <div className="shine">
            <Image
              className="rounded-[20px]"
              src="/profile.jpeg"
              alt="Hero"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-row justify-start md:justify-center space-x-2 mt-2">
            <LinkPreview
              url="https://res.cloudinary.com/dnfzwjyfx/image/upload/v1727302989/linkedIn-preview_ohruye.png"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
            >
              <span
                // href="https://www.linkedin.com/in/shiva5152/"
                className="text-zinc-500 text-sm relative"
                // target="__blank"
              >
                <span className="relative z-10 px-2 py-2 inline-block hover:text-cyan-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    width="1em"
                    className="h-5 w-5 hover:text-primary transition duration-150"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 256 256"
                  >
                    <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                  </svg>
                </span>
              </span>
            </LinkPreview>
            <LinkPreview
              url="https://leetcode.com/u/Shiva515253/"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
            >
              <span
                // href="https://leetcode.com/u/Shiva515253/"
                className="text-zinc-500 text-sm relative"
                // target="__blank"
              >
                <span className="relative z-10 px-2 py-2 inline-block hover:text-cyan-500">
                  {/* <img
                    src="/leetcode.svg"
                    alt="LeetCode"
                    height={24}
                    width={24}
                  /> */}
                  <svg
                    height="1em"
                    width="1em"
                    className="h-5 w-5 hover:text-primary transition duration-150"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <title>{"LeetCode"}</title>
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                  </svg>
                </span>
              </span>
            </LinkPreview>
            <LinkPreview
              url="https://github.com/shiva5152"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
            >
              <span
                // href="https://github.com/shiva5152"
                className="text-zinc-500 text-sm relative"
                // target="__blank"
              >
                <span className="relative z-10 px-2 py-2 inline-block hover:text-cyan-500">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    className="h-5 w-5 hover:text-primary transition duration-150"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                  </svg>
                </span>
              </span>
            </LinkPreview>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
