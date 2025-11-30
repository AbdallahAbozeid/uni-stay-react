import React, { useEffect } from 'react';

// Tailwind Colors for consistent theming
const COLORS = {
    bg: '#FAF6EA',
    logoBg: '#66869F',
    logoText: '#66869F',
    textColor: '#333333',
    btnSend: '#C8846C',
    formBg: '#F8F3CE',
    inputBg: '#D5D5D5',
};



// --- Main Component ---

const ContactUsPage = () => {
     useEffect(() => {
          document.title = "Uni-Stay | Contact Us";
        }, []);
    return (
        <div className={`bg-[${COLORS.bg}] min-h-screen relative`}>
         
            
            {/* Main Content */}
            <main className=" mx-auto py-15 px-4 md:px-8 bg-us-cream">
                <h1 className="text-5xl text-center mb-16 text-gray-800 font-semibold">Contact us</h1>

                <section className="flex flex-col md:flex-row justify-center md:space-x-20">
                    {/* Contact Info */}
                    <div className="flex flex-col justify-center gap-7 space-y-12 mb-12 md:mb-0">
                        <a href="tel:+91235678987" className="flex items-center space-x-4 group p-2 -m-2">
                            <div className={`p-3 text-[${COLORS.btnSend}] group-hover:text-white transition duration-200`}>
                                {/* Phone Icon SVG */}
                                <svg xmlns="http://www.w3.org/2000/svg" height="45px" viewBox="0 -960 960 960" width="45px" fill={COLORS.btnSend}>
                                    <path
                                        d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                                </svg>
                            </div>
                            <span className={`text-xl text-[${COLORS.textColor}]`}>+912 3567 8987</span>
                        </a>

                        <a href="mailto:example@gmail.com" className="flex items-center space-x-4 group p-2 -m-2">
                            <div className={`p-3 text-[${COLORS.btnSend}] group-hover:text-white transition duration-200`}>
                                {/* Email Icon SVG */}
                                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill={COLORS.btnSend}>
                                    <path
                                        d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z" />
                                </svg>
                            </div>
                            <span className={`text-xl text-[${COLORS.textColor}]`}>example@gmail.com</span>
                        </a>
                    </div>

                    {/* Contact Form */}
                    <div className={`bg-us-formBg p-6 md:p-9 rounded-lg shadow-lg max-w-sm w-full`}>
                        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send Message</h2>

                        <form className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className={`w-full p-3 border-none bg-[${COLORS.inputBg}] rounded-md focus:ring-2 focus:ring-[${COLORS.btnSend}] focus:outline-none placeholder-gray-500 text-sm`}
                                    aria-label="Full Name"
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className={`w-full p-3 border-none bg-[${COLORS.inputBg}] rounded-md focus:ring-2 focus:ring-[${COLORS.btnSend}] focus:outline-none placeholder-gray-500 text-sm`}
                                    aria-label="Email"
                                />
                            </div>

                            <div>
                                <textarea
                                    placeholder="Type your message"
                                    rows="4"
                                    className={`w-full p-3 border-none bg-[${COLORS.inputBg}] rounded-md focus:ring-2 focus:ring-[${COLORS.btnSend}] focus:outline-none resize-none placeholder-gray-500 text-sm`}
                                    aria-label="Type your message"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className={`w-full py-3 bg-us-primary text-white font-medium rounded-md shadow-md hover:opacity-90 transition duration-150 ease-in-out mt-6`}
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </section>
            </main>

            {/* Note: The original HTML did not include a visible footer, but a footer-link CSS class was defined. Assuming no visible footer is needed. */}
            
        </div>
    );
};

export default ContactUsPage;