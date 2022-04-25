import {FaInstagram,FaFacebook,FaTwitter} from "react-icons/fa"
import { StyledSocialIcons } from "./Styles/SocialIcons.styled"
import React from 'react'

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
    <li>
        <a href="https://www.instagram.com">
            <FaInstagram/>
        </a>
            </li>
            <li>
        <a href="https://twitter.com">
            <FaTwitter/>
        </a>
        </li>
        <li>
        <a href="https://facebook.com/">
            <FaFacebook/>
        </a>
        </li>
    </StyledSocialIcons>
  )
}
