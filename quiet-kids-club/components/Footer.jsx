import { BsFacebook, BsInstagram, BsTwitter, BsSpotify } from "react-icons/bs";

const navigation = [
  {
    name: "Facebook",
    href: "#",
    icon: (props) => <BsFacebook />,
  },
  {
    name: "Instagram",
    href: "#",
    icon: (props) => <BsInstagram />,
  },
  {
    name: "Twitter",
    href: "#",
    icon: (props) => <BsTwitter />,
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/playlist/6EdWkciJ9At70lkbT3ugEo?si=cd679043c5564fa0",
    icon: (props) => <BsSpotify />,
  },
];

export default function Footer() {
  return (
    <footer className="bg-transparent border-t">
      <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-5 md:order-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-neutral-800 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="align-center" aria-hidden="true" />
            </a>
          ))}
        </div>

        <div className="mt-8 md:mt-0 md:order-1">
          <ul className="flex flex-wrap justify-center items-center text-neutral-800 text-base font-medium">
            <li>
              <a href="#" className="mr-4 hover:text-neutral-500 md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:text-neutral-500 md:mr-6">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:text-neutral-500 md:mr-6 ">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:text-neutral-500 md:mr-6">
                &copy; 2022 QKC
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
