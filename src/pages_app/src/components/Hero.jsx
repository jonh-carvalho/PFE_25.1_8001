function Hero() {
  return (
    <>
    <div className="hero min-h-screen bg-base-200"></div>
      <div className="hero-content flex-col lg:flex-row">
        <img src="/images/hero.png" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Hello there!</h1>
          <p className="py-6">Welcome to our application. We are glad to have you here.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </>
  );
}

export default Hero;