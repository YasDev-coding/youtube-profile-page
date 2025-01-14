import { FaTelegram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section className="flex flex-col space-y-8 p-4">
      <h1 className="text-2xl font-bold">Contact Me</h1>
      <ul className="flex max-w-[500px] gap-14">
        <li>
          <Button variant={"outline"} size="icon">
            <a href="">
              <FaTelegram />
            </a>
          </Button>
        </li>
        <li>
          <Button variant={"outline"} size="icon">
            <a href="">
              <FaGithub className="size-7" />
            </a>
          </Button>
        </li>
        <li>
          <Button variant={"outline"} size="icon">
            <a href="">
              <FaLinkedin className="size-7" />
            </a>
          </Button>
        </li>
        <li>
          <Button variant={"outline"} size="icon">
            <a href="">
              <FaXTwitter className="size-7" />
            </a>
          </Button>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
