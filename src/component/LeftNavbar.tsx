import Image from "next/image";
import Link from "next/link";
const LeftNavbar = () => {
  return (
    <div className=" md:w-1/5  bg-[#F9F9F9] h-[800px] border-2 rounded-xl m-2">
      <div className="heading font-bold text-2xl p-3">Inbox</div>
      <hr />
      <div className="px-5">
        <div className="Feature_1 my-4 ">
          <div className="text-[#434769] font-semibold">AI GEN</div>
          <div className="List text-[#3C455A] ">
            <div className="hover:bg-[#CDCDCD] rounded-md  px-3 py-1 flex flex-row">
              <div className="mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <Link href="/page">DashBoard</Link>
            </div>
            <div className="hover:bg-[#CDCDCD] rounded-md  px-3 py-1  flex flex-row">
              <div className="mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </div>
              <Link href="/newnotes">New Notes</Link>
            </div>
            <div className="hover:bg-[#CDCDCD] rounded-md  px-3 py-1  flex flex-row">
              <div className="mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <Link href="/notes">All Notes</Link>
            </div>
            <div className="hover:bg-[#CDCDCD] rounded-md  px-3 py-1  flex flex-row">
              <div className="mr-3">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.024 3.783A1 1 0 0 1 6 3h12a1 1 0 0 1 .976.783L20.802 12h-4.244a1.99 1.99 0 0 0-1.824 1.205 2.978 2.978 0 0 1-5.468 0A1.991 1.991 0 0 0 7.442 12H3.198l1.826-8.217ZM3 14v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5h-4.43a4.978 4.978 0 0 1-9.14 0H3Zm5-7a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm0 2a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H8Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <Link href="/prompt">Prompt Box</Link>
            </div>
          </div>
        </div>
        <div className="Feature_2 my-4  ">
          <div className="text-[#434769] font-semibold">DEVELOPMENT</div>
          <div className="List text-[#3C455A]">
            <div className="hover:bg-[#CDCDCD] rounded-md  px-3 py-1">Code</div>
            <div className="hover:bg-[#CDCDCD] rounded-md  px-3 py-1">
              Releases
            </div>
          </div>
        </div>
        <div className="Feature_3 my-4 ">
          <div className="text-[#434769] font-semibold">PLANNING</div>
          <div className="List text-[#3C455A]">
            <div className="hover:bg-[#CDCDCD] rounded-md  px-3 py-1">
              Deployments
            </div>
            <div className="hover:bg-[#CDCDCD] rounded-md  px-3 py-1">
              GENERATIVE AI
            </div>
          </div>
        </div>
        <div className="setting my-4  ">
          <div className="text-[#434769] font-semibold">SETTING</div>
          <div className="List text-[#3C455A] ">
            <div className="hover:bg-[#CDCDCD] rounded-md  px-3 py-1">
              General
            </div>
            <div className="hover:bg-[#CDCDCD] rounded-md  px-3 py-1">
              Token
            </div>
            <div className="hover:bg-[#CDCDCD] rounded-md  px-3 py-1">
              Data controls
            </div>
            <div className="hover:bg-[#CDCDCD] rounded-md  px-3 py-1">
              History
            </div>
          </div>
        </div>
        <hr className="font-bold text-xl" />
        <div className="my-2">
          <div className="font-semibold text-[#434769]">Switch Account</div>
          <div className="font-semibold text-[#434769]">Log Out</div>
        </div>
      </div>
    </div>
  );
};

export default LeftNavbar;
