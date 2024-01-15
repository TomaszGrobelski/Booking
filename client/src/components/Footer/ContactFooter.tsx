import { Icon } from '@iconify/react';

import { ContactFlexBox } from '../../styles/Footer/ContactFooter.styles';
import { GitHubContent } from '../../styles/Footer/ContactFooter.styles';
import { LinkedinContent } from '../../styles/Footer/ContactFooter.styles';
import { EmailContent } from '../../styles/Footer/ContactFooter.styles';
import { HeaderFooter } from '../../styles/Footer/ContactFooter.styles';

const ContactFooter = () => {
  return (
    <ContactFlexBox>
      <HeaderFooter>Contact</HeaderFooter>
      <EmailContent>
        <Icon icon='ic:baseline-mail' color='white' width={25} />
        tomasz.grobelski98@gmail.com
      </EmailContent>
      <a
        href='https://www.linkedin.com/in/tomasz-grobelski-6182b4145/'
        target='_blank'
        aria-label='Open Tomasz Grobelski Linkedin profile page'
      >
        <LinkedinContent>
          <Icon icon='bi:linkedin' color='white' width={25} />
          https://www.linkedin.com/in/tomasz-grobelski-6182b4145/
        </LinkedinContent>
      </a>
      <a
        href='https://github.com/TomaszGrobelski'
        target='_blank'
        aria-label='Open Tomasz Grobelski github profile page'
      >
        <GitHubContent>
          <Icon icon='uim:github' color='white' width={25} />
          https://github.com/TomaszGrobelski
        </GitHubContent>
      </a>
    </ContactFlexBox>
  );
};

export default ContactFooter;
