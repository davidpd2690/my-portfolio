import React from "react";

export default function Contact() {
      return (
        <section id="contact">
          <div className="container px-5 py-10 mx-auto">
            <div className="grid grid-flow-col grid-rows-1 gap-4">
            <div>
              <h2 className="title-font font-semibold text-white">
                ADDRESS
              </h2>
                <p className="p-2">
                  Zapopan, Jalisco, México
                </p>
              </div>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>
                {/* <h2 className="title-font font-semibold text-white">
                  EMAIL
                </h2> */}
                  <p className="text-indigo-400 p-2 ">
                    david.pd2690@email.com
                  </p>
              </div>
              <div>
              <h2 className="title-font font-semibold text-white">
                PHONE
              </h2>
                <p className="p-2">
                  +52 331 799 9208
                </p>
              </div>
            </div>
            </div>       
    </section>
      );
    }