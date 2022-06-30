import React, { Fragment, useState } from "react";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import { ProductOverview } from "./ProductOverview";
import {
  MailIcon,
  QuestionMarkCircleIcon,
  EmojiHappyIcon,
  EmojiSadIcon,
  FireIcon,
  HeartIcon,
  PaperClipIcon,
  ThumbUpIcon,
  XIcon,
} from "@heroicons/react/solid";
import { Listbox, Transition } from "@headlessui/react";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

// import "../../App.css";
export const ContactUs = () => {
  const [plan, setPlan] = useState("");
  const handlePlan = (e) => {
    setPlan(e.target.value);
  };
  const gender = [
    { name: "Male", icon: MaleIcon },
    { name: "Female", icon: FemaleIcon },
  ];
  const [selectedGender, setSelectedGender] = useState("");
  function classNames(...classes) {
    // console.log(classes.filter(Boolean).join(" "));a
    return classes.filter(Boolean).join(" ");
  }
  const moods = [
    {
      name: "Excited",
      value: "excited",
      icon: FireIcon,
      iconColor: "text-white",
      bgColor: "bg-red-500",
    },
    {
      name: "Loved",
      value: "loved",
      icon: HeartIcon,
      iconColor: "text-white",
      bgColor: "bg-pink-400",
    },
    {
      name: "Happy",
      value: "happy",
      icon: EmojiHappyIcon,
      iconColor: "text-white",
      bgColor: "bg-green-400",
    },
    {
      name: "Sad",
      value: "sad",
      icon: EmojiSadIcon,
      iconColor: "text-white",
      bgColor: "bg-yellow-400",
    },
    {
      name: "Thumbsy",
      value: "thumbsy",
      icon: ThumbUpIcon,
      iconColor: "text-white",
      bgColor: "bg-blue-500",
    },
    {
      name: "I feel nothing",
      value: null,
      icon: XIcon,
      iconColor: "text-gray-400",
      bgColor: "bg-transparent",
    },
  ];
  const [selectedMood, setSelectedMood] = useState(moods[5]);
  // console.log(selectedGender);
  return (
    <div className="bg-white">
      <main>
        {/* Header */}
        <div className="py-24 bg-gray-50 sm:py-32">
          <div className="max-w-md mx-auto pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="text-4xl leading-10 font-extrabold tracking-tight text-gray-900 text-center sm:text-5xl sm:leading-none lg:text-6xl">
              Get in touch
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl leading-normal text-gray-500 text-center">
              Convallis feugiat et aliquet pellentesque dictum nisi, velit.
              Egestas fermentum adipiscing risus quam ac consectetur mattis
              turpis tristique.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative bg-white">
          <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <img
                className="h-56 w-full object-cover lg:absolute lg:h-full"
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
            <div className="lg:pr-8">
              <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Let's work together
                </h2>
                <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                  We’d love to hear from you! Send us a message using the form
                  opposite, or email us. We’d love to hear from you! Send us a
                  message using the form opposite, or email us.
                </p>
                <form
                  action="#"
                  method="POST"
                  className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                >
                  <div>
                    {" "}
                    {/* first name */}
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    {/* last name */}
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    {/* Gender */}
                    <Listbox
                      value={selectedGender.name}
                      onChange={setSelectedGender}
                    >
                      {({ open }) => (
                        <>
                          <Listbox.Label className="block text-sm font-medium text-gray-700">
                            Gender
                          </Listbox.Label>
                          <div className="mt-1 relative">
                            <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                              <span className="block truncate">
                                {selectedGender.name
                                  ? selectedGender.name
                                  : "Your Gender"}
                              </span>
                              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                {selectedGender.icon ? (
                                  <selectedGender.icon
                                    style={{ color: "gray" }}
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <SelectorIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Listbox.Button>

                            <Transition
                              show={open}
                              as={Fragment}
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                {gender.map((e, i) => (
                                  <Listbox.Option
                                    style={{ margin: "0.25rem 1rem" }}
                                    key={i}
                                    className={({ active }) =>
                                      classNames(
                                        active
                                          ? "text-white bg-gray-600 px-4"
                                          : "text-gray-900",
                                        "cursor-default select-none relative py-2 pl-3 pr-9"
                                      )
                                    }
                                    value={e}
                                  >
                                    {({ selectedGender, active }) => (
                                      <>
                                        <span
                                          className={classNames(
                                            selectedGender
                                              ? "font-semibold"
                                              : "font-normal",
                                            "block truncate"
                                          )}
                                        >
                                          {e.name}
                                        </span>

                                        {/* {selectedGender ? ( */}
                                        <span
                                          className={classNames(
                                            active
                                              ? "text-white"
                                              : "text-indigo-600",
                                            "absolute inset-y-0 right-0 flex items-center pr-4"
                                          )}
                                        >
                                          <e.icon
                                            style={{ color: "gray" }}
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                          />
                                        </span>
                                        {/* ) : null} */}
                                      </>
                                    )}
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </>
                      )}
                    </Listbox>
                  </div>
                  <div className="sm:col-span-2">
                    {" "}
                    {/* email */}
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <div className="mt-1 inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MailIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    {/* address */}
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Address
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="address"
                        id="address"
                        autoComplete="address"
                        className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    {/* postcode */}
                    <label
                      htmlFor="postcode"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Post Code
                    </label>
                    <div className="mt-1 inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <input
                        type="tel"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        name="postcode"
                        id="postcode"
                        autoComplete="postcode"
                        className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"
                      />
                      <QuestionMarkCircleIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    {/* phone */}
                    <div className="flex justify-between">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone
                      </label>
                      <span
                        id="phone-description"
                        className="text-sm text-gray-500"
                      >
                        Optional
                      </span>
                    </div>
                    <div className="mt-1 inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <input
                        type="tel"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        aria-describedby="phone-description"
                        className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"
                      />
                      <QuestionMarkCircleIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <fieldset className="sm:col-span-2">
                    {/* budget */}
                    <legend className="block text-sm font-medium text-gray-700">
                      Select Plan
                    </legend>
                    <div className="mt-4 grid grid-cols-1 gap-y-4">
                      <div className="flex items-center">
                        <input
                          id="planClassic"
                          name="plan"
                          defaultValue="classic"
                          onChange={handlePlan}
                          type="radio"
                          className="focus:ring-grape-500 h-4 w-4 text-grape-600 border-gray-300"
                        />
                        <label htmlFor="planClassic" className="ml-3">
                          <span className="block text-sm text-gray-700">
                            Mortgage Plan Classic
                          </span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="planPremium"
                          name="plan"
                          defaultValue="premium"
                          onChange={handlePlan}
                          type="radio"
                          className="focus:ring-grape-500 h-4 w-4 text-grape-600 border-gray-300"
                        />
                        <label htmlFor="planPremium" className="ml-3">
                          <span className="block text-sm text-gray-700">
                            Mortgage Plan Premium
                          </span>
                        </label>
                      </div>
                      {/* product overview */}
                      <ProductOverview plan={plan} />
                    </div>
                  </fieldset>

                  <div className="sm:col-span-2 flex items-start space-x-4 max-w-fit">
                    <div className="mt-1 mr-4">
                      <img
                        className="inline-block h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 w-full">
                      <div className="border border-gray-300 rounded-lg shadow-sm overflow-visible focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
                        <label htmlFor="comment" className="sr-only">
                          Add your comment
                        </label>
                        <textarea
                          rows={3}
                          name="comment"
                          id="comment"
                          className="block w-full px-3 py-3 border-0 resize-none focus:ring-0 sm:text-sm"
                          placeholder="Add your comment..."
                          defaultValue={""}
                        />

                        <div className="bottom-0 inset-x-0 pl-3 pr-2 py-2 flex justify-between">
                          <div className="flex items-center space-x-5">
                            <div className="flex items-center">
                              <button
                                type="button"
                                className="-m-2.5 w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-500"
                              >
                                <PaperClipIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                                <span className="sr-only">Attach a file</span>
                              </button>
                            </div>
                            {/* emojis */}
                            <div className="flex items-center">
                              <Listbox
                                value={selectedMood}
                                onChange={setSelectedMood}
                              >
                                {({ open }) => (
                                  <>
                                    <Listbox.Label className="sr-only">
                                      Your mood
                                    </Listbox.Label>
                                    <div className="relative">
                                      <Listbox.Button className="relative -m-2.5 w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-500">
                                        <span className="flex items-center justify-center">
                                          {selectedMood.value === null ? (
                                            <span>
                                              <EmojiHappyIcon
                                                className="flex-shrink-0 h-5 w-5"
                                                aria-hidden="true"
                                              />
                                              <span className="sr-only">
                                                Add your mood
                                              </span>
                                            </span>
                                          ) : (
                                            <span>
                                              <span
                                              style={{"backgroundColor":'red', "borderRadius":"9999px", height:"2rem", width:'2rem'}}
                                                className="bg-orange-500 w-8 h-8 rounded-full flex items-center justify-center"
                                              >
                                                <selectedMood.icon
                                                  className="flex-shrink-0 h-5 w-5 text-white"
                                                  aria-hidden="true"
                                                />
                                              </span>
                                              <span className="sr-only">
                                                {selectedMood.name}
                                              </span>
                                            </span>
                                          )}
                                        </span>
                                      </Listbox.Button>

                                      <Transition
                                        show={open}
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                      >
                                        <Listbox.Options className="absolute z-50 mt-1 -ml-6 w-60 bg-white shadow rounded-lg py-3 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm">
                                          {moods.map((mood) => (
                                            <Listbox.Option
                                              key={mood.value}
                                              className={({ active }) =>
                                                classNames(
                                                  active
                                                    ? "bg-gray-100"
                                                    : "bg-white",
                                                  "cursor-default select-none relative py-2 px-3"
                                                )
                                              }
                                              value={mood}
                                            >
                                              <div className="flex items-center">
                                                <div  style={{"backgroundColor":'red', "borderRadius":"9999px", height:"2rem", width:'2rem'}} className="bg-orange-600 w-8 h-8 rounded-full flex items-center justify-center">
                                                  <mood.icon 
                                                    className={classNames(
                                                      mood.iconColor,
                                                      "flex-shrink-0 h-5 w-5"
                                                    )}
                                                    aria-hidden="true"
                                                  />
                                                </div>
                                                <span className="ml-3 block font-medium truncate">
                                                  {mood.name}
                                                </span>
                                              </div>
                                            </Listbox.Option>
                                          ))}
                                        </Listbox.Options>
                                      </Transition>
                                    </div>
                                  </>
                                )}
                              </Listbox>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right sm:col-span-2">
                    {/* submit button */}
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-800 bg-orange-500 hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-grape-500"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-grape-400">
          <div className="max-w-md mx-auto text-center py-16 px-4 sm:max-w-2xl sm:py-24 sm:px-6 lg:px-8 lg:py-32">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              <span className="block text-white">
                Looking for a new career?
              </span>
              <span className="block text-grape-900">We’re hiring.</span>
            </h2>
            <a
              href="#"
              className="mt-8 w-full inline-flex items-center justify-center py-3 px-5 bg-white border border-transparent rounded-md shadow-md text-base font-medium text-grape-600 hover:bg-grape-50 sm:w-auto"
            >
              <span>See open positions</span>
              <ExternalLinkIcon
                className="ml-3 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};
