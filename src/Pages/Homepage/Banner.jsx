import bgVideo from "../../assets/_import_61557a2fa7fd98.46035599_FPpreview (1).mp4";
const Banner = () => {
  // https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80
  return (
    <>
      <div className={`h-screen relative`}>
        {/* video */}
        <video
          className="absolute top-0 left-0 w-full h-full"
          style={{ objectFit: "cover" }}
          autoPlay
          muted
          loop
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

        <div className="w-full h-full flex lg:px-16 items-center backdrop-brightness-50">
          <div className="text-white font-bold lg:w-1/2">
            <h1
              className="text-5xl font-[nunito]"
              style={{ lineHeight: "3.4rem" }}
            >
              Personalized product recommendation platform for E-Commerce
              businesses
            </h1>
            <h6 className="my-8 text-xl text-gray-300">
              We recommend the right products, at the right time, to the right
              person.
            </h6>
            <button className="btn rounded-sm font-bold">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
