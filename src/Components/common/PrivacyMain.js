import React, { useState } from "react";

const PrivacyMain = () => {
  const [toggle, setToggle] = useState(false);
  const toggleButton = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <div className="break-words">
        <h1 className="font-bold text-3xl">Your Privacy Choices</h1>
        <h1 className="font-bold text-2xl mt-4">State Opt-out Rights</h1>
        <p className="font-semibold text-xl mt-4">
          Residents of certain US states, including California and Virginia,
          have the right to opt out of having their personal information <br />{" "}
          used or sold for certain purposes. Rights may vary by state, but below
          we offer a unified option to exercise those rights.
        </p>
        <p className="font-semibold text-xl mt-4">
          Your rights include opting out of the “sale” of data and use or
          sharing of your personal data with third parties for cross-context{" "}
          <br />
          personalized advertising. Cross-context personalized advertising means
          ads are targeted based on personal data gathered
          <br /> from activity over time and across non-affiliated properties.
          Opting out does not mean you will no longer see advertisements
          <br /> from eBay, or that your eBay experience will not be
          personalized based on your eBay activity. But the eBay ads you see
          will no <br />
          longer be tailored to you based on the combination of your eBay
          activity with your activity on non-affiliated websites,
          <br /> applications, and online services.
        </p>
        <div className="bg-[#f6f6f6] p-3 flex justify-between">
          <p className="font-bold text-xl mt-4">
            To exercise the opt-out rights described above, switch the toggle to
            ‘Out’*
          </p>
          <div className="flex justify-center items-center">
            <span class="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              In
            </span>
            <label class="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                onClick={() => toggleButton()}
                class="sr-only peer"
              />
              <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
        <p className="font-semibold text-sm mt-4">
          For more information about the personal information we collect and our
          sharing practices, please visit our{" "}
          <span className="text-[#588cf7]">User Privacy Notice.</span> Residents
          of states with <br /> specific privacy laws can learn more about their
          privacy rights under their states’ laws and ways to submit other
          privacy requests by visiting our <br />{" "}
          <span className="text-[#588cf7]">State Privacy Disclosures</span>{" "}
          page.
        </p>
        <p className="font-semibold text-sm mt-4 italic">
          * Switching the toggle to ‘out’ will opt you out of both the sale of
          your personal data and use of your personal data for targeted
          advertising as defined by applicable law and as explained above. For
          your opt-out choice to be associated with your eBay account, you’ll
          need to log in to your account before making your choice. If you are
          not logged in, the opt-out choice will only apply to your use of eBay
          through the current browser you’re using and only so long as that
          browser’s cookies are not erased.
        </p>
      </div>
    </div>
  );
};

export default PrivacyMain;
