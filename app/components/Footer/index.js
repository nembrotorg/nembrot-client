import React from 'react';
import { FormattedMessage } from 'react-intl';
import { CONTENT_COLUMNS_SPAN, LINE_HEIGHT, QR_CODE_WIDTH } from 'config.js';

import A from 'components/A';
import Wrapper from './Wrapper';
import messages from './messages';

import styled from 'styled-components';

const lineHeight = '28px';

const Nav = styled.nav`
  display: grid;
  grid-column-gap: ${LINE_HEIGHT};
  grid-template-columns: repeat(${CONTENT_COLUMNS_SPAN}, 1fr);
  background-color: cyan;
  width: 100%;
`;

const Promos = styled.ul`
  background-color: coral;
  grid-column-start: 1;
  grid-column-end: span 4;
  margin: 0;
  padding: 0;
`;

const SectionLinks = styled.ul`
  background-color: rebeccapurple;
  columns: 2;
  grid-column-start: 5;
  grid-column-end: span 4;
  margin: 0;
  padding: 0;
`;

const ExternalLinks = styled.ul`
  background-color: chartreuse;
  columns: 2;
  grid-column-start: 9;
  grid-column-end: span 4;
  margin: 0;
  padding: 0;
`;

const HorizontalLi = styled.li`
  display: inline-block;
`;

const QrCodeImg = styled.img`
  clear: both;
  display: block;
  margin-top: ${LINE_HEIGHT};
  width: ${QR_CODE_WIDTH};
  @media screen {
    display: none;
  }
`;

function Footer() {
  return (
    <Wrapper>
      <Nav>
        <Promos>
          <li><A href="/texts/378">The Reading Machine Revisited</A></li>
          <li><A href="/texts/379">The Amanuensis</A></li>
          <li><A href="/texts/164">The Reading Machine</A></li>
          <li><A href="/texts/112">Packing My Library</A></li>
          <li><A href="/pantography">Pantography</A></li>
          <li><A href="/wutz">Jean Paul: Schulmeisterlein Wutz</A></li>
        </Promos>
        <SectionLinks>
          <li><A href="/">Home</A></li>
          <li><A href="/texts">Texts</A></li>
          <li><A href="/citations">Citations</A></li>
          <li><A href="/links">Links</A></li>
          <li><A href="/bibliography">Bibliography</A></li>
          <li><A href="/tags">Tags</A></li>
          <li><A href="/remix">Remix</A></li>
          <li><A href="/privacy">Privacy</A></li>
          <li><A href="/api">API</A></li>
          <li><A href="/code">Code</A></li>
          <li><A href="/colophon">Colophon</A></li>
          <li><A href="mailto:joe@joegatt.net">joe@joegatt.net</A></li>
        </SectionLinks>
        <ExternalLinks>
          <li><A href="http://twitter.com/joegattnet">Twitter</A></li>
          <li><A href="http://facebook.com/joegattnet">Facebook</A></li>
          <li><A href="http://plus.google.com/+JoegattNet">Google+</A></li>
          <li><A href="http://youtube.com/joegatt0net">Youtube</A></li>
          <li><A href="http://vimeo.com/joegattnet">Vimeo</A></li>
          <li><A href="http://soundcloud.com/joegattnet">Soundcloud</A></li>
          <li><A href="http://github.com/joegattnet">Github</A></li>
          <li><A href="http://trello.com/b/ClFWLboi/joegatt-net">Trello</A></li>
          <li><A href="http://www.instapaper.com/p/joegattnet">Instapaper</A></li>
          <li><A href="http://medium.com/@joegattnet">Medium</A></li>
          <li><A href="http://www.evernote.com/pub/joegatt/joegatt.net">Evernote</A></li>
          <li><A href="http://joegatt.net/texts.atom">Atom feed</A></li>
        </ExternalLinks>
      </Nav>
      <small><FormattedMessage {...messages.licenseMessage} /></small>
      <small className="copyright">Except as otherwise stated, all content on <span>joegatt.net</span> is <span className="byline author vcard">by <A href="http://joegatt.net" className="fn">Joe Gatt</A></span> and licensed under <A rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" title="Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International Licence">CC BY-NC-SA 4.0</A>.</small>
      <QrCodeImg className="qr_code" src="https://chart.googleapis.com/chart?chs=150x150&amp;cht=qr&amp;rnd=0.987998181888011&amp;chl=http://joegatt.net/" alt="QR code" />
    </Wrapper>
  );
}

export default Footer;
