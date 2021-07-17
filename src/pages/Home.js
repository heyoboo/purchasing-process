import React from "react";

const Home = () => (
  <div class="content shadow">
    <div class="content-inner">
      <h1 class="mb-20">My Data</h1>
      <p class="mb-20">Please enter your data and press continue</p>
      <form>
        <label for="fname">Name <span class="require">*</span></label>
        <input id="fname" type="text" placeholder="John" required />
        <br />
        <label for="lname">Last Name <span class="require">*</span></label>
        <input id="lname" type="text" placeholder="Doe" required />
        <button type="submit" class="shadow">
          <span>Continue</span>
          <span class="arrow-right"></span>
        </button>
      </form>
    </div>
  </div>
);

export default Home;
