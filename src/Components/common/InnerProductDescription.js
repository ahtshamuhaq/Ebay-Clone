import React, { useState } from "react";

const InnerProductDescription = () => {
  const [activeTab, setActiveTab] = useState("About this item");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  const itemNumber = 225585996570;
  const item = {
    title: "Item specifics",
    condition: `New With box`,
    theme: "Moon",
    customised: "No",
    brand: "adidas",
    ukShoeSize: 5.5,
    department: "Men",
    type: "Trainer",
    releaseYear: 2017,
    model: "adidas 500",
    style: "Sneaker",
    mpn: "DB2966",
    upperMaterial: "Mesh",
    colour: "Yellow",
    productLine: "adidas Yeezy",
  };
  const data = [
    {
      title: "About this product",
      obj1: {
        brand: "adidas",
        mpn: "DB2966",
        model: "adidas Yeezy 500",
        eBayProductId: "21050516568",
      },
      obj2: {
        department: "Men",
        colour: "Yellow",
        releaseYear: 2017,
        style: "Sneaker",
        ukShoeSize: 5.5,
        type: "Trainer",
        upperMaterial: "Mesh",
        productLine: "adidas Yeezy",
      },
      obj3: {
        manufacturer: "Super Moon ",
        collaboration: "Kanye West",
        releaseDate: "20171206",
      },
    },
  ];
  return (
    <div className="px-4">
      <div className="flex">
        <p
          onClick={() => handleTabClick("About this item")}
          className={`font-bold mr-4 hover:cursor-pointer ${
            activeTab === "About this item"
              ? "text-[#0d5dbe]"
              : "text-gray-500 "
          }`}
        >
          About this item
        </p>
        <p
          onClick={() => handleTabClick("Shipping, returns & payments")}
          className={`font-bold hover:cursor-pointer ${
            activeTab === "Shipping, returns & payments"
              ? "text-[#0d5dbe]"
              : "text-gray-500  "
          }`}
        >
          Shipping, returns & payments
        </p>
      </div>
      <div className="flex justify-between mt-5">
        <p>Seller assumes all responsibility for this listing.</p>
        <p className="text-gray-500">
          eBay item number:{" "}
          <span className="text-black font-bold">{itemNumber}</span>
        </p>
      </div>

      <div className="mt-5">
        {activeTab === "About this item" && (
          <div className="mt-12">
            <div>
              <h1 className="font-semibold mt-14 text-2xl">{item.title}</h1>
              <div className="flex flex-wrap  ">
                <div className="">
                  <div className="flex justify-between ">
                    <p className="text-gray-500   w-1/3  md:w-[183px] h-20 mt-12">
                      Condition
                    </p>
                    <p className="w-[50%]  md:w-[450px] break-words font-semibold h-20 mt-12">
                      {item.condition}
                    </p>
                  </div>
                  <div className="flex mt-5 justify-between">
                    <p className="text-gray-500 w-1/2  md:w-[183px] h-4">
                      Theme
                    </p>
                    <p className="w-1/2  md:w-[450px] font-semibold h-4">
                      {item.theme}
                    </p>
                  </div>
                  <div className="flex mt-5 justify-between">
                    <p className="text-gray-500 w-1/2  md:w-[183px] h-4">
                      Customised
                    </p>{" "}
                    <p className="w-1/2  md:w-[450px] font-semibold h-4">
                      {item.customised}
                    </p>
                  </div>
                  <div className="flex mt-5 justify-between">
                    <p className="text-gray-500 w-1/2  md:w-[183px] h-4">
                      Brand
                    </p>{" "}
                    <p className="w-1/2  md:w-[450px] font-semibold h-4">
                      {item.brand}
                    </p>
                  </div>
                  <div className="flex mt-5 justify-between">
                    <p className="text-gray-500 w-1/2  md:w-[183px] h-4">
                      UK Shoe Size
                    </p>
                    <p className="w-1/2  md:w-[450px] font-semibold h-4">
                      {item.ukShoeSize}
                    </p>
                  </div>
                  <div className="flex mt-5 justify-between">
                    <p className="text-gray-500 w-1/2  md:w-[183px] h-4">
                      Department
                    </p>
                    <p className="w-1/2  md:w-[450px] font-semibold h-4">
                      {item.department}
                    </p>
                  </div>
                  <div className="flex mt-5 justify-between">
                    <p className="text-gray-500 w-1/2  md:w-[183px] h-4">
                      Type
                    </p>{" "}
                    <p className="w-1/2  md:w-[450px] font-semibold h-4">
                      {item.type}
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className="flex ">
                    <p className="text-gray-500 w-1/2  md:w-[183px] h-20 mt-12">
                      Release Year
                    </p>
                    <p className="w-1/2  md:w-[450px] font-semibold h-20 mt-12">
                      {item.releaseYear}
                    </p>
                  </div>
                  <div className="flex mt-5 justify-between">
                    <p className="text-gray-500 w-1/2  md:w-[183px] h-4">
                      Model
                    </p>{" "}
                    <p className="w-1/2  md:w-[450px] font-semibold h-4">
                      {item.model}
                    </p>
                  </div>
                  <div className="flex mt-5 justify-between">
                    <p className="text-gray-500 w-1/2  md:w-[183px] h-4">
                      Style
                    </p>
                    <p className="w-1/2  md:w-[450px] font-semibold h-4">
                      {item.style}
                    </p>
                  </div>
                  <div className="flex mt-5 justify-between">
                    <p className="text-gray-500 w-1/2  md:w-[183px] h-4">MPN</p>
                    <p className="w-1/2  md:w-[450px] font-semibold h-4">
                      {item.mpn}
                    </p>
                  </div>
                  <div className="flex mt-5 justify-between">
                    <p className="text-gray-500 w-1/2  md:w-[183px] h-4">
                      Material
                    </p>
                    <p className="w-1/2  md:w-[450px] font-semibold h-4">
                      {item.upperMaterial}
                    </p>
                  </div>
                  <div className="flex mt-5 justify-between">
                    <p className="text-gray-500 w-1/2  md:w-[183px] h-4">
                      Colour
                    </p>{" "}
                    <p className="w-1/2  md:w-[450px] font-semibold h-4">
                      {item.colour}
                    </p>
                  </div>
                  <div className="flex mt-5 justify-between">
                    <p className="text-gray-500 w-1/2  md:w-[183px] h-4">
                      Product Line
                    </p>{" "}
                    <p className="w-1/2  md:w-[450px] font-semibold h-4">
                      {item.productLine}
                    </p>{" "}
                  </div>
                </div>
              </div>
              <div className="mt-8">
                {data.map((item, index) => (
                  <div key={index}>
                    <h1 className="font-semibold text-2xl">{item.title}</h1>
                    <div className="flex flex-col">
                      <h1 className="font-bold mt-6 mb-4">
                        Product Identifiers
                      </h1>
                      <div className="flex flex-wrap">
                        {Object.entries(item.obj1).map(([key, value]) => (
                          <div
                            className="w-full justify-between md:w-1/2 flex mb-5"
                            key={key}
                          >
                            <span className="font-medium text-gray-500  w-1/2  md:w-[183px] h-4 ">
                              {key}
                            </span>{" "}
                            <p className="font-bold w-1/2  md:w-[450px] h-4">
                              {value}
                            </p>
                          </div>
                        ))}
                      </div>
                      <h1 className="font-bold mt-6 mb-4">
                        Product Key Features
                      </h1>
                      <div className="flex flex-wrap">
                        {Object.entries(item.obj2).map(([key, value]) => (
                          <div
                            className=" w-full justify-between md:w-1/2 flex mb-5"
                            key={key}
                          >
                            <span className="font-medium text-gray-500 w-1/2  md:w-[183px] h-4">
                              {key}
                            </span>{" "}
                            <p className="font-bold w-1/2  md:w-[450px] h-4">
                              {value}
                            </p>
                          </div>
                        ))}
                      </div>
                      <h1 className="font-bold mt-6 mb-4">
                        Additional Product Features
                      </h1>
                      <div className="flex flex-wrap">
                        {Object.entries(item.obj3).map(([key, value]) => (
                          <div
                            className="w-full justify-between md:w-1/2 flex mb-5"
                            key={key}
                          >
                            <span className="font-medium text-gray-500 w-1/2  md:w-[183px] h-4">
                              {key}
                            </span>{" "}
                            <p className="font-bold w-1/2  md:w-[450px] h-4">
                              {value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 mb-20">
                <h1 className="font-semibold text-3xl">
                  Item description from the seller
                </h1>
                <h1 className="font-semibold underline mt-4 text-xl">
                  Adidas Yeezy 500 Super Moon Yellow DB2966 UK 5 / US 5.5 | Same
                  Day Dispatch
                </h1>
                <h1 className="text-[#444444]  mt-4 text-xl">
                  Brand New & Unworn.
                </h1>
                <p className="text-[#444444] mt-4 text-xl">
                  Item will be dispatched within 24hrs of purchase via Royal
                  Mail Tracked 24.
                </p>
                <p className="text-[#444444]  mt-4 text-xl">
                  If you have any further questions please do not hesitate to
                  contact me via eBay.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Shipping, returns & payments" && (
          <div className="mt-5">
            <h1 className="font-bold text-2xl">Shipping and handling</h1>
            <h1 className="font-semibold mt-4 mb-3 text-xl">
              Item location:Saint Louis, Missouri, United States
            </h1>
            <h1 className="text-xs">
              <span className="font-semibold">Ships to :</span>
              Afghanistan, Albania, Algeria, Andorra, Angola, Anguilla, Antigua
              and Barbuda, Argentina, Armenia, Aruba, Austria, Azerbaijan
              Republic, Bahamas, Bahrain, Bangladesh, Belgium, Belize, Benin,
              Bermuda, Bhutan, Bolivia, Bosnia and Herzegovina, Botswana,
              Brazil, Brunei Darussalam, Bulgaria, Burkina Faso, Burundi,
              Cambodia, Cameroon, Cape Verde Islands, Cayman Islands, Central
              African Republic, Chad, Chile, China, Colombia, Costa Rica,
              Cyprus, Czech Republic, Côte d'Ivoire (Ivory Coast), Democratic
              Republic of the Congo, Denmark, Djibouti, Dominican Republic,
              Ecuador, Egypt, El Salvador, Equatorial Guinea, Eritrea, Estonia,
              Ethiopia, Fiji, Finland, France, Gabon Republic, Gambia, Georgia,
              Germany, Ghana, Gibraltar, Greece, Greenland, Grenada, Guatemala,
              Guinea, Guinea-Bissau, Guyana, Haiti, Honduras, Hong Kong,
              Hungary, Iceland, India, Indonesia, Ireland, Israel, Italy,
              Jamaica, Japan, Jordan, Kazakhstan, Kenya, Kiribati, Kuwait,
              Kyrgyzstan, Laos, Latvia, Lebanon, Lesotho, Liberia,
              Liechtenstein, Lithuania, Luxembourg, Macau, Macedonia,
              Madagascar, Malawi, Malaysia, Maldives, Mali, Malta, Mauritania,
              Mauritius, Mexico, Moldova, Monaco, Mongolia, Montenegro,
              Montserrat, Morocco, Mozambique, Namibia, Nauru, Nepal,
              Netherlands, New Zealand, Nicaragua, Niger, Nigeria, Norway, Oman,
              Pakistan, Panama, Papua New Guinea, Paraguay, Peru, Philippines,
              Poland, Portugal, Qatar, Republic of Croatia, Republic of the
              Congo, Romania, Rwanda, Saint Helena, Saint Kitts-Nevis, Saint
              Lucia, Saint Pierre and Miquelon, Saint Vincent and the
              Grenadines, San Marino, Saudi Arabia, Senegal, Serbia, Seychelles,
              Sierra Leone, Singapore, Slovakia, Slovenia, Solomon Islands,
              South Africa, South Korea, Spain, Sri Lanka, Suriname, Swaziland,
              Sweden, Switzerland, Taiwan, Tajikistan, Tanzania, Thailand, Togo,
              Tonga, Trinidad and Tobago, Tunisia, Turkey, Turkmenistan, Turks
              and Caicos Islands, Uganda, United Arab Emirates, United Kingdom,
              United States, Uzbekistan, Vanuatu, Vatican City State, Vietnam,
              Wallis and Futuna, Western Samoa, Yemen, Zambia, Zimbabwe
            </h1>
            <h1 className="mt-4 mb-3 text-xs">
              <span className="font-semibold ">Excludes:</span>
              Barbados, French Guiana, French Polynesia, Guadeloupe, Libya,
              Martinique, New Caledonia, Reunion, Russian Federation, Ukraine,
              Venezuela
            </h1>
            <div className="flex items-center mb-4 mt-5">
              <h1>Change Country:</h1>
              <select className="ml-4 w-[50%] md:w-[30%]">
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
            </div>
            <div className="bg-[#e8e8e8] text-xs py-2 mt-4 mb-3 flex">
              <h1 className="w-[229px]">Shipping and handling </h1>
              <h1 className="w-[176px]">Import charges(estimated) </h1>
              <h1 className="w-[89px]">To</h1>
              <h1 className="w-[392px]">Service</h1>
              <h1 className="w-[432px]">Delivery</h1>
            </div>
            <div className=" text-xs py-2 mb-4 flex">
              <h1 className="w-[229px]">GBP 52.75 (approx US $66.36)</h1>
              <h1 className="w-[176px]">£157.49 </h1>
              <h1 className="w-[89px]">Pakistan</h1>
              <h1 className="w-[392px]">
                Expedited Shipping (International Priority Shipping)
              </h1>
              <h1 className="w-[432px]">
                Estimated between Mon, Jun 19 and Fri, Jun 23 to 46000
              </h1>
            </div>
            <div>
              <h1 className="bg-[#e8e8e8] text-xs py-2">Handling time</h1>
              <h1 className=" text-xs py-2">
                Will usually ship within 1 business day of receiving cleared
                payment.
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InnerProductDescription;
