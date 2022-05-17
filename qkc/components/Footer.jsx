import React from 'react'
import { AiFillGithub, AiFillInstagram, AiOutlineTwitter, AiTwotoneStar } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Quiet Kids Club. All rights reserved. <br />Disclaimer: this is a demo store with fake products</p>
      <p className="icons">
        <a href="https://www.arthurlaroya.com/" rel="icon" target="_blank"><AiTwotoneStar /></a>
        <a href="https://github.com/ajlaroya" rel="icon" target="_blank"><AiFillGithub /></a>
      </p>
    </div>
  )
}

export default Footer