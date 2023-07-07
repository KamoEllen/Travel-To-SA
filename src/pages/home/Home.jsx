import React from "react"
import { Card } from "../../components/blog/Card"
import { Category } from "../../components/category/Category"

export const Home = () => {
  return (
    <>
      {/*  <Slider />*/}
      <div>
      <h1>Welcome</h1>
      <p> to our South Africa Blog!</p>
      <p>
        We are passionate about sharing the beauty, culture, and adventures of
        South Africa with the world. Our blog is a platform where we showcase
        the diverse experiences and hidden gems this incredible country has to
        offer.
      </p>
      <p>
        South Africa is a land of breathtaking landscapes, vibrant cities,
        rich wildlife, and fascinating history. From the stunning beaches of
        Cape Town to the majestic wildlife of Kruger National Park, there is
        something for everyone in this enchanting country.
      </p>
      <p>
        Through our blog, we aim to inspire and inform travelers, adventure
        seekers, culture enthusiasts, and anyone curious about South Africa.
        Whether you are planning a trip, looking for travel tips, or simply
        want to learn more about this captivating destination, we've got you
        covered.
      </p>
      <p>
        Join us as we embark on a journey to explore the hidden treasures,
        share fascinating stories, and provide valuable insights about South
        Africa. We'll take you on an adventure through the diverse landscapes,
        introduce you to the vibrant local communities, and delve into the rich
        cultural heritage of this remarkable country.
      </p>
      <p>
        We hope our blog inspires you to pack your bags, set off on an
        unforgettable South African adventure, and create memories that will
        last a lifetime. Get ready to immerse yourself in the beauty and
        wonders of South Africa!
      </p>
    </div>
      
      <Card />
      <div className="contact-page">
      <h1>Contact Us</h1>
      <p>
        We would love to hear from you! If you have any questions, suggestions,
        or would like to share your South Africa experiences, please feel free
        to reach out to us.
      </p>
      <form>

            <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
              <label htmlFor=''>Email</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor=''>Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
              <button type="submit">Submit</button>

      </form>
    </div>
    <Category />
    
    </>

        
  )
}
