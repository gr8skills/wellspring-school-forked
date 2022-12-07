export const Home =()=>{
    return (
      <>
        <h1>
          {" "}
          <Route path="/" component={HeroSection} exact />
          <Route path="/" component={HeroSection} exact />
        </h1>
      </>
    );
}