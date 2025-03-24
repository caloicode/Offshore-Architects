const HeroSection = () => {
  return (
    <section
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://www.realsimple.com/thmb/R26WlmAr7Jm3d8YJTRxoB77cDCc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/modern-architecture-GettyImages-1283532143-a61afc966237469fb384890712c9bab1.jpg")',
      }}
    >
      <div className="text-center text-white bg-black/50 p-8 rounded-lg">
        <h1 className="text-5xl font-bold mb-4">
          Transform your vision into reality
        </h1>
        <p className="text-xl mb-8">
          We provide expert architectural visualization services that bring your
          ideas to life through cutting-edge 3D designs and animations.
        </p>
        <button className="btn-primary">Request a Quote</button>
      </div>
    </section>
  );
};

export default HeroSection;
