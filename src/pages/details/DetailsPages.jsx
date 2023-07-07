import React, { useState, useEffect } from "react"
import "./details.css"
import "../../components/header/header.css"

import { BsPencilSquare } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"
import { useParams } from "react-router-dom"
import { blog } from "../../assets/data/data"

export const DetailsPages = () => {
  const { id } = useParams()
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    let selectedBlog = blog.find((blog) => blog.id === parseInt(id))
    if (selectedBlog) {
      setBlogs(selectedBlog)
    }
  }, [id])

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
              <p>
                "South Africa is a captivating destination that offers a wealth
                of travel experiences for adventurous souls. From vibrant
                cities to breathtaking landscapes, this country has something
                for everyone. When planning your visit to South Africa, it's
                essential to consider travel guides and prioritize safety to
                make the most of your journey.
                ...
                All that South Africa has to offer!"
              </p>
              <p>Author: Sunil</p>
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}
