import React, { useState } from "react"
import "./details.css"
import "../../components/header/header.css"

import { BsPencilSquare } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { blog } from "../../assets/data/data"

export const DetailsPages = () => {
  const { id } = useParams()
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    let blogs = blog.find((blogs) => blogs.id === parseInt(id))
    if (blogs) {
      setBlogs(blogs)
    }
  }, [])

  return (
    <>
      {blogs ? (
        <section className='singlePage'>
          <div className='container'>
            <div className='left'>
              <img src={blogs.cover} alt='' />
            </div>
            <div className='right'>
              <div className='buttons'>
                <button className='button'>
                  <BsPencilSquare />
                </button>
                <button className='button'>
                  <AiOutlineDelete />
                </button>
              </div>
              <h1>Travel Guides and Safety in South Africa</h1>
              <p>{blogs.desc}</p>
              <p>"South Africa is a captivating destination that offers a wealth of travel experiences for adventurous souls. From vibrant cities to breathtaking landscapes, this country has something for everyone. When planning your visit to South Africa, it's essential to consider travel guides and prioritize safety to make the most of your journey.

First and foremost, familiarize yourself with the diverse regions and attractions South Africa has to offer. Whether you're exploring the cosmopolitan city of Cape Town with its iconic Table Mountain, embarking on a safari adventure in Kruger National Park, or immersing yourself in the vibrant cultural scene of Johannesburg, there's an abundance of experiences awaiting you. Consider creating an itinerary that encompasses both natural wonders and cultural highlights to truly immerse yourself in the rich tapestry of South African life.

While South Africa is a captivating destination, it's important to prioritize safety during your visit. Like any travel destination, it's advisable to exercise caution and be aware of your surroundings. Stay informed about the current safety situation and follow any travel advisories issued by your government. It's also recommended to use reliable transportation options, such as registered taxis or trusted tour operators, and avoid walking alone at night in unfamiliar areas. By taking these precautions and being vigilant, you can enhance your travel experience and ensure a safe and memorable journey through the remarkable landscapes and vibrant cities of South Africa.

Remember, South Africa is a country of breathtaking beauty, cultural diversity, and warm hospitality. By planning ahead, staying informed, and prioritizing safety, you can embark on an unforgettable adventure and create lifelong memories in this captivating destination. Enjoy your travels and embrace all that South Africa has to offer!"</p>
              <p>Author: Sunil</p>
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}
