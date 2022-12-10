import React from 'react';

function SocialButtons() {
  return (
    <div className="flex pt-5 space-x-5 ">
      <a
        href="https://github.com/MustHaveLove"
        target="_blank"
        className="socialLink hover:animate-pulse hover:shadow-md ease-in-out bg-custom-lightGray"
      >
        <img
          src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png"
          alt="Jaewon"
          className=""
        />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100005443158970"
        target="_blank"
        className="socialLink hover:animate-pulse hover:shadow-md ease-in-out bg-custom-lightGray"
      >
        <img
          src="https://cdn.icon-icons.com/icons2/1826/PNG/512/4202110facebooklogosocialsocialmedia-115707_115594.png"
          alt="Jaewon"
          className=""
        />
      </a>
    </div>
  );
}

export default SocialButtons;
