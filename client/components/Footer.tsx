import React, { FC, useEffect } from "react";
import getConfig from "next/config";

import showRecaptcha from "../helpers/recaptcha";
import { useStoreState } from "../store";
import { ColCenter } from "./Layout";
import ReCaptcha from "./ReCaptcha";
import ALink from "./ALink";
import Text from "./Text";
import Link from "next/link";

const { publicRuntimeConfig } = getConfig();

const Footer: FC = () => {
  const { isAuthenticated } = useStoreState(s => s.auth);

  useEffect(() => {
    showRecaptcha();
  }, []);

  const formatText = (text: String) => text.replaceAll("_", " ");

  return (
    <ColCenter
      as="footer"
      width={1}
      backgroundColor="white"
      p={isAuthenticated ? 2 : 24}
    >
      {!isAuthenticated && <ReCaptcha />}
      <Text fontSize={[12, 13]} py={2}>
        {publicRuntimeConfig.FOOTER_MESSAGE && (
          <>
            {formatText(publicRuntimeConfig.FOOTER_MESSAGE)}{" "}
            <ALink
              href={publicRuntimeConfig.FOOTER_LINK}
              title={formatText(publicRuntimeConfig.FOOTER_LINK_TITLE)}
            >
              {formatText(publicRuntimeConfig.FOOTER_LINK_TITLE)}
            </ALink>
            {" | "}
          </>
        )}
        {publicRuntimeConfig.GITHUB_URL && (
          <>
            <ALink
              href={publicRuntimeConfig.GITHUB_URL}
              title="GitHub"
              target="_blank"
            >
              GitHub
            </ALink>
            {" | "}
          </>
        )}
        <Link href="/terms">
          <ALink href="/terms" title="Terms of Service">
            Terms of Service
          </ALink>
        </Link>
        {" | "}
        <Link href="/report">
          <ALink href="/report" title="Report abuse">
            Report Abuse
          </ALink>
        </Link>
        {publicRuntimeConfig.CONTACT_EMAIL && (
          <>
            {" | "}
            <ALink
              href={`mailto:${publicRuntimeConfig.CONTACT_EMAIL}`}
              title="Contact"
            >
              Contact
            </ALink>
          </>
        )}
      </Text>
    </ColCenter>
  );
};

export default Footer;
