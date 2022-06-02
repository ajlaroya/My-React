import React from "react";
import Image from "next/image";
import SliderContainer, { SliderItem } from "./slider";

const DevLogos: React.FC = () => (
  <>
    <SliderContainer initialOffsetX={0} className="" contentWidth={1290}>
      <SliderItem width={150}>
        <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
            width={150}
            height={100}
            alt="React"
            objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
            width={150}
            height={100}
            alt="HTML5"
            objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
            width={150}
            height={100}
            alt="CSS3"
            objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg"
            width={150}
            height={100}
            alt="Django"
            objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
            width={150}
            height={100}
            alt="React"
            objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
            width={150}
            height={100}
            alt="React"
            objectFit="contain"
        />
      </SliderItem>
    </SliderContainer>

    <SliderContainer initialOffsetX={1000} className="" contentWidth={1290}>
      <SliderItem width={150}>
        <Image
            src="/assets/tech/react.svg"
            width={150}
            height={100}
            alt="React"
            objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
            src="/assets/tech/html5.svg"
            width={150}
            height={100}
            alt="React"
            objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
            src="/assets/tech/css3.svg"
            width={150}
            height={100}
            alt="React"
            objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
            src="/assets/tech/django.svg"
            width={150}
            height={100}
            alt="React"
            objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
            src="/assets/tech/html5.svg"
            width={150}
            height={100}
            alt="React"
            objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
            src="/assets/tech/javascript.svg"
            width={150}
            height={100}
            alt="React"
            objectFit="contain"
        />
      </SliderItem>
    </SliderContainer>
  </>
);

export default DevLogos;
