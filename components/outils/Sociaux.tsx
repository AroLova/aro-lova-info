import Link from "next/link";
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "",
  },
  {
    icon: <FaLinkedin />,
    path: "",
  },
  {
    icon: <FaYoutube />,
    path: "",
  },
  {
    icon: <FaFacebook />,
    path: "",
  },
  {
    icon: <FaTwitter />,
    path: "",
  },
  {
    icon: <FaInstagram />,
    path: "",
  },
];


const Sociaux = ({containerStyles, iconStyles}:{
    containerStyles?:string,
    iconStyles?:string
}) => {
  return <div className={containerStyles}>
{
    socials.map((item, index)=>{
        return <Link key={index} href={item.path} className={iconStyles}> {item.icon}</Link>
    })
}
  </div>;
};

export default Sociaux;
