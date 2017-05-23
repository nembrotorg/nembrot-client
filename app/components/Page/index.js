import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from 'components/Page/Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <section>
        <FormattedMessage {...messages.licenseMessage} /> DDDDDDDDDDD
      </section>
      <section>
        <LocaleToggle />
      </section>
      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <A href="https://twitter.com/mxstbr">Max Stoiber</A>,
          }}
        />
      </section>
      <article>
        <nav>
          <ul>
            <li id="menu">
              <ul className="promotions">
                <li><A href="/texts/378">The Reading Machine Revisited</A></li>
                <li><A href="/texts/379">The Amanuensis</A></li>
                <li><A href="/texts/164">The Reading Machine</A></li>
                <li><A href="/texts/112">Packing My Library</A></li>
                <li><A href="/pantography">Pantography</A></li>
                <li><A href="/wutz">Jean Paul: Schulmeisterlein Wutz</A></li>
              </ul>
            </li>
            <li>
              <ul class="sections">
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
              </ul>
            </li>
            <li>
              <ul class="channels">
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
              </ul>
            </li>
          </ul>
        </nav>
        <small class="copyright">Except as otherwise stated, all content on <span>joegatt.net</span> is <span class="byline author vcard">by <A href="http://joegatt.net" class="fn">Joe Gatt</A></span> and licensed under <A rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" title="Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International Licence">CC BY-NC-SA 4.0</A>.</small>
        <img onload="$(document).trigger('nembrot:painted')" class="qr_code" src="https://chart.googleapis.com/chart?chs=150x150&amp;cht=qr&amp;rnd=0.987998181888011&amp;chl=http://joegatt.net/" alt="QR code" />
      </article>
    </Wrapper>
  );
}

export default Footer;
