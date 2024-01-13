import { Icon } from '@iconify/react';

const ContactFooter = () => {
  return (
    <div className="flex flex-col gap-4 justify-center">
      <span className="text-[18px] w-[65px] border-b-[2px] border-white">Contact</span>
      <span className="flex items-center gap-2">
        <Icon icon="ic:baseline-mail" color="white" width={25} />
        tomasz.grobelski98@gmail.com
      </span>
      <a href="https://www.linkedin.com/in/tomasz-grobelski-6182b4145/">
        <span className="flex items-center gap-2">
          <Icon icon="bi:linkedin" color="white" width={25} />
          https://www.linkedin.com/in/tomasz-grobelski-6182b4145/
        </span>
      </a>
      <a href="https://github.com/TomaszGrobelski">
        <span className="flex items-center gap-2">
          <Icon icon="uim:github" color="white" width={25} />
          https://github.com/TomaszGrobelski
        </span>
      </a>
    </div>
  );
};

export default ContactFooter;
