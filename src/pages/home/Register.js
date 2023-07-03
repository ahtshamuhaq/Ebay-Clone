import React, { useEffect, useState } from "react";
import lg from "./../../pictures/ebaylg.png";
import { Link } from "react-router-dom";
import { Button } from "../../Components";
const Register = () => {
  const [isBusinessAccount, setIsBusinessAccount] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleText = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen2, setIsOpen2] = useState(false);
  const toggleHelp = () => {
    setIsOpen2(!isOpen2);
  };
  const [isOpen3, setIsOpen3] = useState(false);
  const toggleBusiness = () => {
    setIsOpen3(!isOpen3);
  };
  const handleBusinessAccountChange = () => {
    setIsBusinessAccount(true);
  };

  const handlePersonalAccountChange = () => {
    setIsBusinessAccount(false);
  };
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);

    const regex =
      /^(?=.*[A-Za-z])(?=.*\d|.*[!@#$%^&*()\-_=+[{\]};:<>|./?]).{8,}$/;
    setIsPasswordValid(regex.test(password));
  };
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [isForm2Filled, setIsForm2Filled] = useState(false);
  const handleInputChange = (event, inputName) => {
    const value = event.target.value;
    switch (inputName) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setIsFormFilled(firstName && lastName && email && password);
  }, [firstName, lastName, email, password]);
  useEffect(() => {
    setIsForm2Filled(firstName && email && password);
  }, [firstName, email, password]);
  return (
    <div>
      <div className="w-[95%] mt-4 mx-auto">
        <Link to={"/"}>
          <img src={lg} className="h-10 " alt="" />
        </Link>
      </div>
      <div className="flex justify-end mr-2">
        <p>
          Already a member?
          <Link to={"/pages/home/SignIn"}>
            <span className="text-blue-500 underline">Sign in</span>
          </Link>
        </p>
      </div>
      <p className="font-bold text-4xl text-center mt-6">Create an account</p>
      <div className="fixed right-0 hidden bg-[#d1cfcf] border-t border-t-blue-500 p-2 w-12 h-12 xl:flex justify-center">
        <i
          onClick={toggleHelp}
          class="fa fa-question-circle-o text-2xl text-blue-500"
        ></i>
      </div>
      {isOpen2 && (
        <div className="fixed top-20 right-16 w-[400px] h-[80vh] hidden xl:block border-t border-t-gray-300 z-20 bg-white rounded-xl shadow-xl">
          <div className=" border-b flex pb-4 mt-5 justify-center items-center  border-b-gray-600">
            <p className="font-bold text-2xl ml-24 ">Help</p>
            <i onClick={toggleHelp} class="material-icons ml-40">
              cancel
            </i>
          </div>
          <p className="font-semibold text-2xl ml-3 ">FAQs</p>
          <p
            onClick={toggleBusiness}
            className="flex mt-3 ml-3 cursor-pointer font-bold justify-between items-center "
          >
            Do I need a business account?{" "}
            <i class="material-icons text-blue-500 text-2xl mr-3">
              keyboard_arrow_down
            </i>
          </p>

          {isOpen3 && (
            <div>
              <p className="p-3 font-semibold">
                You should register for a business account if you'd like to
                carry out any of the following activities on eBay:
              </p>
              <ul className="list-disc ml-8">
                <li>List items that you've made or bought to resell</li>
                <li>Regularly sell a large number of goods</li>
                <li>Buy items for your business</li>
                <li>You are a nonprofit</li>
              </ul>
            </div>
          )}
          <hr className="mt-2" />

          <p className="font-bold text-2xl ml-6 mt-8">Need More Help?</p>
          <div className="w-[95%] mx-auto mt-8">
            <Button variant="blueSmall">Visit Help & Contact</Button>
          </div>
          <p className="font-bold mt-8 ml-4 text-xl">Let us know</p>
          <p className="flex items-center ml-6 text-blue-600 font-semibold mt-4">
            Feedback <i class="material-icons ml-6">arrow_forward</i>
          </p>
        </div>
      )}

      <div>
        <div className="border-b border-b-black pb-2">
          <div className="flex justify-center items-center mt-4">
            <div>
              <label className="mr-5">
                <input
                  type="radio"
                  name="accountType"
                  className="text-black mr-3"
                  value="personal"
                  checked={!isBusinessAccount}
                  onChange={handlePersonalAccountChange}
                />
                Personal Account
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="accountType"
                  className="text-black mr-3"
                  value="business"
                  checked={isBusinessAccount}
                  onChange={handleBusinessAccountChange}
                />
                Business Account
              </label>
            </div>
            <div className="hidden xl:block" onClick={toggleText}>
              <i className="fa fa-exclamation-circle ml-4"></i>
            </div>
            {isOpen && (
              <div className=" text-black hidden xl:block bg-white shadow-2xl p-5  absolute right-[230px]">
                <div className="flex justify-between items-start">
                  <p className="text-xs font-bold">
                    You should choose this option if:
                  </p>
                  <i onClick={toggleText} class="material-icons ml-20">
                    cancel
                  </i>
                </div>
                <ul className="list-disc ml-3">
                  <li>you are a business</li>
                  <li>you are a nonprofit</li>
                  <li>you regularly sell a large number of goods</li>
                </ul>
              </div>
            )}
          </div>
          <div className="">
            {isBusinessAccount ? (
              <div className="flex flex-col w-3/5 sm:w-1/3 mx-auto">
                <div className="relative mt-5 ">
                  <input
                    type="text"
                    id="floating_filled"
                    className="block rounded-xl font-bold border border-black px-2.5 pb-2.5 w-full pt-5 sm:w-[450px] sm:mr-4 mb-5 sm:mb-0 text-sm text-gray-900 bg-[#f7f7f7] dark:bg-[#f7f7f7] appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={firstName}
                    onChange={(e) => handleInputChange(e, "firstName")}
                  />
                  <label
                    htmlFor="floating_filled"
                    className="absolute text-sm  text-black dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Business Name
                  </label>
                </div>
                <div className="mt-5 mr-3">
                  <div className="relative ">
                    <input
                      type="email"
                      id="floating_filled"
                      className="block rounded-xl font-bold border border-black px-2.5 pb-2.5 w-full pt-5 sm:w-[450px] text-sm text-gray-900 bg-[#f7f7f7] dark:bg-[#f7f7f7] appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      value={email}
                      onChange={(e) => handleInputChange(e, "email")}
                    />
                    <label
                      htmlFor="floating_filled"
                      className="absolute text-sm  text-black dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                    >
                      Business Email
                    </label>
                  </div>
                </div>
                <div className="flex mt-5 items-center">
                  <div className="relative">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      id="floating_filled"
                      className="block rounded-xl font-bold border border-black px-2.5 pb-2.5 w-full pt-5 sm:w-[450px] text-sm text-gray-900 bg-[#f7f7f7] dark:bg-[#f7f7f7] appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 pr-10 peer"
                      placeholder=" "
                      value={password}
                      onChange={handlePasswordChange}
                      onFocus={handlePasswordFocus}
                      onBlur={handlePasswordBlur}
                    />
                    <label
                      htmlFor="floating_filled"
                      className="absolute text-sm  text-black dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                    >
                      Password
                    </label>
                  </div>
                  <span
                    className="transform -translate-y-1/2 cursor-pointer mt-5 -ml-8"
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? (
                      <i className="fa fa-eye-slash"></i>
                    ) : (
                      <i className="fa fa-eye"></i>
                    )}
                  </span>
                </div>

                {isPasswordFocused && !isPasswordValid && (
                  <p className="text-red-500 text-sm mt-2">
                    At least 1 letter, a number or symbol, at least 8
                    characters.
                  </p>
                )}
                <p className="mt-10">Business location</p>
                <select className="w-full  sm:w-[450px] rounded-xl">
                  <option value="AFG">Afghanistan</option>
                  <option value="ALA">Åland Islands</option>
                  <option value="ALB">Albania</option>
                  <option value="DZA">Algeria</option>
                  <option value="ASM">American Samoa</option>
                  <option value="AND">Andorra</option>
                  <option value="AGO">Angola</option>
                  <option value="AIA">Anguilla</option>
                  <option value="ATA">Antarctica</option>
                  <option value="ATG">Antigua and Barbuda</option>
                  <option value="ARG">Argentina</option>
                  <option value="ARM">Armenia</option>
                  <option value="ABW">Aruba</option>
                  <option value="AUS">Australia</option>
                  <option value="AUT">Austria</option>
                  <option value="AZE">Azerbaijan</option>
                  <option value="BHS">Bahamas</option>
                  <option value="BHR">Bahrain</option>
                  <option value="BGD">Bangladesh</option>
                  <option value="BRB">Barbados</option>
                  <option value="BLR">Belarus</option>
                  <option value="BEL">Belgium</option>
                  <option value="BLZ">Belize</option>
                  <option value="BEN">Benin</option>
                  <option value="BMU">Bermuda</option>
                  <option value="BTN">Bhutan</option>
                  <option value="BOL">Bolivia, Plurinational State of</option>
                  <option value="BES">Bonaire, Sint Eustatius and Saba</option>
                  <option value="BIH">Bosnia and Herzegovina</option>
                  <option value="BWA">Botswana</option>
                  <option value="BVT">Bouvet Island</option>
                  <option value="BRA">Brazil</option>
                  <option value="IOT">British Indian Ocean Territory</option>
                  <option value="BRN">Brunei Darussalam</option>
                  <option value="BGR">Bulgaria</option>
                  <option value="BFA">Burkina Faso</option>
                  <option value="BDI">Burundi</option>
                  <option value="KHM">Cambodia</option>
                  <option value="CMR">Cameroon</option>
                  <option value="CAN">Canada</option>
                  <option value="CPV">Cape Verde</option>
                  <option value="CYM">Cayman Islands</option>
                  <option value="CAF">Central African Republic</option>
                  <option value="TCD">Chad</option>
                  <option value="CHL">Chile</option>
                  <option value="CHN">China</option>
                  <option value="CXR">Christmas Island</option>
                  <option value="CCK">Cocos (Keeling) Islands</option>
                  <option value="COL">Colombia</option>
                  <option value="COM">Comoros</option>
                  <option value="COG">Congo</option>
                  <option value="COD">
                    Congo, the Democratic Republic of the
                  </option>
                  <option value="COK">Cook Islands</option>
                  <option value="CRI">Costa Rica</option>
                  <option value="CIV">Côte d'Ivoire</option>
                  <option value="HRV">Croatia</option>
                  <option value="CUB">Cuba</option>
                  <option value="CUW">Curaçao</option>
                  <option value="CYP">Cyprus</option>
                  <option value="CZE">Czech Republic</option>
                  <option value="DNK">Denmark</option>
                  <option value="DJI">Djibouti</option>
                  <option value="DMA">Dominica</option>
                  <option value="DOM">Dominican Republic</option>
                  <option value="ECU">Ecuador</option>
                  <option value="EGY">Egypt</option>
                  <option value="SLV">El Salvador</option>
                  <option value="GNQ">Equatorial Guinea</option>
                  <option value="ERI">Eritrea</option>
                  <option value="EST">Estonia</option>
                  <option value="ETH">Ethiopia</option>
                  <option value="FLK">Falkland Islands (Malvinas)</option>
                  <option value="FRO">Faroe Islands</option>
                  <option value="FJI">Fiji</option>
                  <option value="FIN">Finland</option>
                  <option value="FRA">France</option>
                  <option value="GUF">French Guiana</option>
                  <option value="PYF">French Polynesia</option>
                  <option value="ATF">French Southern Territories</option>
                  <option value="GAB">Gabon</option>
                  <option value="GMB">Gambia</option>
                  <option value="GEO">Georgia</option>
                  <option value="DEU">Germany</option>
                  <option value="GHA">Ghana</option>
                  <option value="GIB">Gibraltar</option>
                  <option value="GRC">Greece</option>
                  <option value="GRL">Greenland</option>
                  <option value="GRD">Grenada</option>
                  <option value="GLP">Guadeloupe</option>
                  <option value="GUM">Guam</option>
                  <option value="GTM">Guatemala</option>
                  <option value="GGY">Guernsey</option>
                  <option value="GIN">Guinea</option>
                  <option value="GNB">Guinea-Bissau</option>
                  <option value="GUY">Guyana</option>
                  <option value="HTI">Haiti</option>
                  <option value="HMD">Heard Island and McDonald Islands</option>
                  <option value="VAT">Holy See (Vatican City State)</option>
                  <option value="HND">Honduras</option>
                  <option value="HKG">Hong Kong</option>
                  <option value="HUN">Hungary</option>
                  <option value="ISL">Iceland</option>
                  <option value="IND">India</option>
                  <option value="IDN">Indonesia</option>
                  <option value="IRN">Iran, Islamic Republic of</option>
                  <option value="IRQ">Iraq</option>
                  <option value="IRL">Ireland</option>
                  <option value="IMN">Isle of Man</option>
                  <option value="ISR">Israel</option>
                  <option value="ITA">Italy</option>
                  <option value="JAM">Jamaica</option>
                  <option value="JPN">Japan</option>
                  <option value="JEY">Jersey</option>
                  <option value="JOR">Jordan</option>
                  <option value="KAZ">Kazakhstan</option>
                  <option value="KEN">Kenya</option>
                  <option value="KIR">Kiribati</option>
                  <option value="PRK">
                    Korea, Democratic People's Republic of
                  </option>
                  <option value="KOR">Korea, Republic of</option>
                  <option value="KWT">Kuwait</option>
                  <option value="KGZ">Kyrgyzstan</option>
                  <option value="LAO">Lao People's Democratic Republic</option>
                  <option value="LVA">Latvia</option>
                  <option value="LBN">Lebanon</option>
                  <option value="LSO">Lesotho</option>
                  <option value="LBR">Liberia</option>
                  <option value="LBY">Libya</option>
                  <option value="LIE">Liechtenstein</option>
                  <option value="LTU">Lithuania</option>
                  <option value="LUX">Luxembourg</option>
                  <option value="MAC">Macao</option>
                  <option value="MKD">
                    Macedonia, the former Yugoslav Republic of
                  </option>
                  <option value="MDG">Madagascar</option>
                  <option value="MWI">Malawi</option>
                  <option value="MYS">Malaysia</option>
                  <option value="MDV">Maldives</option>
                  <option value="MLI">Mali</option>
                  <option value="MLT">Malta</option>
                  <option value="MHL">Marshall Islands</option>
                  <option value="MTQ">Martinique</option>
                  <option value="MRT">Mauritania</option>
                  <option value="MUS">Mauritius</option>
                  <option value="MYT">Mayotte</option>
                  <option value="MEX">Mexico</option>
                  <option value="FSM">Micronesia, Federated States of</option>
                  <option value="MDA">Moldova, Republic of</option>
                  <option value="MCO">Monaco</option>
                  <option value="MNG">Mongolia</option>
                  <option value="MNE">Montenegro</option>
                  <option value="MSR">Montserrat</option>
                  <option value="MAR">Morocco</option>
                  <option value="MOZ">Mozambique</option>
                  <option value="MMR">Myanmar</option>
                  <option value="NAM">Namibia</option>
                  <option value="NRU">Nauru</option>
                  <option value="NPL">Nepal</option>
                  <option value="NLD">Netherlands</option>
                  <option value="NCL">New Caledonia</option>
                  <option value="NZL">New Zealand</option>
                  <option value="NIC">Nicaragua</option>
                  <option value="NER">Niger</option>
                  <option value="NGA">Nigeria</option>
                  <option value="NIU">Niue</option>
                  <option value="NFK">Norfolk Island</option>
                  <option value="MNP">Northern Mariana Islands</option>
                  <option value="NOR">Norway</option>
                  <option value="OMN">Oman</option>
                  <option value="PAK">Pakistan</option>
                  <option value="PLW">Palau</option>
                  <option value="PSE">Palestinian Territory, Occupied</option>
                  <option value="PAN">Panama</option>
                  <option value="PNG">Papua New Guinea</option>
                  <option value="PRY">Paraguay</option>
                  <option value="PER">Peru</option>
                  <option value="PHL">Philippines</option>
                  <option value="PCN">Pitcairn</option>
                  <option value="POL">Poland</option>
                  <option value="PRT">Portugal</option>
                  <option value="PRI">Puerto Rico</option>
                  <option value="QAT">Qatar</option>
                  <option value="REU">Réunion</option>
                  <option value="ROU">Romania</option>
                  <option value="RUS">Russian Federation</option>
                  <option value="RWA">Rwanda</option>
                  <option value="BLM">Saint Barthélemy</option>
                  <option value="SHN">
                    Saint Helena, Ascension and Tristan da Cunha
                  </option>
                  <option value="KNA">Saint Kitts and Nevis</option>
                  <option value="LCA">Saint Lucia</option>
                  <option value="MAF">Saint Martin (French part)</option>
                  <option value="SPM">Saint Pierre and Miquelon</option>
                  <option value="VCT">Saint Vincent and the Grenadines</option>
                  <option value="WSM">Samoa</option>
                  <option value="SMR">San Marino</option>
                  <option value="STP">Sao Tome and Principe</option>
                  <option value="SAU">Saudi Arabia</option>
                  <option value="SEN">Senegal</option>
                  <option value="SRB">Serbia</option>
                  <option value="SYC">Seychelles</option>
                  <option value="SLE">Sierra Leone</option>
                  <option value="SGP">Singapore</option>
                  <option value="SXM">Sint Maarten (Dutch part)</option>
                  <option value="SVK">Slovakia</option>
                  <option value="SVN">Slovenia</option>
                  <option value="SLB">Solomon Islands</option>
                  <option value="SOM">Somalia</option>
                  <option value="ZAF">South Africa</option>
                  <option value="SGS">
                    South Georgia and the South Sandwich Islands
                  </option>
                  <option value="SSD">South Sudan</option>
                  <option value="ESP">Spain</option>
                  <option value="LKA">Sri Lanka</option>
                  <option value="SDN">Sudan</option>
                  <option value="SUR">Suriname</option>
                  <option value="SJM">Svalbard and Jan Mayen</option>
                  <option value="SWZ">Swaziland</option>
                  <option value="SWE">Sweden</option>
                  <option value="CHE">Switzerland</option>
                  <option value="SYR">Syrian Arab Republic</option>
                  <option value="TWN">Taiwan, Province of China</option>
                  <option value="TJK">Tajikistan</option>
                  <option value="TZA">Tanzania, United Republic of</option>
                  <option value="THA">Thailand</option>
                  <option value="TLS">Timor-Leste</option>
                  <option value="TGO">Togo</option>
                  <option value="TKL">Tokelau</option>
                  <option value="TON">Tonga</option>
                  <option value="TTO">Trinidad and Tobago</option>
                  <option value="TUN">Tunisia</option>
                  <option value="TUR">Turkey</option>
                  <option value="TKM">Turkmenistan</option>
                  <option value="TCA">Turks and Caicos Islands</option>
                  <option value="TUV">Tuvalu</option>
                  <option value="UGA">Uganda</option>
                  <option value="UKR">Ukraine</option>
                  <option value="ARE">United Arab Emirates</option>
                  <option value="GBR">United Kingdom</option>
                  <option value="USA">United States</option>
                  <option value="UMI">
                    United States Minor Outlying Islands
                  </option>
                  <option value="URY">Uruguay</option>
                  <option value="UZB">Uzbekistan</option>
                  <option value="VUT">Vanuatu</option>
                  <option value="VEN">Venezuela, Bolivarian Republic of</option>
                  <option value="VNM">Viet Nam</option>
                  <option value="VGB">Virgin Islands, British</option>
                  <option value="VIR">Virgin Islands, U.S.</option>
                  <option value="WLF">Wallis and Futuna</option>
                  <option value="ESH">Western Sahara</option>
                  <option value="YEM">Yemen</option>
                  <option value="ZMB">Zambia</option>
                  <option value="ZWE">Zimbabwe</option>
                </select>
                <p className="text-gray-500 text-xs break-words">
                  If you don't have a legal business, enter country of your
                  residence.
                </p>
                <div className="flex items-center mt-4">
                  <input type="checkbox" />{" "}
                  <p className="ml-3 ">
                    I <span className="font-bold">only</span> want to buy on
                    eBay. I don't want to sell.{" "}
                  </p>
                </div>
                <p className="text-gray-500 mt-4 text-sm ">
                  By <span className="font-semibold"> Creating an account</span>
                  , you agree to our{" "}
                  <span className="text-blue-500 underline">
                    User Agreement
                  </span>{" "}
                  and acknowledge reading our{" "}
                  <span className="text-blue-500 underline">
                    User Privacy Notice
                  </span>{" "}
                  .
                </p>
                <div className="w-[90%] mt-5 mb-4 ">
                  <Button variant={isForm2Filled ? "darkCyan" : "lightGray"}>
                    Create Account
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex w-3/5 mx-auto justify-center sm:justify-between mt-5 flex-col md:flex-row ">
                  <div className="">
                    <div className="flex-col w-full sm:flex sm:flex-row sm:w-4/5 justify-between">
                      <div className="relative ">
                        <input
                          type="text"
                          id="floating_filled"
                          className="block rounded-xl font-bold border border-black px-2.5 pb-2.5 w-[220px] pt-5 sm:w-[150px] sm:mr-4 mb-5 sm:mb-0 text-sm text-gray-900 bg-[#f7f7f7] dark:bg-[#f7f7f7] appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          value={firstName}
                          onChange={(e) => handleInputChange(e, "firstName")}
                        />
                        <label
                          htmlFor="floating_filled"
                          className="absolute text-sm  text-black dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                        >
                          First Name
                        </label>
                      </div>
                      <div className="relative ">
                        <input
                          type="text"
                          id="floating_filled"
                          className="block rounded-xl font-bold border border-black px-2.5 pb-2.5 w-[220px] pt-5 sm:w-[150px] text-sm text-gray-900 bg-[#f7f7f7] dark:bg-[#f7f7f7] appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          value={lastName}
                          onChange={(e) => handleInputChange(e, "lastName")}
                        />
                        <label
                          htmlFor="floating_filled"
                          className="absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                        >
                          Last Name
                        </label>
                      </div>
                    </div>
                    <div className="mt-5">
                      <div className="relative ">
                        <input
                          type="text"
                          id="floating_filled"
                          className="block rounded-xl font-bold border border-black px-2.5 pb-2.5 w-[220px] pt-5 sm:w-[350px] text-sm text-gray-900 bg-[#f7f7f7] dark:bg-[#f7f7f7] appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          value={email}
                          onChange={(e) => handleInputChange(e, "email")}
                        />
                        <label
                          htmlFor="floating_filled"
                          className="absolute text-sm  text-black dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                        >
                          Email
                        </label>
                      </div>
                    </div>
                    <div className="flex mt-5 items-center">
                      <div className="relative">
                        <input
                          type={passwordVisible ? "text" : "password"}
                          id="floating_filled"
                          className="block rounded-xl font-bold border border-black px-2.5 pb-2.5 w-[220px] pt-5 sm:w-[350px] text-sm text-gray-900 bg-[#f7f7f7] dark:bg-[#f7f7f7] appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 pr-10 peer"
                          placeholder=" "
                          value={password}
                          onChange={handlePasswordChange}
                          onFocus={handlePasswordFocus}
                          onBlur={handlePasswordBlur}
                        />
                        <label
                          htmlFor="floating_filled"
                          className="absolute text-sm  text-black dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                        >
                          Password
                        </label>
                      </div>
                      <span
                        className="transform -translate-y-1/2 cursor-pointer mt-5 -ml-8"
                        onClick={togglePasswordVisibility}
                      >
                        {passwordVisible ? (
                          <i className="fa fa-eye-slash"></i>
                        ) : (
                          <i className="fa fa-eye"></i>
                        )}
                      </span>
                    </div>

                    {isPasswordFocused && !isPasswordValid && (
                      <p className="text-red-500 text-sm mt-2">
                        At least 1 letter, a number or symbol, at least 8
                        characters.
                      </p>
                    )}
                    <p className="text-gray-500 mt-4 text-sm ">
                      By{" "}
                      <span className="font-semibold">
                        {" "}
                        Creating an account
                      </span>
                      , you agree to our{" "}
                      <span className="text-blue-500 underline">
                        User <br /> Agreement
                      </span>{" "}
                      and acknowledge reading our{" "}
                      <span className="text-blue-500 underline">
                        User <br /> Privacy Notice
                      </span>{" "}
                      .
                    </p>
                    <div className="w-full mt-4 sm:w-4/5 ">
                      <Button variant={isFormFilled ? "darkCyan" : "lightGray"}>
                        Create Account
                      </Button>
                    </div>
                  </div>
                  <div className="hidden md:flex  md:flex-col items-center">
                    <div className="border-l border-l-slate-700 h-36 "></div>
                    <div>Or</div>
                    <div className="border-l border-l-slate-700 h-36"></div>
                  </div>
                  <div className="flex justify-center items-start mt-5">
                    <div className="  ">
                      <div className="w-full  sm:w-[350px] mt-5 ">
                        <Button variant="darkCyans">
                          {" "}
                          <i class="fa fa-facebook-official sm:mr-16 mr-2 text-2xl"></i>
                          Continue With facebook
                        </Button>
                      </div>
                      <div className="w-full  sm:w-[350px]  mt-5">
                        <Button variant="transBlack">
                          {" "}
                          <i class="fa fa-google sm:mr-16 mr-2 text-2xl "></i>
                          Continue With Google
                        </Button>
                      </div>
                      <div className="w-full  sm:w-[350px] mt-5 ">
                        <Button variant="transBlack">
                          <i class="fa fa-apple sm:mr-20 mr-2 text-2xl"></i>
                          Continue With Apple
                        </Button>
                      </div>
                    </div>
                  </div>
                  <hr className="mt-4" />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="  mx-auto  p-2">
          <p className="mb-24 text-xs mt-6 text-center   w-full">
            Copyright © 1995-2023 eBay Inc. All Rights Reserved.
            <span className="underline ml-1 text-sm">Accessibility</span>,
            <span className="underline ml-1 text-sm">Privacy</span>,
            <span className="underline ml-1 text-sm">Cookies</span>,
            <Link to={"/pages/home/PrivacyChoices"}>
              <span className="underline ml-1 text-sm">
                Your Privacy Choices
              </span>
              ,
            </Link>
            <span className="underline ml-1 text-sm">
              Payments Terms of Use
            </span>
            ,<span className="underline ml-1 text-sm">User Agreement</span> and{" "}
            <span className="underline ml-1 text-sm">AdChoice</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
