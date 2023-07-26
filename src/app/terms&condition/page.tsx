import React from "react";

type Props = {};

export default function TermsAndCondition({}: Props) {
  return (
    <div className=" w-3/4 mx-auto text-center ">
      <h1 className="text-2xl font-bold mb-5">Terms and Conditions</h1>
      <p className="text- mb-10">
        Welcome to Ziplink, owned and operated by Perfomatech (
        <a href="http://www.perfomatech.com">www.perfomatech.com</a>). By using
        our website, you agree to comply with and be bound by the following
        terms and conditions:
      </p>
      <h2 className="text-lg font-semibold" id="personal-information">Personal Information</h2>
      <p>
        We collect personal information directly from users, including
        name/username, email, billing address, debit/credit card number, age,
        and password. We may also use tracking technologies such as cookies, web
        beacons, local storage, session, and Google Map API. Our website uses
        the Facebook pixel, retargeting for advertising, and geolocation
        services. We also show ads and send emails or newsletters to users.
      </p>
      <h2 className="text-lg font-semibold" id="user-accounts">User Accounts</h2>
      <p>
        Users can create accounts and buy goods on our website. However, users
        cannot create and/or upload content (such as text or images). We offer
        subscription plans, which are recurring, and we also provide a free
        trial.
      </p>
      <h2 className="text-lg font-semibold" id="promotions-and-feedback">Promotions and Feedback</h2>
      <p>
        We may offer promotions, contests, and sweepstakes from time to time. We
        may also collect feedback and suggestions from users, which we may
        implement without compensation or credits given.
      </p>
      <h2 className="text-lg font-semibold" id="intellectual-property">Intellectual Property</h2>
      <p>
        All content and trademarks on our website are our exclusive property.
      </p>
      <h2 className="text-lg font-semibold" id="contact-us">Contact Us</h2>
      <p>
        If you have any questions regarding these Terms and Conditions, you can
        contact us at{" "}
        <a href="mailto:mirsahib24@gmail.com">mirsahib24@gmail.com</a>.
      </p>
      <p>These Terms and Conditions are effective as of July 31, 2023.</p>
    </div>
  );
}
