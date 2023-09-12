import React from "react"
import MobileMenu from "../MobileMenu"
import imgurPng from "@/assets/img/imgur-favicon-32x32.png"
import cwk from "@/assets/img/cwk.png"
import { Link } from "react-router-dom"

const GalleryMobileNav = () => {
  return (
    <div className="lg:hidden shadow-2xl shadow-black relative z-50 h-12 bg-gradient-to-r flex justify-between items-center px-2 sm:px-8 from-[#2e6082] via-[#478ca1] to-[#408b58]">
      <MobileMenu />

      <Link to="/">
        <img src={imgurPng} width={34} height={34} />
      </Link>
      <Link to="https://codewithkoli.com/" target="_blank">
        <img src={cwk} width={69} height={40} />
      </Link>
    </div>
  )
}

export default GalleryMobileNav
