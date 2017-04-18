import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <section>
        <FormattedMessage {...messages.licenseMessage} />
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
      <footer>
        <nav>
          <ul>
            <li id="menu">
              <ul class="promotions">
                <li><a href="/texts/378">The Reading Machine Revisited</a></li>
                <li><a href="/texts/379">The Amanuensis</a></li>
                <li><a href="/texts/164">The Reading Machine</a></li>
                <li><a href="/texts/112">Packing My Library</a></li>
                <li><a href="/pantography">Pantography</a></li>
                <li><a href="/wutz">Jean Paul: Schulmeisterlein Wutz</a></li>
              </ul>
            </li>
            <li>
              <ul class="sections">
                <li><a href="/">Home</a></li>
                <li><a href="/texts">Texts</a></li>
                <li><a href="/citations">Citations</a></li>
                <li><a href="/links">Links</a></li>
                <li><a href="/bibliography">Bibliography</a></li>
                <li><a href="/tags">Tags</a></li>
                <li><a href="/remix">Remix</a></li>
                <li><a href="/privacy">Privacy</a></li>
                <li><a href="/api">API</a></li>
                <li><a href="/code">Code</a></li>
                <li><a href="/colophon">Colophon</a></li>
                <li><a href="mailto:joe@joegatt.net">joe@joegatt.net</a></li>
              </ul>
            </li>
            <li>
              <ul class="channels">
                <li><a href="http://twitter.com/joegattnet">Twitter</a></li>
                <li><a href="http://facebook.com/joegattnet">Facebook</a></li>
                <li><a href="http://plus.google.com/+JoegattNet">Google+</a></li>
                <li><a href="http://youtube.com/joegatt0net">Youtube</a></li>
                <li><a href="http://vimeo.com/joegattnet">Vimeo</a></li>
                <li><a href="http://soundcloud.com/joegattnet">Soundcloud</a></li>
                <li><a href="http://github.com/joegattnet">Github</a></li>
                <li><a href="http://trello.com/b/ClFWLboi/joegatt-net">Trello</a></li>
                <li><a href="http://www.instapaper.com/p/joegattnet">Instapaper</a></li>
                <li><a href="http://medium.com/@joegattnet">Medium</a></li>
                <li><a href="http://www.evernote.com/pub/joegatt/joegatt.net">Evernote</a></li>
                <li><a href="http://joegatt.net/texts.atom">Atom feed</a></li>
              </ul>
            </li>
          </ul>
        </nav>
        <small class="copyright">Except as otherwise stated, all content on <span>joegatt.net</span> is <span class="byline author vcard">by <a href="http://joegatt.net" class="fn">Joe Gatt</a></span> and licensed under <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" title="Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International Licence">CC BY-NC-SA 4.0</a>.</small>
        <img onload="$(document).trigger('nembrot:painted')" class="qr_code" src="https://chart.googleapis.com/chart?chs=150x150&amp;cht=qr&amp;rnd=0.987998181888011&amp;chl=http://joegatt.net/" alt="QR code" />
      </footer>
    </Wrapper>
  );
}

export default Footer;
